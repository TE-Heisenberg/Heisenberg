var app=angular.module("app");
app.component('timeFilter',{
  templateUrl:'public/components/searchResultsComponent/timeFilter/timeFilter.html',
  controllerAs:'timeFilter',
  controller:timeFilterController,
  bindings:{
    data:'<',
    attribute:'<',
    onTimeFilterChange:'&'
  }

});

function timeFilterController() {
  timeFilter=this;
  console.log(timeFilter);
};
