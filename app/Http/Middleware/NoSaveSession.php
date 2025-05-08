<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class NoSaveSession
{
    public function handle(Request $request, Closure $next)
    {
        // Switch to the nosave_database driver
        config(['session.driver' => 'nosave_database']);

        // Start the session
        $session = Session::getFacadeRoot();
        $session->start();

        // Handle the request
        $response = $next($request);

        // Skip saving to prevent writes
        return $response;
    }
}