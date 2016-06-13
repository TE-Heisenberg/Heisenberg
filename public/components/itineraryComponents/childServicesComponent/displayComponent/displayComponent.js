angular.module('app')
 .component('displayComponent',{
   controller: itineraryController,
   controllerAs: "itinerary",
   templateUrl: "public/components/itineraryComponents/childServicesComponent/displayComponent/displayComponent.html",
   bindings: {
     modeOrSeatKeyObject:'<',
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
     seatKey:'&',
     displayKeys:'&'
   }
 });

 function itineraryController() {
  var itinerary=this;
  itinerary.modeKeyArray=[];
  itinerary.seatKeyArray=[];
  itinerary.displayKeyObject=new Object();
  console.log('object is: '+itinerary.modeOrSeatKeyObject);
  itinerary.$onInit = function() {
         console.log("Inside on init")
         console.log(itinerary.modeValue);
         itinerary.modeKeyArray=itinerary.modeKey({type:itinerary.modeValue});
         itinerary.seatKeyArray=itinerary.seatKey({value:itinerary.modeValue});
         itinerary.displayKeyObject=itinerary.displayKeys({parentKey:itinerary.modeValue});
         console.log('array of key '+itinerary.modeKeyArray);
         console.log('seat key array '+itinerary.seatKeyArray);
         console.log("display keys object "+itinerary.displayKeyObject);
         console.log(itinerary.displayKeyObject);

      };
 }
