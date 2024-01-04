<?php

namespace App\Http\Controllers\Dashboard\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Admin\CreateFleetRequest;
use Illuminate\Http\Request;

class FleetController extends Controller
{
    public function create(CreateFleetRequest $request){
        $request = $request->validated();
        

    }
}
