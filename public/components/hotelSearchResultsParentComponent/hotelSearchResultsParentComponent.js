angular.module('app').component("hotelSearchResultsParentComponent",{
	templateUrl: 'public/components/hotelSearchResultsParentComponent/hotelSearchResultsParentComponent.html',
	controllerAs:"hotelSearchResultsParent",
	controller: hotelSearchResultsParentController
});
function hotelSearchResultsParentController($http,$rootScope){
  var hotelSearchResultsParent=this;
  hotelSearchResultsParent.travelPlanObject = [
    { type:"location",
    cityName:"Bangalore"
  },
  {
    type:"transit",
    childServices:
    {
      booking:{
        requested:{mode:"flight"}
      }
    }
  },
  {
    type:"location",
    cityName:"Delhi"
  }
];

hotelSearchResultsParent.currentnodeedge = function (id, type) {
  console.log(id);
  console.log(type);

};
}
