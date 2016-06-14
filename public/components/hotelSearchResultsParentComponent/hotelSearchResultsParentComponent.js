angular.module('app').component("hotelSearchResultsParentComponent",{
	templateUrl: 'public/components/hotelSearchResultsParentComponent/hotelSearchResultsParentComponent.html',
	controllerAs:"hotelSearchResultsParent",
	controller: hotelSearchResultsParentController,
  bindings: {
   searchResults: '<'
  }
});
function hotelSearchResultsParentController($http,$rootScope, $state,mainService){
  var hotelSearchResultsParent=this;
	hotelSearchResultsParent.filter_type=mainService.hotel_filter_type;
  console.log(hotelSearchResultsParent.filter_type);
	hotelSearchResultsParent.filter_details=mainService.nodeMaster.services.stay;
  console.log(hotelSearchResultsParent.filter_details);
	// hotelSearchResultsParent.searchResults=mainService.searchResults.data;
  hotelSearchResultsParent.call= function(){
    $state.go('hotelSearchResults');
  };

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

  hotelSearchResultsParent.fillSelectedData= function(){

  };

  // hotelSearchResultsParent.currentnodeedge = function (id, type) {
  // console.log(id);
  // console.log(type);
  // if(type=='stay') $state.go('hotelSearchResults');
  // else if(type=='flight') $state.go('flightSearchResults');
  // else if(type=='train')  $state.go('trainSearchResults');
  // };

  // hotelSearchResultsParent.currentnodeedge("ssd", 'train');
}
