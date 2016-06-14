angular.module('app').component("trainSearchResultsParentComponent", {
    templateUrl: 'public/components/trainSearchResultsParentComponent/trainSearchResultsParentComponent.html',
    controllerAs: "trainSearchResultsParent",
    controller: trainSearchResultsParentController,
    $canActivate:function(mainService){
  		mainService.getTrainFilters().then(function(data){
  			mainService.filter_type=data;
  		});
  		mainService.getEdgeMaster().then(function(data){
  			mainService.filter_details=data;
  		});
  		mainService.getTrainSearchResults().then(function(data){
  			mainService.searchResults=data;
  		});
  		return true;
  	}
});
function trainSearchResultsParentController($http, $rootScope,mainService) {
    var trainSearchResultsParent = this;
    trainSearchResultsParent.filter_type=mainService.filter_type.data;
  	trainSearchResultsParent.filter_details=mainService.filter_details.data.services.train;
  	trainSearchResultsParent.searchResults=mainService.searchResults.data;
    trainSearchResultsParent.travelPlanObject = [
        {
            type: "location",
            cityName: "Bangalore"
        },
        {
            type: "transit",
            childServices: {
                booking: {
                    requested: {mode: "flight"}
                }
            }
        },
        {
            type: "location",
            cityName: "Delhi"
        }
    ];

    trainSearchResultsParent.currentnodeedge = function (id, type) {
        console.log(id);
        console.log(type);

    };
}
