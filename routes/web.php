<?php

use App\Livewire\Settings\Appearance;
use App\Livewire\Settings\Password;
use App\Livewire\Settings\Profile;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/aboutus2', function () {
    return 'this is about us page';
})->name('about us');

Route::get('/Homepg', function () {
    return view('Homepg');
})->name('about us');
