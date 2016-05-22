angular.module('app')
  .component('travelPlanNodeComponent',{
    controller: travelPlanNodeCtrl,
    templateUrl: "public/components/travelPlanNodeComponent/travelPlanNodeComponent.html",
    controllerAs: 'travelPlanNodeCtrl',
    bindings: {
    updateCurrentState:"&"
    }
  });

function travelPlanNodeCtrl() {
  var travelPlanNodeCtrl = this;

  travelPlanNodeCtrl.update(elementId,elementType)
  {
    travelPlanParentCtrl.updateCurrentState({'elementId':elementId,'elementType':elementType});

  }

}
