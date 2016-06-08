/**
 * Created by lenovo on 08-06-2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .factory('TokenService', Service);

    function Service($q) {
        var service = {};

        service.setToken = setToken;

        return service;

        function setToken(response) {
            var deferred = $q.defer();

            window.jwtToken = response;
            angular.bootstrap(document, ['app']);
            deferred.resolve();

            return deferred.promise;

        }


    }
})();
