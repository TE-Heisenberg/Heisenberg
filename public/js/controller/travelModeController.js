angular.module("app")
    .controller('travelModeController', function ($http, $rootScope,$timeout, $q, $scope) {
      $http.get('public/data/configjsons/nodemaster.json').success(function(data){
          $scope.nodeMaster=data;
      });
});
