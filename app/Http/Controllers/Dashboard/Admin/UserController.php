<?php

namespace App\Http\Controllers\Dashboard\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Admin\CreateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;
use jeremykenedy\LaravelLogger\App\Http\Traits\IpAddressDetails;
use jeremykenedy\LaravelLogger\App\Http\Traits\UserAgentDetails;
use jeremykenedy\LaravelLogger\App\Models\Activity;

class UserController extends Controller
{
    public function create(CreateUserRequest $request){

        $data = $request->validated();

        $user = User::create([
            "name"=>$data['name'],
            "email"=>$data['email'],
            "password"=>Hash::make($data['password'])
        ]);

        $user->assignRole('supervisor');

        return $this->respondSuccess('User successfully created!');

    }

    public function list(){

        $users = User::role('supervisor')->paginate(10);

        return $this->apiResponse([
            'success'=>true,
            'message'=>'Users successfully fetched!',
            'result'=>$users
        ]);
    }

    public function delete(User $user){
        
        $user->delete();

        return $this->respondSuccess('User successfully deleted!');

    }

    public function show(User $user){
        return $this->apiResponse([
            'success'=>true,
            'message'=>'User successfully fetched!',
            'result'=>$user
        ]);
    }

    public function actions(User $user){

        $activity = Activity::findOrFail($user->id);

        $userDetails =User::find($activity->userId);
        $userAgentDetails = UserAgentDetails::details($activity->userAgent);
        $ipAddressDetails = IpAddressDetails::checkIP($activity->ipAddress);
        $userActivities = Activity::where('userId', $user->id)
        ->orderBy('id', 'desc')
        ->paginate(10);
          

        $data = [
           
            'userDetails'           => $userDetails,
            'ipAddressDetails'      => $ipAddressDetails,
            'userAgentDetails'      => $userAgentDetails,
            'userActivities'        => $userActivities,
            'isClearedEntry'        => false,
        ];

        return $this->apiResponse([
            'success'=>true,
            'message'=>'User successfully fetched!',
            'result'=>$data
        ]);
    }
}
