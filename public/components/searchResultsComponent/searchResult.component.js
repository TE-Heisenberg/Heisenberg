angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('hotelSearchResults', {
                template: "<hotel-search-results-component></hotel-search-results-component>"
            })
            .state('trainSearchResults', {
                template: "<train-search-results-component></train-search-results-component>"
            })
            .state('flightSearchResults', {
                template: "<flight-search-results-component></flight-search-results-component>"
            })
    })
    .component('searchResult', {
        controller: searchResultComponent,
        controllerAs: 'searchResult',
        templateUrl: 'public/components/searchResultsComponent/searchResult.view.html'
    });

function searchResultComponent(mainService) {

}