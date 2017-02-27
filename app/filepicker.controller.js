(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('filepickerController', filepickerController);

    filepickerController.$inject = [];

    /* @ngInject */
    function filepickerController() {
        var vm = this;
        vm.title = 'filepickerController';

        //leave controller empty

    }
})();
