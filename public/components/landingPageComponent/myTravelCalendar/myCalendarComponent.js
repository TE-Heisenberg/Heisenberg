var app=angular.module("app");
app.component("myCalendar",{

  templateUrl:"public/components/landingPageComponent/myTravelCalendar/myCalendar.html",
  controllerAs:"calendar",
  controller:myCalendarController
});

function myCalendarController($http,mainService){
  var calendar=this;

  var response=mainService.calendarLabel();
  response.success(function (response) {
    calendar.calendarDisplayName = response.headerDisplayName;
    calendar.approved=response.subHeaders.approved;
    calendar.past=response.subHeaders.past;
    calendar.pending=response.subHeaders.pending;

  });

}
