angular.module('app')
.component('hotelSearchResult', {
	templateUrl: 'public/components/hotelSearchResultsParentComponent/hotelSearchResultsComponent/hotelSearchResult/hotelSearchResult.html',
	controllerAs:"hotelSearchResult",
	controller: hotelSearchResultController,
	bindings: {
		hotelSearchResult: '<',
		selectedFilters: '<',
		selectObject:'&'
	}
});

function hotelSearchResultController(){
	  var hotelSearchResult=this;
    hotelSearchResult.selectedData=function(value){
				console.log("in step1");
				hotelSearchResult.selectObject({value:value});
			   //return value;
		}
}
