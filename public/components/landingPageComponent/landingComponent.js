angular.module("app").component("landingComponent", {

   templateUrl: "public/components/landingPageComponent/landingComponent.html",
   controllerAs: "landing",
   controller: landingController,
   bindings: {
      alertdata: '<',
   },
   $canActivate: function ($location, TokenService) {
      var token = TokenService.getToken('token');
      console.log(token);
      TokenService.verifyToken().then(function () {

      });

      return true;
   }


});
function landingController($scope, $http, $location,mainService) {

   var landing = this;


   // alertbox
   console.log("inside alert");
   $http.get("public/data/landing/myalert.json").success(function (response) {

      $scope.alertdata = response.alertdata;
      console.log("alert---" + response.alertdata);
   });

   // $http.get("public/data/landing/myplans.json").success(function (response) {
   //    // $scope.finalData=response.data;
   //    // console.log($scope.finalData);
   //    $scope.completed = response.completed.plan;
   //    $scope.current = response.current.plan;
   //    $scope.future = response.future.plan;
   //
   // });
   var response =mainService.getCurrentplan();
  response.success(function (data)
  {
    $scope.completed = data.completed.plan;
      $scope.current = data.current.plan;
      $scope.future = data.future.plan;

  });

  response =mainService.getWorklist();
  response.success(function (data)
  {
  $scope.messages = data.what;
  });


  //  $http.get("public/data/landing/myfavourites.json").success(function (response) {
   //
  //     $scope.locality = response.local.data;
  //     console.log("fav-----" + $scope.locality);
  //     $scope.fav = function (value) {
  //        $scope.locality = response[value].data;
  //     };
   //
  //     // var finalJson={};
  //     // $scope.finalJson=$scope.locality;
  //  });
  response =mainService.getfavouriteList();
  response.success(function (data)
  {
    $scope.locality = data.local.data;
       console.log("fav-----" + $scope.locality);
       $scope.fav = function (value) {
          $scope.locality = data[value].data;
       };

  });

}
