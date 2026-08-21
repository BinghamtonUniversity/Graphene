<?php
namespace App\Http\Middleware;

use Closure;

class ForceHTTPS {

    public function handle($request, Closure $next)
    {
        // 1. If HTTPS is forced and request is NOT secure, redirect immediately
        if (config('app.force_https') && !$request->secure()) {
            return redirect()->secure($request->getRequestUri(), 301);
        }

        $response = $next($request);

        // 2. Attach HSTS header to secure responses
        if (config('app.force_https')) {
            $response->headers->set(
                'Strict-Transport-Security',
                'max-age=31536000; includeSubdomains',
                true
            );  
        }

        return $response; 
    }
}