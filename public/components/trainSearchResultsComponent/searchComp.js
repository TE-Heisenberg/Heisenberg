var app=angular.module('app');
app.component('filters',{
  templateUrl: "public/components/trainSearchResultsComponent/filter.html",
  controller: filterCont,
   bindings:{
     filtrs:'<',
     range:'=',

     onlistchange:'&'
   }

});
app.component('trainSearchResultsComponent',{
  templateUrl:"public/components/trainSearchResultsComponent/searchPageComponent.html",
  controller:searchpageCont,
  bindings:{
    filtrs:'<',
    data:'<',
    range:'=',

    myorder:'<'
  }
});
app.component("searchResult",{
  templateUrl:"public/components/trainSearchResultsComponent/searchResult.html",
  controller:searchResultCont,
  bindings:{
    data:'<',
    myorder:'<'
  }
});
function searchpageCont($scope,$http,$filter) {
          $scope.myorder="before";
          $scope.range=300;
          $scope.chkbox=false;
          $scope.sortIcon=true;
          this.onChange=function(value1,value2,value3){
            if(value1==="slider"){
              $scope.slideP(value2,value3);
            }
            if(value1==="checkbox"){
              $scope.scc(value2,value3);
            }
            if(value1==="button"){
              $scope.mrngDep(value2,value3);
            }
          };
          $scope.slideP=function(){
            console.log("im in slide");
          }
          $http.get('public/data/trainInfo.json').success(function(data){

              $scope.list=data.trainResult;
              $scope.data=$scope.list;
              $scope.filtrs=data.filters;

              $scope.previousData=$scope.data;
          });

          $scope.mrngDep=function(depar,time){
              $scope.data=$scope.previousData;
              var array1=[];
              var array=$scope.data;
              for(obj in array){
                  var object=(array[obj][depar]);
                  var dep=object.substring(0,2);
                  if(parseInt(dep)>=time*6 && parseInt(dep)<=(time+1)*6){
                      array1.push(array[obj]);
                  }
              }
              $scope.data=array1;
              //$scope.previousData=array1;
          };


          $scope.slideP=function(id,rang){

              $scope.data=$scope.list;
              var array1=[];
              var array=$scope.data;
              for(obj in array){
                  var object=(array[obj][id]);
                  if(parseInt(object)>=rang){
                      array1.push(array[obj]);
                  }
              }
              $scope.data=array1;
              $scope.previousData=array1;
          };

          $scope.reset=function() {
            $scope.chkbox=false;
            $scope.range=300;
            $scope.data=$scope.list;
            $scope.previousData=$scope.data;

          };

          $scope.sort=function(time){

            $scope.myorder=time;
            //console.log("sort aaa"+$scope.myorder);
          };
          $scope.scc=function(station,chec){
            $scope.data=$scope.previousData;
            var curData=$scope.data;
            $scope.chkbox=chec;
            if($scope.chkbox==true){
              curData=$filter('filter')(curData,station);
              $scope.chkbox=false;
              $scope.data=curData;
            }
            else {
              $scope.data=$scope.previousData;
              //console.log("prev == "+$scope.data);
            }
            //$scope.previousData=$scope.data;
          };
};
function searchResultCont($scope) {
  $scope.hidebutton=false;
  $scope.showbutton=true;
  // var showb=this.initial.showbutton;
  // var hideb=this.initial.hidebutton;
  // console.log(showb+"---"+hideb);
  //console.log("this --- "+this.myorder);
  $scope.expandCard=function(index){
              console.log("im in expandCard "+index);
              var asd="showDiv"+index;
              $scope[asd]=true;

  };
  $scope.hideCard=function(index){
              var asd="showDiv"+index;
              $scope[asd]=false;

  };

}
function filterCont() {
  //console.log(this);
}
