
angular.module("app")
  .component("childServicesPanelComponent",{
    templateUrl:"public/components/childServicesPanelComponent/childServicesPanelComponent.html",
    controllerAs:"childServicesPanelComponentCtrl",
    controller:["$rootScope","$http","FetchService",childServicesPanelComponentController],
    bindings:{
      service:'<'
    }
});

function childServicesPanelComponentController($rootScope,$http,FetchService)
{
      var childServicesPanelComponentCtrl=this;
      childServicesPanelComponentCtrl.selectedServices="localTravel";
      console.log(" inside childServicesPanelComponent forms");
      childServicesPanelComponentCtrl.$onInit = function () {

          FetchService.nodeMaster().then(function (response) {

                 childServicesPanelComponentCtrl.nodeMasterData = response;
                 console.log(" child sevices node master");
                 console.log(childServicesPanelComponentCtrl.nodeMasterData);
          });
          FetchService.travelPlan().then(function (response) {

                 childServicesPanelComponentCtrl.travelPlan = response;
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

     childServicesPanelComponentCtrl.obj={"key":0};
     childServicesPanelComponentCtrl.add=function()
     {
       console.log("length");
       console.log(Object.keys(childServicesPanelComponentCtrl.obj).length);
       console.log("inside add function_______________________________________________");
       childServicesPanelComponentCtrl.obj["key"+Object.keys(childServicesPanelComponentCtrl.obj).length]=1;
     };

          //   var currentThingIndex = $rootScope.nodeIndex;
}
