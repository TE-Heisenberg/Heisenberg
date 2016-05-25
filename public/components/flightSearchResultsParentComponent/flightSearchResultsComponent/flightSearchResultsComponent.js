angular.module('app')
.component('flightSearchResultsComponent', {
	templateUrl: 'public/components/flightSearchResultsComponent/flightSearchResultsComponent.html',
	controllerAs:"flightSearchResults",
	controller: flightSearchResultsController
});

function flightSearchResultsController($http){
    var flightSearchResults= this;
    flightSearchResults.$onInit= function(){
        $http.get('public/data/flightSearchResults.json').success(function(searchResults){
            flightSearchResults.searchResults= searchResults;
        });
    }
}
