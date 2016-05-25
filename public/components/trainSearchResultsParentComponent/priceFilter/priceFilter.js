var app=angular.module("app");
app.component('priceFilter',{
  templateUrl:'public/components/trainSearchResultsParentComponent/priceFilter/priceFilter.html',
  controllerAs:'priceFilter',
  controller:priceFilterController,
  bindings:{
    data:'<',
    range:'<',
    attribute:'<',
    onPriceFilterChange:'&'
  }
});

function priceFilterController() {
  priceFilter=this;
};
