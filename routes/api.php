<?php

use App\Http\Controllers\Kafka\KafkaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('dashboard')->middleware(['activity','auth:api'])->name('dashboard.')->group(__DIR__.'/dashboard/index.php');
Route::prefix('sign-in')->name('sign-in.')->group(__DIR__.'/auth/index.php');
Route::post('/kafka/produce',[KafkaController::class,'produce'])->name('produce');
