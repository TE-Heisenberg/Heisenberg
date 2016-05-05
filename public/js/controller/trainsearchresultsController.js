angular.module('app').controller('trainSearchResultsController',function($scope,$http) {

        $http.get('public/data/trainInfo.json').success(function(data){

            $scope.list=data;
            $scope.data=$scope.list;
        });

        $scope.mrngDep=function(depar){
            $scope.data=$scope.list;
            console.log("Mrng!!!");
            var array1=[];
            var array=$scope.data;
            for(obj in array){
                var object=(array[obj][depar]);
                var dep=object.substring(0,2);
                if(parseInt(dep)>=0 && parseInt(dep)<=6){
                    array1.push(array[obj]);
                }
            }
            $scope.data=array1;
        };
        $scope.aftnDep=function(depar){
            $scope.data=$scope.list;
            console.log("Mrng!!!");
            var array1=[];
            var array=$scope.data;
            for(obj in array){
                var object=(array[obj][depar]);
                var dep=object.substring(0,2);
                if(parseInt(dep)>=6 && parseInt(dep)<=12){
                    array1.push(array[obj]);
                }
            }
            $scope.data=array1;
        };
        $scope.evngDep=function(depar){
            $scope.data=$scope.list;
            console.log("Mrng!!!");
            var array1=[];
            var array=$scope.data;
            for(obj in array){
                var object=(array[obj][depar]);
                var dep=object.substring(0,2);
                if(parseInt(dep)>=12 && parseInt(dep)<=18){
                    array1.push(array[obj]);
                }
            }
            $scope.data=array1;
        };
        $scope.nightDep=function(depar){
            $scope.data=$scope.list;
            console.log("Mrng!!!");
            var array1=[];
            var array=$scope.data;
            for(obj in array){
                var object=(array[obj][depar]);
                var dep=object.substring(0,2);
                if(parseInt(dep)>=18 && parseInt(dep)<=24){
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
            console.log("im in slider");
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
        $scope.slider = {
            minValue: 10,
            maxValue: 90,
            options: {
                floor: 0,
                ceil: 100,
                step: 1
            }
        };

    }

);
