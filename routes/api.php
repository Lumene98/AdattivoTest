<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


function getElementi(){
    $icon1 = Illuminate\Support\Facades\File::get(storage_path('app/icons/1.svg'));
    $icon2 = Illuminate\Support\Facades\File::get(storage_path('app/icons/2.svg'));
    $icon3 = Illuminate\Support\Facades\File::get(storage_path('app/icons/3.svg'));
    return array(
        array("number"=> 1, "title"=>"Random 1", "icon"=>$icon1, "subtitle" => "Lorem ipsum dolor sit amet,
        consectetur adipiscing elit."),
        array("number"=> 2, "title"=>"Random 2", "icon"=>$icon2, "subtitle" => "Lorem ipsum dolor sit amet,
        consectetur adipiscing elit."),
        array("number"=> 3, "title"=>"Random 3", "icon"=>$icon3, "subtitle" => "Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.")
    );
}

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('elementi', function() {
    return json_encode(getElementi());
});


Route::get('randomize', function() {
    $randomize = getElementi();
    shuffle($randomize);
    return json_encode($randomize);
});
