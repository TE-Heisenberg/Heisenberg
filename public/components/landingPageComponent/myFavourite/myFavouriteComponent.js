var app=angular.module("app");

app.component("myFavourite",{

  templateUrl:"public/components/landingPageComponent/myFavourite/myFavourite.html",
  controllerAs:'favourite',
  controller: myFavouriteController,
  bindings:{
    locality:'<',
    fav:'&'
  }

});

function myFavouriteController($http,mainService){
  // $scope.fav=function(locality){
  //   $scope.locality = response[locality].data;
  //
  // };
  var favourite =this;
  var response=mainService.favouriteLables();
  response.success(function (response) {
    favourite.favouriteDisplayName = response.headerDisplayName;
   });
}
