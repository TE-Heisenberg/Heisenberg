angular.module('app').component("hotelSearchResultsParentComponent",{
	templateUrl: 'public/components/hotelSearchResultsParentComponent/hotelSearchResultsParentComponent.html',
	controllerAs:"hotelSearchResultsParent",
	controller: hotelSearchResultsParentController,
	$canActivate:function(mainService){
		mainService.getHotelFilters().then(function(data){
			mainService.filter_type=data;
		});
		mainService.getNodeMaster().then(function(data){
			mainService.filter_details=data;
		});
		mainService.getHotelSearchResults().then(function(data){
			mainService.searchResults=data;
		});
		return true;
	}
});
function hotelSearchResultsParentController($http,$rootScope, $state,mainService){
  var hotelSearchResultsParent=this;
	hotelSearchResultsParent.filter_type=mainService.filter_type.data;
	hotelSearchResultsParent.filter_details=mainService.filter_details.data.services.stay;
	hotelSearchResultsParent.searchResults=mainService.searchResults.data;
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
