angular.module('myApp')
 .component('displayComponent',{
   controller: itineraryController,
   controllerAs: "itinerary",
   templateUrl: "public/components/itineraryComponents/childServicesComponent/displayComponent/displayComponent.html",
   bindings: {
     object:'<',
     logo: '<',
     name:'<',
     roomType: '<',
     location: '<',
     startTime: '<',
     startDate: '<',
     endTime: '<',
     endDate: '<',
     price: '<',
     source: '<',
     destination: '<',
     modeValue: '<',
     modeKey:'&',
     seatKey:'&'
   }
 });

 function itineraryController() {
  var itinerary=this;
  itinerary.modeKeyArray=[];
  itinerary.seatKeyArray=[];
  console.log('object is: '+itinerary.object);
  itinerary.$onInit = function() {
         console.log("Inside on init")
         console.log(itinerary.modeValue);
         itinerary.modeKeyArray=itinerary.modeKey({type:itinerary.modeValue});
         itinerary.seatKeyArray=itinerary.seatKey({value:itinerary.modeValue});
         console.log('array of key '+itinerary.modeKeyArray);
         console.log('seat key array '+itinerary.seatKeyArray);
      };
 }
