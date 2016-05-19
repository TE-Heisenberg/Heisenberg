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

// var setObj = function(obj, keyString,value) {
// 		console.log("Before Replace ", keyString)
//     keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
//     console.log("After first replace", keyString);
//     keyString = keyString.replace(/^\./, '');           // strip a leading dot
//     console.log("After second replace", keyString);
//     var hierarchyWiseKeysArray = keyString.split('.');
//
//     while (hierarchyWiseKeysArray.length > 1)
//         obj = obj[hierarchyWiseKeysArray.shift()];
//     return obj[hierarchyWiseKeysArray.shift()] = value;
//
// }

function mainComponentController($rootScope,$location){
    //
    //
    //  mainComponent.travelPlanData = {};
    //  mainComponent.travelPlanInitializer = function(indexForTravelMode) {
    //    var modeOfTravel = ["oneWay", "twoWay", "multiWay"];
    //    mainComponent.travelPlanData = {
    //      "travelType": modeOfTravel[indexForTravelMode+1],
    //      "state": "initial",
    //      "nodes": {},
    //      "edges": {}
    //
    //   };
    //
    //    var indexForNodesAndEdges = 0;
    //    while(indexForNodesAndEdges < indexForTravelMode+1) {
    //       mainComponent.nodeEdgeInitializer("nodes");
    //       mainComponent.nodeEdgeInitializer("edges");
    //    }
    //
    //    mainComponent.nodeEdgeInitializer("nodes");
    //
    //  }
    //
    //  mainComponent.nodeEdgeInitializer = function(nodeOrEdge)
    //  {
    //    var numberOfElements = Object.keys(mainComponent.travelPlanData[nodeOrEdge]).length;
    //    var id = nodeOrEdge.slice(0, -1)+numberOfElements;
    //    mainComponent.travelPlanData[nodeOrEdge][id] = {
    //      "status": "initial"
    //    };
    //
    //   //  mainComponent.nodeEdgeInitializer[nodeEdgeInitializer]
    //  }
    //
    //
    // mainComponent.insertInformationInTravelPlan = function(keyString, value)
    // {
    //   setObj(mainComponent.travelPlanData, keyString,value);
    // }
    //  mainComponent.insertNodeEdgeInfo = function(nodeOrEdge) {
    //
    //  }
    //
    //
    //
    //  mainComponent.childServicesInitializer  = function(nodeOrEdge) {
    //
    //  }
    //
    //  mainComponent.insertChildServicesData = function(nodeOrEdge) {
    //
    //  }
    //





     //  var mainComponent=this;
       // if ($location.path().indexOf('landingPage') > 0)
      // {
      //   console.log("hello landing is there");
      //     mainComponent.landingPage = true;
      //     console.log(mainComponent.landingPage);
      // }
      // else {
      //   console.log("hello");
      //     mainComponent.landingPage = false;
      // }

}
