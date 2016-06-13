angular.module('app')
.component('flightSearchResultsComponent', {
	templateUrl: 'public/components/flightSearchResultsParentComponent/flightSearchResultsComponent/flightSearchResultsComponent.html',
	controllerAs:"flightSearchResults",
	controller: flightSearchResultsController
	,
	bindings:{
		filterType:'<',
		filterDetails:'<',
		searchResults:'<'
	}
});

function flightSearchResultsController($http){
    var flightSearchResults= this;

    flightSearchResults.$onInit= function(){

            //flightSearchResults.searchResults= searchResults;

						//		flightSearchResults.filters= data;
								// flightSearchResults.filters.forEach(function(filter){
		            //         if(filter.type=='rangeSlider')
		            //             filter.options.domainList.options.onEnd= function(id, minValue, maxValue){
		            //                 flightSearchResults.selectedFilters[id]= [minValue, maxValue];
		            //                 console.log(id);
		            //                 console.log(minValue);
		            //                 console.log(maxValue);
		            //             };
		            // });


						flightSearchResults.selectedFilters= {};
						flightSearchResults.checkBoxInput= {};


				flightSearchResults.reflectValue = function(keyString, value, id) {
						setObj(flightSearchResults, keyString, value);

						if(value.length==0) delete flightSearchResults.selectedFilters[id];
						else flightSearchResults.selectedFilters[id]= value;
						console.log(flightSearchResults.selectedFilters);
				};

				flightSearchResults.applyFilters= function(searchResult){
						var counter=0;
						var property;
						for (filter in flightSearchResults.selectedFilters){
							if(filter == "price"){
								console.log("----------------------------"+searchResult[filter]);
								if (flightSearchResults.selectedFilters[filter][0] <= searchResult[filter] && flightSearchResults.selectedFilters[filter][1] >= searchResult[filter]) {
                    console.log('if called');
                    counter++;
                    console.log(counter);
                }
							}
							else{
								flightSearchResults.selectedFilters[filter].forEach(function(filterValue){
									for(property in searchResult){
										if(filterValue==searchResult[property]){
												counter++;
												return;
										}
									}
								});
							}
						}
						if(counter== Object.keys(flightSearchResults.selectedFilters).length) return true;
						else return false;
						// console.log("in apply filters");
						// console.log(Object.keys(flightSearchResults.selectedFilters).length);
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
