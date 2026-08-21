<?php

namespace App\Providers;

// use App\Libraries\MySQLStore;
use Illuminate\Cache\DatabaseStore;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Support\Facades\DB;


use Config;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(ConnectionInterface $connection) {
        if (config('app.force_https')) {
            URL::forceScheme('https');
            $this->app['request']->server->set('HTTPS', 'on'); // Forces $request->secure() to return true
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Remove Commented Code to Log SQL To Log File:
        // tail -f storage/logs/laravel.log

        // Event::listen('Illuminate\Database\Events\QueryExecuted', function ($query) {
        //     Log::debug($query->sql);
        // });
    }
}
