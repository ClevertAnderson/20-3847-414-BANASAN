<?php

use App\Http\Controllers\NoteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/register', [UserController::class, 'showRegistrationForm']);
Route::post('/register', [UserController::class, 'register'])->name('register');

Route::get('/login', [UserController::class, 'showLoginForm']);
Route::post('/login', [UserController::class, 'login'])->name('login');

Route::middleware('auth')->group(function () {
    // Redirect to Welcome Page (Dashboard) after login
    Route::get('/dashboard', function () {
        return view('welcome');
    })->name('dashboard');

    // Notes Routes
    Route::resource('notes', NoteController::class);

    // Logout Route
    Route::post('/logout', [UserController::class, 'logout'])->name('logout');
});

// Default route (redirect to login if not authenticated)
Route::get('/', function () {
    return redirect('/login');
});
