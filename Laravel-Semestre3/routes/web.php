<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::prefix('/')->group(function (){

//session_start();
//Les liens hypertexte ne fonctionnent pas, erreur 404 exo 1
Route::get('',[UserController::class, 'signin'])->name('racine');

Route::post('signin',[UserController::class, 'signin'])->name('signi');
Route::get('signin', [UserController::class, 'signin'])->name('signin');

Route::post('authenticate', [UserController::class, 'authenticate'])->name('authenticate');

Route::post('create', [UserController::class, 'create'])->name('create');
Route::get('create', [UserController::class, 'create'])->name('creat');

Route::post('creer', [UserController::class, 'creer'])->name('creer');

/////////////////////////////////////////////////////////////////////////////

Route::get('page', [UserController::class, 'page'])->name('page');

Route::get('articleview1', [UserController::class, 'articleview1'])->name('articleview1');
Route::get('articleview2', [UserController::class, 'articleview2'])->name('articleview2');
Route::get('articleview3', [UserController::class, 'articleview3'])->name('articleview3');

/////////////////////////////////////////////////////////////////////////////

Route::prefix('admin/')->middleware('auth.myuser')->group(function (){

Route::get('account', [UserController::class, 'account'])->name('account');

Route::post('changepassword', [UserController::class, 'changepassword'])->name('changepassword');

Route::post('deleteuser', [UserController::class, 'delete'])->name('delete');

///////////////////////////////////////////////////////////////////////////
Route::get('articlecreer', [UserController::class, 'articlecreer'])->name('articlecreer');

Route::post('newart', [UserController::class, 'newart'])->name('newart');

Route::get('myarticles',[UserController::class, 'myarticles'])->name('myarticles');

Route::get('modify',[UserController::class, 'modify'])->name('modify');

Route::post('putmodif',[UserController::class, 'putmodif'])->name('putmodif');
//////
Route::get('depub',[UserController::class, 'depub'])->name('depub');
Route::get('pub',[UserController::class, 'pub'])->name('pub');

///////////////////////////////////////////////////////////////////////////

Route::get('formpassword',[UserController::class, 'formpassword'])->name('formpassword');

Route::post('signout', [UserController::class, 'signout'])->name('signout');
});

