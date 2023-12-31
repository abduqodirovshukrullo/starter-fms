<?php

namespace jeremykenedy\LaravelLogger\App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use jeremykenedy\LaravelLogger\App\Http\Traits\ActivityLogger;

class LogActivity
{
    use ActivityLogger;

    /**
     * Handle an incoming request.
     *
     * @param Request  $request
     * @param \Closure $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next, $description = null)
    {

        $response = $next($request);
        $details = [
            'raw'=>$response->getContent()
        ];
        if (config('LaravelLogger.loggerMiddlewareEnabled') && $this->shouldLog($request)) {
            $this->activity($description,json_encode($details));
        }

        

        return $response;
    }

    /**
     * Determine if the request has a URI that should log.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return bool
     */
    protected function shouldLog($request)
    {
        foreach (config('LaravelLogger.loggerMiddlewareExcept', []) as $except) {
            if ($except !== '/') {
                $except = trim($except, '/');
            }

            if ($request->is($except)) {
                return false;
            }
        }

        return true;
    }
}
