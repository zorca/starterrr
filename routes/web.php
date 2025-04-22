<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/for-taxi', function () {
    return Inertia::render('home');
})->name('for-taxi');

Route::get('/for-trucks', function () {
    return Inertia::render('home');
})->name('for-trucks');

Route::get('/for-special-equipment', function () {
    return Inertia::render('home');
})->name('for-special-equipment');

Route::get('/issuing-licenses', function () {
    return Inertia::render('home');
})->name('issuing-licenses');

Route::get('/for-partners', function () {
    return Inertia::render('home');
})->name('for-partners');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
