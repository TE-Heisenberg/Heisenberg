angular.module('app')
.component("essentialFieldsFormComponent",{
  templateUrl:"public/components/essentialFieldsFormComponent/essentialFieldsFormComponent.html",
  controllerAs:"essentialFieldsFormComponentCtrl",
  controller:essentialFieldsFormComponentCtrl,
  bindings: {
    "formData":"<",
    "bindDataKey":"<",
    "formFieldEssentialData":"<",
    "reflectFormData":"&"
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
}
