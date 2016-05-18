var app=angular.module("app");
app.component("myCalendar",{

  templateUrl:"public/components/landingPageComponent/myTravelCalendar/myCalendar.html",
  controllerAs:"calendar",
  controller:myCalendarController
});

function myCalendarController( ){
  var calendar=this;

}
