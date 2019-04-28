<?php

namespace cross\jw;
use Illuminate\Support\ServiceProvider;

class FetchServiceProvider extends ServiceProvider{


    public function boot(){

    $this->loadRoutesFrom(__DIR__.'/routes/web.php');
    
    $this->loadViewsFrom(__DIR__.'/views','index');

    $this->loadMigrationsFrom(__DIR__.'/database/migrations');
}

    public function register(){

    }

}