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

        Log::info('producer______');    
        Log::info($request->all());
        // $conf = new \RdKafka\Conf();
        // $conf->set('log_level', (string) LOG_DEBUG);
        // $conf->set('debug', 'all');
        // $rk = new \RdKafka\Producer($conf);
        // $rk->addBrokers("127.0.0.1:9092");
        // $topic = $rk->newTopic("first_test");
        // $topic->produce(RD_KAFKA_PARTITION_UA, 0, "Message payload");
        $message = new Message(
            headers: ['header-key' => 'header-value'],
            body: ['data' => $request->all()],
            key: 'kafka key here'  
        );
        $producer = Kafka::publishOn('first_test')
            ->withHeaders(['header-key' => 'header-value'])
            ->withMessage($message);
        $producer->send();
        return $this->respondSuccess('Success');
    }
}
