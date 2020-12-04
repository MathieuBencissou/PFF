<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/challenges', function (Request $request) {
//     return $request->challenges();
// });

Route::post('/login', [App\Http\Controllers\LoginController::class, 'login'])->name('login');
Route::post('/register', [App\Http\Controllers\RegisterController::class, 'register']);
Route::post('/logout', [App\Http\Controllers\LoginController::class, 'logout'])->middleware('auth:api');
Route::post('/AddChallenge', [App\Http\Controllers\ChallengesController::class, 'AddChallenge'])->middleware('auth:api');
Route::get('/challenges', [App\Http\Controllers\ChallengesController::class, 'GetChallenges'])->middleware('auth:api');
Route::delete('/challenges/{id}', [App\Http\Controllers\ChallengesController::class, 'DeleteChallenge'])->middleware('auth:api');
Route::put('/challenges/{id}', [App\Http\Controllers\ChallengesController::class, 'EditChallenge'])->middleware('auth:api');

Route::post('/AddProject', [App\Http\Controllers\PartnerController::class, 'AddProject'])->middleware('auth:api');
Route::get('/Partner', [App\Http\Controllers\PartnerController::class, 'GetProject'])->middleware('auth:api');
Route::delete('/Partner/{id}', [App\Http\Controllers\PartnerController::class, 'DeleteProject'])->middleware('auth:api');
Route::put('/Partner/{id}', [App\Http\Controllers\PartnerController::class, 'EditProject'])->middleware('auth:api');
