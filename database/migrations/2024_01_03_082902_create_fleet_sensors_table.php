<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fleet_sensors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fleet_id')->constrained();
            $table->foreignId('sensor_attribute_id')->constrained();
            $table->float('value');
            $table->timestamps();
            $table->userstamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fleet_sensors');
    }
};
