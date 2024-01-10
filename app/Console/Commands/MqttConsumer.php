<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Junges\Kafka\Facades\Kafka;
use Junges\Kafka\Contracts\KafkaConsumerMessage;

class MqttConsumer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mqtt:consume {--topic=first_test}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Consume mqtt topic';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $consumer = Kafka::createConsumer(['first_test'])
        ->withBrokers('localhost:9092')
        ->withAutoCommit()
        ->withHandler(function(KafkaConsumerMessage $message) {
            Log::info(json_encode($message));
        })
        ->build();
        
        $consumer->consume();
    }
}
