angular.module('app').component("hotelSearchResultsParentComponent",{
	templateUrl: 'public/components/hotelSearchResultsParentComponent/hotelSearchResultsParentComponent.html',
	controllerAs:"hotelSearchResultsParent",
	controller: hotelSearchResultsParentController
});
function hotelSearchResultsParentController($http,$rootScope){
  var hotelSearchResultsParent=this;

}
