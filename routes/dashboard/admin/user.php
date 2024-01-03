<?php

use App\Http\Controllers\Dashboard\Admin\UserController;
use Illuminate\Support\Facades\Route;


// Route::get('/',[\App\Http\Controllers\Dashboard\Library\LibCategoryGroupController::class,'index'])->name('index');
Route::get('/',[UserController::class,'list'])->name('list');
Route::get('/{user}',[UserController::class,'show'])->name('show');
Route::post('/',[UserController::class,'create'])->name('create');
Route::delete('/{user}',[UserController::class,'delete'])->name('delete');
Route::get('/{user}/actions',[UserController::class,'actions'])->name('actions');
// Route::get('/{lib_category_group}',[\App\Http\Controllers\Dashboard\Library\LibCategoryGroupController::class,'show'])->name('show');
// Route::match(['put', 'patch'],'/{lib_category_group}',[\App\Http\Controllers\Dashboard\Library\LibCategoryGroupController::class,'update'])->name('update');
// Route::delete('/{lib_category_group}',[\App\Http\Controllers\Dashboard\Library\LibCategoryGroupController::class,'destroy'])->name('destroy');

