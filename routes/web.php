<?php

use App\Http\Controllers\Admin\SiteSettingController;
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

Route::prefix('admin')->name('admin.')->middleware(['auth'])->namespace('App\Http\Controllers\Admin')->group(function () {
    Route::get('/', 'DashboardController@index')->name('dashboard');

    Route::prefix('site-setting-management')->name('setting.')->controller('SiteSettingController')->group(function () {
        Route::get('', 'index')->name('index');
        Route::post('/update', 'update')->name('update');
        Route::post('/udpdate-seo', 'updateSEO')->name('updateSEO');
    });
});


// including auth routes
require __DIR__ . '/auth.php';
