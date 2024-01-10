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
        $event = RobotDataReceived::class;
        $consumer = Kafka::createConsumer(['first_test'])
        
        ->withHandler(function (KafkaConsumerMessage $message)use ($event) {
            ($event)::dispatch($message->getBody());
            $this->info('Received message: ' . json_encode($message->getBody()));
        })->build();
        
        $consumer->consume();
    }
}
