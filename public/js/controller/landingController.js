angular.module("app").controller("landingController", function ($location,$rootScope,$scope, $filter, $http, $q) {
    $rootScope.landingPage = true;
    $scope.messages = [{
        what: 'Dinesh need to submit the Aadhar card no',

    },
        {
            what: 'Tim has Asked for clarifications',
        }
        ,
        {
            what: 'Your travel approval is in pending with manager',
        },

        {
            what: 'Your travel approval is in completed with manager',
        },

        {
            what: 'You need to submit the expenses',
        }
    ];
    $scope.go=function(loc) {
        console.log("Hello");
        $location.path(loc);
    };
    $scope.array = [
        {date: "12-07-2012", city: "Delhi to Chennai"},
        {date: "18-09-2016", city: "Mumbai to Chennai"},
        {date: "22-09-2016", city: "Mumbai to Chennai"},

    ];
    $scope.array1 = [
        {date: "Travel from Chennai to Banglore"},
        {date: "Travel from Newyork to Bali"},
        {date: "Lemon Tree hotel in Chennai"},
        {date: "Gateway Hotel in Electronicity"}

    ];
    $scope.array2 = [
        {data: "Your Docket has been Generated take out the printout"}
        // {data:"Submit Your Travel Epxenses"},
        // {data:"Bangalore to pune flight will be delayed due to bad weather"}
    ];
    //  $scope.array3=[
    //    {data1:"New helicopters has been added to help the people"},
    //    {data1:"Indigo flights are running late due to heavy rains"}


    //  ];
    $scope.calendarshow =function(){

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
    };
});
