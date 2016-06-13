angular.module('app')
.component('flightSearchResult', {
	templateUrl: 'public/components/flightSearchResultsParentComponent/flightSearchResultsComponent/flightSearchResults/flightSearchResults.html',
	controllerAs:"flightSearchResult",
	controller: flightSearchResultController,
	bindings: {
		flightSearchResult: '<'
	}
});

function flightSearchResultController(){
	var flightSearchResult = this;
	flightSearchResult.showMore = false;
	flightSearchResult.viewMore = function() {
		flightSearchResult.showMore = true;
	};
}
