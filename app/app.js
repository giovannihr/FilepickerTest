(function() {
    'use strict';

    angular
        .module('myApp', ['angular-filepicker'])
        .config(function(filepickerProvider) {


            //You have to register for free and get a key at   https://www.filestack.com/pricing/free
            // change the setKey to your App key
            filepickerProvider.setKey('AC7780WYMR3KFyI7sk2Wgz');
        });
})();
