var app=angular.module("app")
app.controller('myworkctrl', function($scope,$http) {
  console.log('inside controller');

  // $http.get("public/data/landing/myworklist.json").success(function (response) {
  //   $scope.messages = response.what;
  //   console.log(response);
  //
  // });
});
app.component("myWorklist",{

  templateUrl:"public/components/landingPageComponent/myWorklist/myWorklist.html",
  controllerAs:"worklist",
  controller: myworklistController,
  bindings:{
    messages: '<',

  }

});
function myworklistController(){
  var worklist=this;
  
}
