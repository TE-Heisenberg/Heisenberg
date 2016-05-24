var app=angular.module("app")
app.component("listComponent",{
  templateUrl:"public/components/landingPageComponent/listComponent/listcomponent.html",
  controllerAs:"list",
  controller: listcomponentController,
  bindings:{
    value: '<',
    card:'@'
  }
});

function listcomponentController($mdDialog){
  var list=this;
  console.log("in list Controller");
  console.log(list.card);
  console.log(list.value);

  list.showAlert=function (ev,x) {
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

}
