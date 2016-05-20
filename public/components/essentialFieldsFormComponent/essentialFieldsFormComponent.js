// var essentialFieldsFormComponentCtrl = function($http, $rootScope,FetchService) {
//    var essentialFieldsFormComponentCtrl=this;
//    console.log(" inside essential field forms");
//    essentialFieldsFormComponentCtrl.$onInit = function () {
//
//              FetchService.nodeMaster().then(function (response) {
//
//                     essentialFieldsFormComponentCtrl.nodeMasterData = response;
//                     console.log("node master");
//                     console.log(essentialFieldsFormComponentCtrl.nodeMasterData);
//              });
//              FetchService.travelPlan().then(function (response) {
//
//                     essentialFieldsFormComponentCtrl.travelPlan = response;
//              });
//
//     }
// };


angular.module('app')
.component("essentialFieldsFormComponent",{
  templateUrl:"public/components/essentialFieldsFormComponent/essentialFieldsFormComponent.html",
  controllerAs:"essentialFieldsFormComponentCtrl",
  controller:["$rootScope","$http","FetchService",essentialFieldsFormComponentCtrl],
  bindings: {
    "formData":"<",
    "bindDataKey":"<",
    "formFieldEssentialData":"<",
    "reflectFormData":"<"

    // form-data="travelPlanFormCtrl.essentialFormData"   bind-data-key="essentialFormData"
    //  form-field-essential-data ="travelPlanFormCtrl.currentFormFieldsEssentialData"
    //  reflect-form-data="travelPlanFormCtrl.essentialFieldsUpdateWrapper(keyString,value)"
  }

});

function essentialFieldsFormComponentCtrl()
{
  var essentialFieldsFormComponentCtrl=this;
  essentialFieldsFormComponentCtrl.selectedServices=null;
  essentialFieldsFormComponentCtrl.reflectValue = function(keyString,value) {
    console.log("Inside Reflect Value");
    console.log(keyString);
    console.log(value);
    // setObj(ctrl, keyString, value);
      essentialFieldsFormComponentCtrl.reflectFormData({"keyString":keyString,"value":value});

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

    }
}
