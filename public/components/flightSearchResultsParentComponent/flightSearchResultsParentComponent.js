angular.module('app').component("flightSearchResultsParentComponent",{
	templateUrl: 'public/components/flightSearchResultsParentComponent/flightSearchResultsParentComponent.html',
	controllerAs:"flightSearchResultsParent",
	controller: flightSearchResultsParentController,
	$canActivate:function(mainService){
		mainService.getFlightServices().then(function(data){
			mainService.filter_type=data;
		});
		mainService.getEdgeMaster().then(function(data){
			mainService.filter_details=data;
		});
		mainService.getFlightSearchResults().then(function(data){
			mainService.searchResults=data;
		});
		return true;
	}
});
function flightSearchResultsParentController($http,$rootScope,mainService){
  var flightSearchResultsParent=this;
	flightSearchResultsParent.filter_type=mainService.filter_type.data;
	flightSearchResultsParent.filter_details=mainService.filter_details.data.services.flight;
	flightSearchResultsParent.searchResults=mainService.searchResults.data;
	// console.log(flightSearchResultsParent.filters);
	flightSearchResultsParent.travelPlanObject = [
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

	flightSearchResultsParent.currentnodeedge = function (id, type) {
	console.log(id);
	console.log(type);

	};
    }
