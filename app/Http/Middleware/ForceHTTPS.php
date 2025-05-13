<?php

namespace App\Http\Middleware;

use Closure;

class ForceHTTPS {

    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if (config('app.force_https')) {
            if (!$request->secure()) {
                return redirect()->secure($request->getRequestUri());
            }
            $response->headers->set(
                'Strict-Transport-Security',
                'max-age=31536000; includeSubdomains',
                true
            );  
        }
        return $response; 
    }
}
