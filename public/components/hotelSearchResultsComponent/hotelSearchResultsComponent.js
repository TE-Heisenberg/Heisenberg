angular.module('app')
.component('hotelSearchResultsComponent', {
	templateUrl: 'public/components/hotelSearchResultsComponent/hotelSearchResultsComponent.html',
	controllerAs:"hotelSearchResults",
	controller: hotelSearchResultsController
});

function hotelSearchResultsController($http,$rootScope){
    var hotelSearchResults= this;
    hotelSearchResults.$onInit= function(){
        $http.get('public/data/hotelSearchResults.json').success(function(searchResults){
            hotelSearchResults.searchResults= searchResults;
        });

    }
}
