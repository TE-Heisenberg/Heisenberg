var app=angular.module("app")
app.component("myCurrentPlan",{

  templateUrl:"public/components/landingPageComponent/myCurrentPlan/myCurrentPlan.html",
  controllerAs:"currentplan",
  controller:  myCurrentPlanController,
  bindings:{
    current: '<',
    completed: '<',
    future: '<'

  }

});

function myCurrentPlanController($scope,$http,$mdDialog) {
  var currentplan=this;
  console.log('inside controller');
  currentplan.showAlert=function (ev,x) {
  console.log("in dialog");
    console.log("In click");
    $mdDialog.show(
      $mdDialog.alert()
      .parent(angular.element(document.querySelector('#popupContainer')))
      .clickOutsideToClose(true)
      .title()
      .textContent(x)
      .ariaLabel('Alert Dialog Demo')
      .ok('Got it!')
      .targetEvent(ev)
    );
  }
};
