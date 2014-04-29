<?php

require_once('api.php');
require_once('settings.php');

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$requestMethod = 'GET';

$getfield = '?q=%22code%20smell%22';

$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
