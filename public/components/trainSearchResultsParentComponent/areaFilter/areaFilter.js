var app=angular.module("app");
app.component('areaFilter',{
  templateUrl:'public/components/trainSearchResultsParentComponent/areaFilter/areaFilter.html',
  controllerAs:'areaFilter',
  controller:areaFilterController,
  bindings:{
    data:'<',
    onAreaFilterChange:'&'
  }
});
function areaFilterController() {
  areaFilter=this;
};
