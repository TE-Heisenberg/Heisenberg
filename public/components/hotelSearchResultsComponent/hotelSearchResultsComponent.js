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
	
        $http.get('public/data/hotelSearchResultsFilter.json').success(function(data){
            hotelSearchResults.filters= data;
        });

        hotelSearchResults.selectedFilters= {};
        hotelSearchResults.checkBoxInput= {};
    }

    hotelSearchResults.reflectValue = function(keyString, value, id) {
        console.log("Inside Reflect Value");
        console.log(keyString);
        console.log(value);
        console.log(id);
        setObj(hotelSearchResults, keyString, value);
        if(value.length==0) delete hotelSearchResults.selectedFilters[id];
        else hotelSearchResults.selectedFilters[id]= value;
    };

    hotelSearchResults.applyFilters= function(searchResult){
        var counter=0;
        for (filter in hotelSearchResults.selectedFilters){
            hotelSearchResults.selectedFilters[filter].forEach(function(filterValue){
                if(filterValue==searchResult[filter]){ 
                    counter++;
                    return;
                }
            });   
        }
        if(counter== Object.keys(hotelSearchResults.selectedFilters).length) return true;
        else return false;
    }
};
var setObj = function(obj, keyString,value) {
        console.log("Before Replace ", keyString)
        keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        console.log("After first replace", keyString);
        keyString = keyString.replace(/^\./, '');           // strip a leading dot
        console.log("After second replace", keyString);
        var hierarchyWiseKeysArray = keyString.split('.');

        while (hierarchyWiseKeysArray.length > 1)
        obj = obj[hierarchyWiseKeysArray.shift()];
        return obj[hierarchyWiseKeysArray.shift()] = value;
};
