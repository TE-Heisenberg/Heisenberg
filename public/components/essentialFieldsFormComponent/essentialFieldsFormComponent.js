

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

    }

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
