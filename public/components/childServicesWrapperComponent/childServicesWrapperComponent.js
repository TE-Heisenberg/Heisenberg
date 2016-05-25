
angular.module("app")
  .component("childServicesWrapperComponent",{
    templateUrl:"public/components/childServicesWrapperComponent/childServicesWrapperComponent.html",
    controllerAs:"childServicesWrapperComponentCtrl",
    controller:childServicesWrapperComponentController,
    bindings: {
      formData: "<",
      bindDataKey: "<",
      formFieldEssentialData: "<",
      reflectFormData: "&",
      formFieldsServicesNames: "<"
    }
});

function childServicesWrapperComponentController()
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
  childServicesComponentCtrl.reflectChangeInService = function(serviceData, serviceId, fieldId) {
    childServicesComponentCtrl.reflectFormData({"keyString": childServicesComponentCtrl.bindDataKey, "value":serviceData, "childServiceId": serviceId, "fieldId": fieldId});
  }

}
