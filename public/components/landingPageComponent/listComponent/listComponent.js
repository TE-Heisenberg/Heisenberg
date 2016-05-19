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

function listcomponentController(){
    var list=this;
    console.log("in list Controller");
    console.log(list.card);
    console.log(list.value);
}
