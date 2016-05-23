/**
 * Created by lenovo on 23-05-2016.
 */
var app = angular.module("app").component("nodeComponent", {

    templateUrl: "public/components/travelplancomponent/nodeComponent/nodeComponent.html",
    controllerAs: "node",
    controller: nodeController,
    bindings: {
        'nodeid': '<',
        'travelobject': '<',
        'currentNode': '&'
    }
});

function nodeController() {

    var node = this;
  node.autoCompleteInput={};
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