'use strict';

angular.module('brasil.filters').filter('cpfCnpj', ['$filter', function ($filter) {
    return function (input) {
        var str = input + '';
        if (str.length === 11) {
            str = $filter('cpf')(str, 'cpf');
        } else if (str.length === 14) {
            str = $filter('cnpj')(str, 'cnpj');
        } else {
            str;
        }
        return str;
    };
}]);

