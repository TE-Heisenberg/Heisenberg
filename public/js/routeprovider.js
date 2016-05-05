/**
 * Created by lenovo on 29-04-2016.
 */
angular.module("app", [ "ngMaterial", "materialCalendar", "ngSanitize", "ngRoute", "ngMdIcons", "ngMessages"])
    .run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if ($location.path().indexOf('landing') > 0) {
                $rootScope.landingPage = true;
            }
            else {
                $rootScope.landingPage = false;
            }

        });

    })
    .config(function ($routeProvider) {

        $routeProvider.when("/landing", {

            templateUrl: "views/landing.html",
            controller: "con"

        }).when("/Travelbooking", {

            templateUrl: "views/Travelbooking.html",
            controller: "travelModeController",
            controllerAs: "ctrl1"

        }).when("/staybooking", {

            templateUrl: "views/Hotelbooking.html",
            controller: "hotelSearchController",
            controllerAs: "ctrl2"

        }).when("/flightsearchresults", {

          templateUrl: "views/flightSearchResults.html",
          controller: "flightSearchResultController"

        }).when("/trainsearchresult", {

                templateUrl: "views/trainsearchresult.html",
                controller: "trainSearchResultsController"
            })
            .when("/hotelsearchresult",
                {
                    templateUrl: "views/hotelSearchResults.html",
                    controller: "hotelSearchResultsController"
                })
            .when("/itinerary", {

                templateUrl: "views/ItineraryPage.html",
                controller: "itineraryController"

            }).otherwise({

            redirectTo: "/landing"

        });


    });
