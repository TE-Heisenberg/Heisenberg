angular.module('app').component("flightSearchResultsParentComponent", {
	templateUrl: 'public/components/flightSearchResultsParentComponent/flightSearchResultsParentComponent.html',
	controllerAs: "flightSearchResultsParent",
	controller: flightSearchResultsParentController,
	bindings: {
		searchResults:'<',
	 selectedData:'&'
  }
});
function flightSearchResultsParentController($http, $rootScope, mainService) {
	var flightSearchResultsParent = this;
	flightSearchResultsParent.filter_type = mainService.flight_filter_type;
	flightSearchResultsParent.filter_details = mainService.edgeMaster.services.flight;
	console.log("Printing filter type",flightSearchResultsParent.filter_type);
	console.log("Printing filter details", flightSearchResultsParent.filter_details);
	console.log(flightSearchResultsParent.searchResults);
	flightSearchResultsParent.currentnodeedge = function (id, type) {
		console.log(id);
		console.log(type);
	};
	flightSearchResultsParent.selectResultParentObject=function(value){
		console.log("sstep3");
		// return value;
		 flightSearchResultsParent.selectedData({value:value});
	}
}
