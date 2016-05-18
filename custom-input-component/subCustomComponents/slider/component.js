customInputComponentApp.
  component('sliderBox',{
    templateUrl: './subCustomComponents/slider/nativeContent.html',
    controller: SliderBoxCtrl,
    controllerAs:"ctrl",
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function SliderBoxCtrl()
{
  console.log("Inside controller of sliderCtrl");
    var ctrl = this;
    console.log("Inside controller of sliderCtrl");
    console.log(ctrl);
    ctrl.specificAttr.min=0;
    ctrl.specificAttr.max=10;
    ctrl.bindData=5;
    console.log(ctrl.bindData);
    ctrl.reflectValue = function(value) {
      console.log("hello");
      console.log(value);
      ctrl.bindData=value;
      ctrl.reflectComponent({value:value});
    };
}
