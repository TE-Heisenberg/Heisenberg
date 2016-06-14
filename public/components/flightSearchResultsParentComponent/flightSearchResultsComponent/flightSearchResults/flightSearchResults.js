angular.module('app')
.component('flightSearchResult', {
	templateUrl: 'public/components/flightSearchResultsParentComponent/flightSearchResultsComponent/flightSearchResults/flightSearchResults.html',
	controllerAs:"flightSearchResult",
	controller: flightSearchResultController,
	bindings: {
		flightSearchResult: '<',
		selectObject:'&'
	}
});

function flightSearchResultController(){
	var flightSearchResult = this;
	flightSearchResult.showMore = false;
	flightSearchResult.viewMore = function() {
		flightSearchResult.showMore = true;
	};
	flightSearchResult.selectedData=function(value){
			console.log("in step1");
			flightSearchResult.selectObject({value:value});
			 //return value;
	}
}
