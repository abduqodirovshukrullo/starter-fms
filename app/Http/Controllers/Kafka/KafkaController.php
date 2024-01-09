<?php

namespace App\Http\Controllers\Kafka;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Junges\Kafka\Facades\Kafka;
use Junges\Kafka\Message\Message;

class KafkaController extends Controller
{
    public function produce(Request $request){
        $message = new Message(
            headers: ['header-key' => 'header-value'],
            body: ['key' => 'value'],
            key: 'kafka key here'  
        );
        $producer = Kafka::publishOn('first_test')
            ->withHeaders(['header-key' => 'header-value'])
            ->withMessage($message);
        $producer->send();
        return $this->respondSuccess('Success');
    }
}
