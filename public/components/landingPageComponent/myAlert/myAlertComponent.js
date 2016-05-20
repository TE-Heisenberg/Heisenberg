var app=angular.module("app")
app.component("myAlert",{

  templateUrl:"public/components/landingPageComponent/myAlert/myAlert.html",
  controllerAs:"alert",
  controller: myAlertController,
  bindings:{
alertdata:'<'

  },

});
app.controller('myalertctrl', function($scope,$http) {
  // console.log('inside controller');

  $http.get("public/data/landing/myalert.json").success(function (response) {

     $scope.alertdata =response.alertdata;
     console.log(response.alertdata);
});


});

function myAlertController(){
  var alert=this;


}
