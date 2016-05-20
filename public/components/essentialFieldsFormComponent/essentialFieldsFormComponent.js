
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

angular.module('app')
.component("essentialFieldsFormComponent",{
  templateUrl:"public/components/essentialFieldsFormComponent/essentialFieldsFormComponent.html",
  controllerAs:"essentialFieldsFormComponentCtrl",
  controller:["FetchService",essentialFieldsFormComponentCtrl],
  bindings: {
    "updateTravelPlan": '&',
    "childServicesInitializer": "&"
  }

});



function essentialFieldsFormComponentCtrl(FetchService) {
   var essentialFieldsFormComponentCtrl=this;
   console.log(" inside essential field forms");


   essentialFieldsFormComponentCtrl.$onInit = function () {
     console.log(FetchService);

             FetchService.nodeMaster().then(function (response) {

                    essentialFieldsFormComponentCtrl.nodeMasterData = response;
                    console.log("node master");
                    console.log(essentialFieldsFormComponentCtrl.nodeMasterData);
             });
    }



   essentialFieldsFormComponentCtrl.nodependencyData = {};
   essentialFieldsFormComponentCtrl.modesToSelectTheServices = {};

   essentialFieldsFormComponentCtrl.selectedServices=[];

   essentialFieldsFormComponentCtrl.reflectValueOfServices = function(keyString, childServices, id) {
     setObj(essentialFieldsFormComponentCtrl,  keyString, childServices);
     console.log("Inside Reflect childServices");
     console.log(keyString);
     console.log(childServices);

     if(childServices.constructor != Array) {
       essentialFieldsFormComponentCtrl.childServicesInitializer({"childService":childServices});
     }
     else {
       console.log("There are many Child Services");
       for(childService in childServices) {
         essentialFieldsFormComponentCtrl.childServicesInitializer({"childService": childService});
       }
     }

     essentialFieldsFormComponentCtrl.reflectValueOfNoDependencyFields = function(keyString, noDependencyFieldValue, id) {
          essentialFieldsFormComponentCtrl.updateTravelPlan({"id": id});
     }
    //  essentialFieldsFormComponentCtrl.setTravelPlan(keyString, value);

   };

    //end of setObj

    //   var currentThingIndex = $rootScope.nodeIndex;

};
