'use strict';

angular.module('brasil.filters').filter('placa', function() {
    return function (input) {
        var str = input + '';
        str = str.replace(/(^[a-zA-Z]{3})(\d{4})/, '$1-$2');
        return str.toUpperCase();
    };
});
