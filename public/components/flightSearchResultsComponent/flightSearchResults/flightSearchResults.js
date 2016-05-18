angular.module('app')
.component('flightSearchResult', {
	templateUrl: 'public/components/flightSearchResultsComponent/flightSearchResults/flightSearchResults.html',
	controllerAs:"flightSearchResult",
	controller: flightSearchResultController,
	bindings: {
		flightSearchResult: '<'
	}
});

function flightSearchResultController(){
	var flightSearchResult = this;

	console.table(this.flightSearchResult);
}
