var app=angular.module("app")
app.component("myCurrentPlan",{

  templateUrl:"public/components/landingPageComponent/myCurrentPlan/myCurrentPlan.html",
  controllerAs:"currentplan",
  controller:  temCtrl,
  bindings:{
    current: '<',
    completed: '<',
    future: '<'

  }

});
function temCtrl() {

}
app.controller('myctrl', function($scope,$http) {
  console.log('inside controller');
  // $http.get("public/data/landing/myplans.json").success(function (response) {
  //   // $scope.finalData=response.data;
  //   // console.log($scope.finalData);
  //   $scope.completed =response.completed.date;
  //   $scope.current = response.current.date;
  //   $scope.future = response.future.date;
  //   console.log("res  "+$scope.completed);
  // });
});
