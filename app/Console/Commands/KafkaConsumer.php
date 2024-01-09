<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
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
        ->withBrokers('localhost:8092')
        ->withAutoCommit()
        ->withHandler(function(KafkaConsumerMessage $message) {
            // Handle your message here
        })
        ->build();
        
        $consumer->consume();
    }
}
