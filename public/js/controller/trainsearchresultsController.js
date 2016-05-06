angular.module('app').controller('trainSearchResultsController',function($scope,$http,$filter) {

        $http.get('public/data/trainInfo.json').success(function(data){

            $scope.list=data.trainResult;
            $scope.data=$scope.list;
            $scope.filtrs=data.filters;
        });

        $scope.mrngDep=function(depar,time){
            $scope.data=$scope.list;
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
        };
        $scope.hidebutton=false;
        $scope.showbutton=true;
        $scope.expandCard=function(index){
            $('#showb'+index).css({
                display:"none"
            });
            $('#hideb'+index).css({
                display:"inline"
            });
            var str='#'+index;
            $(str).animate({
                height:'+=300px'
            },200);
        };
        $scope.hideCard=function(index){
            $('#showb'+index).css({
                display:"inline"
            });
            $('#hideb'+index).css({
                display:"none"
            });
            var str='#'+index;
            $(str).animate({
                height:'-=300px'
            },200);
        };
        $scope.showDiv=false;
        $scope.range=300;
        $scope.slideP=function(rang){
            $scope.data=$scope.list;
            var array1=[];
            var array=$scope.data;
            for(obj in array){
                var object=(array[obj].price);
                if(parseInt(object)>=rang){
                    array1.push(array[obj]);
                }
            }
            $scope.data=array1;
        };
        $scope.chkbox=false;
        $scope.reset=function() {
          $scope.range=300;
          $scope.data=$scope.list;
          $scope.chkbox=true;
        };
        $scope.sort=function(time){
          $scope.myOrder=time;
        };
        $scope.scc=function(station,chec){
          $scope.chkbox=chec;
          console.log(chec);
          if($scope.chkbox==true){
            $scope.data=$filter('filter')($scope.data,station);
            $scope.chkbox=false;
          }
          else {
            $scope.data=$scope.list;
          }
        };

});
