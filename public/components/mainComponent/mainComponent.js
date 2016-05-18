angular.module('app')
.component("mainComponent",{
templateUrl:"public/components/mainComponent/mainComponent.html",
controllerAs:"mainComponent",
controller:["$rootScope","$location",mainComponentController],
$routeConfig: [
    {path: '/landingPage',name: 'LandingPageComponent', component: 'landingPageComponent'},
    {path: '/travelBooking',name: 'TravelBookingComponent', component: 'travelBookingComponent' },
    {path:'/stayBooking',name: 'StayBookingComponent', component: 'stayBookingComponent'},
    {path:'/flightSearchResults',name: 'FlightSearchResultsComponent', component: 'flightSearchResultsComponent'},
    {path:'/trainSearchResults',name:'TrainSearchResultsComponent',component:'trainSearchResultsComponent'},
    {path:'/hotelSearchResults',name:'HotelSearchResultsComponent',component:'hotelSearchResultsComponent'},
    {path:'/itinerary',name:'ItineraryComponent',component:'itineraryParentComponent'},
    {path:'/**',redirectTo:["LandingPageComponent"]}

  ]
});
function mainComponentController($rootScope,$location){


}
