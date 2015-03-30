/**
 * Created by Felix Goeb on 19.01.15.
 * check www.efix0.de
 * All rights reserved
 */


//check for browser support of service worker and register
if ('serviceWorker' in navigator) {

    //register returns a promise
    navigator.serviceWorker.register('serviceWorker.js', {
        scope: '/app/'
    }).then(function (reg) {
        console.log('sW registered', reg);
    }).catch(function (err) {
        console.log('something with the sw went wrong', err);
    });
}