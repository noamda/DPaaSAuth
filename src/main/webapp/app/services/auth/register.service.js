(function () {
    'use strict';

    angular
        .module('dPaaSAuthApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
