angular.module('app').component("localTravelParentComponent", {
    templateUrl: 'public/components/localSearchResultsParentComponent/localTravelResultsParentComponent.html',
    controllerAs: "localTravelParent",
    controller: localTravelParentController
    ,
    $canActivate:function(mainService){
  		mainService.getLocalTravelFilters().then(function(data){
  			mainService.filter_type=data;
  		});
  		mainService.getNodeMaster().then(function(data){
  			mainService.filter_details=data;
  		});
  		mainService.getLocalTravelSearchResults().then(function(data){
  			mainService.searchResults=data;
  		});
  		return true;
  	}
});
function localTravelParentController($http, $rootScope,mainService) {
    var localTravelParent = this;
    localTravelParent.filter_type=mainService.filter_type.data;
  	localTravelParent.filter_details=mainService.filter_details.data.services.localTravel;
  	localTravelParent.searchResults=mainService.searchResults.data;
    localTravelParent.travelPlanObject = [
        {
            type: "location",
            cityName: "Bangalore"
        },
        {
            type: "transit",
            childServices: {
                booking: {
                    requested: {mode: "localTravel"}
                }
            }
        },
        {
            type: "location",
            cityName: "Bangalore Air Port"
        }
    ];

    localTravelParent.currentnodeedge = function (id, type) {
        console.log(id);
        console.log(type);

    };
}
