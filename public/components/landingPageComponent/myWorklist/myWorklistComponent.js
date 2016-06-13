var app=angular.module("app");

app.component("myWorklist",{

  templateUrl:"public/components/landingPageComponent/myWorklist/myWorklist.html",
  controllerAs:"worklist",
  controller: myworklistController,
  bindings:{
    messages: '<',

  }

});
function myworklistController($http,mainService){
  var worklist=this;
  var response=mainService.worklistLabels();
  response.success(function (response) {
    worklist.worklistDisplayName = response.headerDisplayName;
    worklist.actionDisplayName = response.actionButtonDisplayName;

   });

}
