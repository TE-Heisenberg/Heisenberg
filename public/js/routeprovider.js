/**
 * Created by lenovo on 29-04-2016.
 */
 var module=angular.module("app", ["ngMaterial", "materialCalendar", "ngSanitize", "ngRoute", "ngMdIcons", "ngMessages", "mdPickers", "angular-click-outside","ngComponentRouter"]);
  
    module.value("$routerRootComponent","mainComponent");

//     .config(function ($routeProvider) {
//
//         $routeProvider.when("/landing", {
//
//             templateUrl: "views/HTML/landing.html",
//             controller: "con"
//
//         }).when("/Travelbooking", {
//
//             templateUrl: "views/HTML/Travelbooking.html",
//             controller: "travelModeController"
//
//         }).when("/staybooking", {
//
//             templateUrl: "views/HTML/Hotelbooking.html",
//             controller: "hotelSearchController",
//             controllerAs: "ctrl2"
//
//         }).when("/flightsearchresults", {
//
//             templateUrl: "views/HTML/flightSearchResults.html",
//             controller: "flightSearchResultController"
//
//         }).when("/trainsearchresult", {
//
//                 templateUrl: "views/HTML/trainsearchresult.html",
//                 controller: "trainSearchResultsController"
//             })
//             .when("/hotelsearchresult",
//                 {
//                     templateUrl: "views/HTML/hotelSearchResults.html",
//                     controller: "hotelSearchResultsController"
//                 })
//             .when("/itinerary", {
//
//                 templateUrl: "views/HTML/ItineraryPage.html",
//                 controller: "itineraryController"
//
//             }).otherwise({
//
//             redirectTo: "/landing"
//
//         });
//
//
//     }).controller('indexController', function ($rootScope) {
//
// })

//;
