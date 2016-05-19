var essentialFieldsFormComponentCtrl = function($http, $rootScope,FetchService) {
   var essentialFieldsFormComponentCtrl=this;
   console.log(" inside essential field forms");
   essentialFieldsFormComponentCtrl.$onInit = function () {

             FetchService.nodeMaster().then(function (response) {

                    essentialFieldsFormComponentCtrl.nodeMasterData = response;
                    console.log("node master");
                    console.log(essentialFieldsFormComponentCtrl.nodeMasterData);
             });
             FetchService.travelPlan().then(function (response) {

                    essentialFieldsFormComponentCtrl.travelPlan = response;
             });

    }// end essentialFieldsFormComponentCtrl.$onInit

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

    }//end of setObj

//   var currentThingIndex = $rootScope.nodeIndex;




};


angular.module('app')
.component("essentialFieldsFormComponent",{
  templateUrl:"public/components/essentialFieldsFormComponent/essentialFieldsFormComponent.html",
  controllerAs:"essentialFieldsFormComponentCtrl",
  controller:["$rootScope","$http","FetchService",essentialFieldsFormComponentCtrl]
  // bindings: {
  //   "modifyTravelPlan": "&"
  // }

});

function essentialFieldsFormComponentCtrl()
{
  essentialFieldsFormComponentCtrl.selectedServices=null;
  essentialFieldsFormComponentCtrl.reflectValue = function(keyString,value) {
    console.log("Inside Reflect Value");
    console.log(keyString);
    console.log(value);
    setObj(ctrl, keyString, value);

  };
}
