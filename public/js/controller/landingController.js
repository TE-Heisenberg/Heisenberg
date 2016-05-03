angular.module("app").controller("calendarCtrl", ["$scope", "$filter", "$http", "$q", function ($scope, $filter, $http, $q) {

    $scope.dayFormat = "d";

    // To select a single date, make sure the ngModel is not an array.
    $scope.selectedDate = null;

    // If you want multi-date select, initialize it as an array.
    $scope.selectedDate = [];

    $scope.firstDayOfWeek = 0; // First day of the week, 0 for Sunday, 1 for Monday, etc.
    $scope.setDirection = function (direction) {
        $scope.direction = direction;
        $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
    };

    $scope.dayClick = function (date) {
        $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
    };

    $scope.prevMonth = function (data) {
        $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };

    $scope.nextMonth = function (data) {
        $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };

    $scope.tooltips = true;
    $scope.setDayContent = function (date) {

        // You would inject any HTML you wanted for
        // that particular date here.
        return "<p></p>";

        // You could also use an $http function directly.
        return $http.get("/some/external/api");

        // You could also use a promise.
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve("<p></p>");
        }, 1000);
        return deferred.promise;

    };

}]).controller("con", ["$scope", "$http","$location", function ($scope,$http,$location) {

    var url = "json1.json";

    $http.get("public/data/landing/json1.json").success(function (response) {
        $scope.messages = response;
        console.log(response);

    });
    $http.get("public/data/landing/json2.json").success(function (response) {
        $scope.plan = response;
        console.log(response);
    });

    $http.get("public/data/landing/json3.json").success(function (response) {
        $scope.array2 = response;
        console.log(response);
    });

    $http.get("public/data/landing/json4.json").success(function (response) {
        $scope.array1 = response;
        console.log(response);
    });

    $scope.go=function(path)
    {
      console.log("hello");
      $location.path(path);
    }

}]);
