var app=angular.module("app");
app.component('resultComponent',{
  templateUrl:'public/components/trainSearchResultsParentComponent/resultComponent/resultComponent.html',
  controllerAs:'resultComponent',
  controller:resultComponentController,
  bindings:{
    one:'<'
  }
});
function resultComponentController() {
  resultComponent=this;
  resultComponent.showbutton=true;

};
