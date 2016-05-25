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
						console.table(searchResults);
						$http.get('public/data/flightSearchResultsFilters.json').success(function(data){
								flightSearchResults.filters= data;
						});

						flightSearchResults.selectedFilters= {};
						flightSearchResults.checkBoxInput= {};
				});

				flightSearchResults.reflectValue = function(keyString, value, id) {
						setObj(flightSearchResults, keyString, value);
						if(value.length==0) delete flightSearchResults.selectedFilters[id];
						else flightSearchResults.selectedFilters[id]= value;
						console.log(flightSearchResults.selectedFilters);
				};

				flightSearchResults.applyFilters= function(searchResult){
					console.log(searchResult.name);
						var counter=0;
						for (filter in flightSearchResults.selectedFilters){
								flightSearchResults.selectedFilters[filter].forEach(function(filterValue){

										if(filterValue==searchResult.name){
												counter++;
												return;
										}
								});
						}
						if(counter== Object.keys(flightSearchResults.selectedFilters).length) return true;
						else return false;
						console.log("in apply filters");
						console.log(Object.keys(flightSearchResults.selectedFilters).length);
				}
			};
			var setObj = function(obj, keyString,value) {
						keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
						keyString = keyString.replace(/^\./, '');           // strip a leading dot
						var hierarchyWiseKeysArray = keyString.split('.');

						while (hierarchyWiseKeysArray.length > 1)
						obj = obj[hierarchyWiseKeysArray.shift()];
						return obj[hierarchyWiseKeysArray.shift()] = value;
			};
}
