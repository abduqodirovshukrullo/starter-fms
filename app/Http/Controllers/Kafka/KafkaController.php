<?php

namespace App\Http\Controllers\Kafka;

use App\Events\RobotDataReceived;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Junges\Kafka\Facades\Kafka;
use Junges\Kafka\Message\Message;

class KafkaController extends Controller
{
    public function produce(Request $request){

        Log::info('producer______');    
        Log::info($request->all());
        $message = new Message(
            headers: ['header-key' => 'header-value'],
            body: ['data' => $request->all()],
            key: 'kafka key here'  
        );
        $producer = Kafka::publishOn('first_test')
            ->withMessage($message);
        $producer->send();
        event(new RobotDataReceived('here we go'));
        return $this->respondSuccess('Success');

    }
}
