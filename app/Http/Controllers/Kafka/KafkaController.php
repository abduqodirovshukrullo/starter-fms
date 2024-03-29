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
        $topic = 'first_test';
        if($request->topic){
            $topic = $request->topic;
        }
        $message = new Message(
            body: ['body' => $request->all()],
        );
        $producer = Kafka::publishOn($topic)
            ->withMessage($message);
        $producer->send();
        // event(new RobotDataReceived('here we go'));
        return $this->respondSuccess('Success');
    }
}
