/**
 * Created by lenovo on 23-05-2016.
 */
var app = angular.module("app").component("nodeComponent", {

    templateUrl: "public/components/travelplancomponent/nodeComponent/nodeComponent.html",
    controllerAs: "node",
    controller: ["$timeout","$q",nodeController],
    bindings: {
        'nodeid': '<',
        'travelobject': '<',
        'currentNode': '&'
    }
});

function nodeController($timeout, $q) {

    var node = this;
  node.autoCompleteInput={};
  node.edit=false;
    // selectedAutocompleteData=null;
    node.currentNodeChild = function (nodeid, type) {
        node.currentNode({'id': nodeid, 'type': type});
    }

    node.reflectValue=function(keyString,value, id){
        console.log(id);
        setObj(node,keyString,value);
    }

    node.show_autocomplete=function(){
        if(node.edit==true)
        {
            node.edit=false;
        }
        else
        {
            node.edit=true;
        }

    }

    node.states        = loadAll();
    node.selectedItem  = null;
    node.searchText    = null;
    node.querySearch   = querySearch;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? node.states.filter( createFilterFor(query) ) : [];
      return results;
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
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
