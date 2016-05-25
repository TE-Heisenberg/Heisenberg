var app=angular.module("app");
app.component('trainSearchResultsComponent',{
  templateUrl:'public/components/trainSearchResultsParentComponent/trainSearchResultsComponent/trainSearchResultsComponent.html',
  controllerAs:'trainSearchResults',
  controller:trainSearchResultsController

});
function trainSearchResultsController($http,$filter) {
  trainSearchResults=this;
  trainSearchResults.myorder="before";
  trainSearchResults.range=300;
  trainSearchResults.check=false;
  trainSearchResults.sortIcon=true;

  $http.get('public/data/trainInfo.json').success(function(data){

      trainSearchResults.list=data.trainResult;
      trainSearchResults.data=trainSearchResults.list;
      trainSearchResults.filters=data.filters;
      trainSearchResults.previousData=trainSearchResults.data;
  });
  trainSearchResults.onTimeChange=function(attribute,time){
      trainSearchResults.data=trainSearchResults.previousData;
      var array1=[];
      var array=trainSearchResults.data;
      for(obj in array){
          var object=(array[obj][attribute]);
          var dep=object.substring(0,2);
          if(parseInt(dep)>=time*6 && parseInt(dep)<=(time+1)*6){
              array1.push(array[obj]);
          }
      }
      trainSearchResults.data=array1;
      //trainSearchResults.previousData=array1;
  };

  // trainSearchResults.onPriceChange=function(range) {
  //   trainSearchResults=this;
  //   trainSearchResults.range=range;
  // };


  trainSearchResults.onPriceChange=function(attribute,range){
    console.log(attribute+"     "+range);
      trainSearchResults.data=trainSearchResults.list;
      var array1=[];
      var array=trainSearchResults.data;
      for(obj in array){
          var object=(array[obj][attribute]);
          if(parseInt(object)>=range){
              array1.push(array[obj]);
          }
      }
      trainSearchResults.data=array1;
      trainSearchResults.previousData=array1;
  };

  trainSearchResults.reset=function() {
    console.log("im in reset");
    trainSearchResults.check=false;
    trainSearchResults.range=300;
    trainSearchResults.data=trainSearchResults.list;
    trainSearchResults.previousData=trainSearchResults.data;

  };

  trainSearchResults.sort=function(time){
    // console.log("im in sort"+time);

    trainSearchResults.myorder=time;
    //console.log("sort aaa"+trainSearchResults.myorder);
  };
  trainSearchResults.onAreaChange=function(area,check){
    trainSearchResults.data=trainSearchResults.previousData;
    var curData=trainSearchResults.data;
    trainSearchResults.check=check;
    if(trainSearchResults.check==true){
      curData=$filter('filter')(curData,area);
      trainSearchResults.check=false;
      trainSearchResults.data=curData;
    }
    else {
      trainSearchResults.data=trainSearchResults.previousData;
      //console.log("prev == "+trainSearchResults.data);
    }
    //trainSearchResults.previousData=trainSearchResults.data;
  };

};
