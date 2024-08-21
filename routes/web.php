<?php

use App\Http\Controllers\ProfileController;
use GuzzleHttp\Middleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        // 'isLogin' => auth()->check(),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('admin')->name('admin.')->middleware(['auth'])->namespace('App\Http\Controllers\Admin')->group(function () {
    Route::get('/', 'DashboardController@index')->name('dashboard');
    Route::get('/site-setting-management', 'SiteSettingController@index')->name('setting.index');
    Route::post('/site-setting-management/update', 'SiteSettingController@update')->name('setting.update');
});


// including auth routes
require __DIR__ . '/auth.php';
