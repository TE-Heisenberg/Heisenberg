(function () {
    'use strict';

    angular
        .module('app')
        .factory('FetchService', Service);

    function Service($http, $q) {
        var service = {};

        service.travelPlan = travelPlan;
        service.newNode = newNode;
        service.newEdge = newEdge;

        return service;

        function travelPlan() {
            var deferred = $q.defer();

            $http.get("public/data/travelplan.json").then(function (response) {

                deferred.resolve(response.data);
            });
            return deferred.promise;

        }

        function newNode() {
            var deferred = $q.defer();

            $http.get("public/data/newNode.json").then(function (response) {

                deferred.resolve(response.data);
            });
            return deferred.promise;

        }

        function newEdge() {
            var deferred = $q.defer();

            $http.get("public/data/newEdge.json").then(function (response) {

                deferred.resolve(response.data);
            });
            return deferred.promise;

        }


    }
})();
