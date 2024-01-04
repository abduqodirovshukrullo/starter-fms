<?php

use App\Http\Controllers\Dashboard\Admin\FleetController;
use App\Http\Controllers\Dashboard\Admin\UserController;
use Illuminate\Support\Facades\Route;


// Route::get('/',[\App\Http\Controllers\Dashboard\Library\LibCategoryGroupController::class,'index'])->name('index');
Route::post('/',[FleetController::class,'create'])->name('create');
// Route::get('/{lib_category_group}',[\App\Http\Controllers\Dashboard\Library\LibCategoryGroupController::class,'show'])->name('show');
// Route::match(['put', 'patch'],'/{lib_category_group}',[\App\Http\Controllers\Dashboard\Library\LibCategoryGroupController::class,'update'])->name('update');
// Route::delete('/{lib_category_group}',[\App\Http\Controllers\Dashboard\Library\LibCategoryGroupController::class,'destroy'])->name('destroy');

