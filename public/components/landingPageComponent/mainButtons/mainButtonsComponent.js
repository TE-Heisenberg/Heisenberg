var app=angular.module("app");
app.component("mainButtons",{

  templateUrl:"public/components/landingPageComponent/mainButtons/mainButtons.html",
  controllerAs:"button",
  controller: mainButtonsController
});

app.component("bookButton",{

  templateUrl:"public/components/landingPageComponent/mainButtons/BookButton.html",
  controllerAs:"bookButton",
  controller: bookButtonController
});

app.component("expenseButton",{

  templateUrl:"public/components/landingPageComponent/mainButtons/ExpenseButton.html",
  controllerAs:"expenseButton",
  controller: expenseButtonController
});


app.component("configureButton",{

  templateUrl:"public/components/landingPageComponent/mainButtons/ConfigureButton.html",
  controllerAs:"configureButton",
  controller: configureButtonController
});
function mainButtonsController($mdDialog, $mdMedia,mainService){
  var button=this;

  response=mainService.getFabButtons();
  response.success(function (data) {
   button.name = data.menu;

   });

}
function bookButtonController($mdDialog, $mdMedia,mainService){
  var bookButton=this;

  bookButton.showBookOptions=function(ev){
    $mdDialog.show({
          clickOutsideToClose: true,

          preserveScope: true,
          templateUrl:'public/components/landingPageComponent/mainButtons/Book_travelpreference.html',
          // templateUrl: 'public/components/landingPageComponent/mainButtons/dialog.html',


       });
  };

  var response=mainService.getFabButtons();
  response.success(function (data) {
    bookButton.label = data.book;
    bookButton.name=data.b;

   });


}
function expenseButtonController($mdDialog, $mdMedia,mainService){
  var expenseButton=this;
  response=mainService.getFabButtons();
  response.success(function (data) {
    expenseButton.label = data.expense;
     expenseButton.name = data.e;

   });
}

function configureButtonController($mdDialog, $mdMedia,mainService){
  var configureButton=this;

       response=mainService.getFabButtons();
      response.success(function (data) {
        configureButton.name = data.configure;

       });
}
