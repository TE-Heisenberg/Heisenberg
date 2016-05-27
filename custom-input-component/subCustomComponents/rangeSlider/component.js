angular.module('app').
  component('rangeSlider',{
    templateUrl: 'custom-input-component/subCustomComponents/rangeSlider/nativeContent.html',
    controller: rangeSliderCtrl,
    controllerAs: "rangeSliderCtrl",
    bindings: {
      label: '@',
      domainList: '<',
      required: '@',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function rangeSliderCtrl() {
  var rangeSliderCtrl = this;
  console.log("Inside rangeSliderCtrl");
  console.log(rangeSliderCtrl.domainList.options);
  // rangeSliderCtrl.domainList.options.onEnd= rangeSliderCtrl.reflectComponent;
  rangeSliderCtrl.selectedData = [];

  rangeSliderCtrl.reflectValue = function(value) {
    console.log(value);

    console.log("Inside Toggle");
    var status = false;
    var idx = rangeSliderCtrl.selectedData.indexOf(value);
    console.log("Index ", idx);
    if (idx > -1 )
    {
      rangeSliderCtrl.selectedData.splice(idx,1);
    }
    else {
      status = true;
      rangeSliderCtrl.selectedData.push(value);
    }

    console.log("Status ", status);
    // rangeSliderCtrl.ngChecked({currentSelectedItems: rangeSliderCtrl.selectedData});


    rangeSliderCtrl.reflectComponent({value:rangeSliderCtrl.selectedData});


  };


  // rangeSliderCtrl.toggle = function(item){
  //   console.log("Inside Toggle");
  //   var status = false;
  //   var idx = rangeSliderCtrl.selectedData.indexOf(item);
  //   console.log("Index ", idx);
  //   if (idx > -1 )
  //   {
  //     rangeSliderCtrl.selectedData.splice(idx,1);
  //   }
  //   else {
  //     status = true;
  //     rangeSliderCtrl.selectedData.push(item);
  //   }
  //
  //   console.log("Status ", status);
  //   // rangeSliderCtrl.ngChecked({currentSelectedItems: rangeSliderCtrl.selectedData});
  //
  //   return status;
  // };

  console.log("Inside Range Slider Ctrl");
}
