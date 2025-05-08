<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Session\Store;
use Illuminate\Support\Facades\Session;

class ReadOnlySession
{
    public function handle(Request $request, Closure $next)
    {
        // Start the session to allow reads
        $session = Session::getFacadeRoot();
        $session->start();

        // Handle the request
        $response = $next($request);

        // Prevent session save to avoid writes
        // Instead of calling $session->save(), we skip it
        // This ensures no UPDATE queries are issued
        return $response;
    }
}