'use strict';

angular.module('brasil.filters').filter('codigoBarra', function() {
    return function (input) {
        var str = input + '';
        str=str.replace(/^(\d{4})(\d)/,'$1 $2');
        str=str.replace(/^(\d{4})\s(\d{4})(\d)/,'$1 $2 $3');
        str=str.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/,'$1 $2 $3 $4');
        str=str.replace(/^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})(\d)/,'$1 $2 $3 $4 $5');
        str=str.replace(/^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})(\d)/,'$1 $2 $3 $4 $5 $6');
        str=str.replace(/^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})(\d)/,'$1 $2 $3 $4 $5 $6 $7');
        str=str.replace(/^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})(\d)/,'$1 $2 $3 $4 $5 $6 $7 $8');
        str=str.replace(/^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})(\d)/,'$1 $2 $3 $4 $5 $6 $7 $8 $9');
        str=str.replace(/^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})(\d)/,'$1 $2 $3 $4 $5 $6 $7 $8 $9 $10');
        str=str.replace(/^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})(\d)/,'$1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11');
        return str;
    };
});