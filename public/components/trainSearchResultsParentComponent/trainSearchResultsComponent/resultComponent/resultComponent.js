var app=angular.module("app");
app.component('resultComponent',{
  templateUrl:'public/components/trainSearchResultsParentComponent/trainSearchResultsComponent/resultComponent/resultComponent.html',
  controllerAs:'resultComponent',
  controller:resultComponentController,
  bindings:{
    one:'<',
    selectObject:'&'
  }
});
function resultComponentController() {
  resultComponent=this;
  resultComponent.showbutton=true;
  resultComponent.showButtonName="ShowDetails";
  resultComponent.hideButtonName="HideDetails";
  resultComponent.selectButtonName="Select";
  resultComponent.selectedData=function(value){
      console.log("in step1");
      resultComponent.selectObject({value:value});
       //return value;
  }
};
