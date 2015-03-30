/**
 * Created by Felix Goeb on 18.01.15.
 * check www.efix0.de
 * All rights reserved
 */

importScripts('lib/serviceworker-cache-polyfill.js');

var CACHE_VERSION = 1;
var CURRENT_ASSETS = {
    prefetch: 'prefetch-cache-v' + CACHE_VERSION
};
var CURRENT_IMG = {
    imgCach: 'img-cache-v' + CACHE_VERSION
};
var CURRENT_SLIDES = {
    slides: 'slides-cache-v' + CACHE_VERSION
};

//first step downloading
//no listener for that :D

//second step installing
self.oninstall = function (event) {
    console.log('installed');

    event.waitUntil(
        //cach stuff
        caches.open(CURRENT_ASSETS.prefetch).then(function(cache){
            return cache.addAll([
                'index.html',
                'main.js',
                'js/reveal.js',
                'css/reveal.css',
                'css/theme/moon.css'
            ]);
        }),
        console.log(caches)
    );

};

var storedCaches = [
    CURRENT_ASSETS.prefetch,
    CURRENT_IMG.imgCach,
    CURRENT_SLIDES.slides
];

//third step, ready to use let's go
self.onactivate = function (event) {
    // we are good to go!
    console.log('activated');

    //check for old caches
    //event.waitUntil(
    //    //console.log(caches.keys())
    //    //    .then( function(cacheName){
    //    //
    //    //})
    //)
};


self.onfetch = function (event) {
    console.log('fetched', event)
};


