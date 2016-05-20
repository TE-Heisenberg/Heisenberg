angular.module("app")
  .component("childServicesWrapperComponent",{
    templateUrl:"public/components/childServicesWrapperComponent/childServicesWrapperComponent.html",
    controllerAs:"childServicesWrapperComponentCtrl",
    controller:[childServicesWrapperComponentController],
    bindings: {
      formData: "<",
      bindDataKey: "<",
      formFieldEssentialData: "<",
      reflectFormData: "&"
    }
});

function childServicesWrapperComponentController($rootScope,$http,FetchService)
{

  var childServicesWrapperComponentCtrl=this;
  childServicesComponentCtrl.childServicesGroups = {};
  for(childServiceId in childServicesComponentCtrl.formData) {
     childServiceData = childServicesComponentCtrl.formData[childServiceId];
     if(childServicesComponentCtrl.childServicesGroups[childServiceData.type] == undefined) {
       childServicesComponentCtrl.childServicesGroups[childServiceData.type] = {};
     }
     childServicesComponentCtrl.childServicesGroups[childServiceData.type][childServiceId] = childServicesComponentCtrl.formData[childServiceId];
  }
  childServicesComponentCtrl.reflectChangeInService = function(changedValue, childServiceId) {
    keyString,value, childServiceId
    childServicesComponentCtrl.reflectFormData({"keyString": childServicesComponentCtrl.bindDataKey, "value":changedValue, "childServiceId": childServiceId});
  }




  // childServicesWrapperComponentCtrl.selectedBasicServices=["stay","localTravel"];
  // console.log(" inside childServicesWrapperComponent forms");
  // childServicesWrapperComponentCtrl.$onInit = function () {
  //
  //     FetchService.nodeMaster().then(function (response) {
  //
  //            childServicesWrapperComponentCtrl.nodeMasterData = response;
  //            console.log(" child sevices node master");
  //            console.log(childServicesWrapperComponentCtrl.nodeMasterData);
  //     });
  //     FetchService.travelPlan().then(function (response) {
  //
  //            childServicesWrapperComponentCtrl.travelPlan = response;
  //     });
  //
  //  }// end essentialFieldsFormComponentCtrl.$onInit

  //  var setObj = function(obj, keyString,value) {
  //      console.log("Before Replace ", keyString)
  //      keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  //      console.log("After first replace", keyString);
  //      keyString = keyString.replace(/^\./, '');           // strip a leading dot
  //      console.log("After second replace", keyString);
  //      var hierarchyWiseKeysArray = keyString.split('.');
   //
  //      while (hierarchyWiseKeysArray.length > 1)
  //          obj = obj[hierarchyWiseKeysArray.shift()];
  //      return obj[hierarchyWiseKeysArray.shift()] = value;
   //
  //  }//end of setObj

  //  childServicesWrapperComponentCtrl.obj={"key":0};
  //  childServicesWrapperComponentCtrl.add=function()
  //  {
  //    console.log("length");
  //    console.log(Object.keys(childServicesWrapperComponentCtrl.obj).length);
  //    console.log("inside add function_______________________________________________");
  //    childServicesWrapperComponentCtrl.obj["key"+Object.keys(childServicesWrapperComponentCtrl.obj).length]=1;
  //  };

//   var currentThingIndex = $rootScope.nodeIndex;


}
