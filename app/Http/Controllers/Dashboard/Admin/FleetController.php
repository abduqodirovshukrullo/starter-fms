<?php

namespace App\Http\Controllers\Dashboard\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Admin\CreateFleetRequest;
use App\Models\Fleet;
use App\Models\FleetDetail;
use Illuminate\Http\Request;

class FleetController extends Controller
{

    public function list(Request $request){
        
        $fleets = Fleet::query();

        if($request->type){
            $fleets = $fleets->where('type',$request->type);
        }

        $fleets = $fleets->paginate(10);

        return $this->apiResponse([
            'success'=>true,
            'message'=>'Users successfully fetched!',
            'result'=>$fleets
        ]);

    }

    public function create(CreateFleetRequest $request){
        $request = $request->validated();
        $fleet = Fleet::create([
            'number'=>$request['number'],
            'type'=>$request['type'],
            'status'=>0//new
        ]);
        $fleetDetails = FleetDetail::create([
            'fleet_id'=>$fleet->id,
            'name'=>$request['name']
        ]);

        return $this->respondCreated(['success'=>true,'message'=>'Successfully created!']);
    }
}
