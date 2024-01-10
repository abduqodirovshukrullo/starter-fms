<?php

namespace App\Console\Commands;

use App\Events\RobotDataReceived;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Junges\Kafka\Facades\Kafka;
use Junges\Kafka\Contracts\KafkaConsumerMessage;



class KafkaConsumer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'kafka:consume {--topic=first_test}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Consume kafka topic';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        
        $consumer = Kafka::createConsumer(['first_test'])
        
        ->withHandler(new MessageHandler)->build();
        
        $consumer->consume();
    }
}

class MessageHandler{
    public function __invoke(\Junges\Kafka\Contracts\KafkaConsumerMessage $message){
        event(new RobotDataReceived($message->getBody()));
    }
}
