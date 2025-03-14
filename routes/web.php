<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoteController;

// Registration Routes
Route::get('/register', [UserController::class, 'showRegistrationForm']);
Route::post('/register', [UserController::class, 'register'])->name('register');

// Login Routes
Route::get('/login', [UserController::class, 'showLoginForm']);
Route::post('/login', [UserController::class, 'login'])->name('login');

// Protected Routes (Requires Authentication)
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return view('welcome'); // Show welcome.blade.php instead of plain text
    })->name('dashboard');

    Route::post('/logout', [UserController::class, 'logout'])->name('logout'); // FIXED
});
Route::resource('notes', NoteController::class);