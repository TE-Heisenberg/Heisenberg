/**
 * Created by user on 11-05-2016.
 */

angular.module('myApp')
    .component('mainComponent',{

        templateUrl:'public/components/itineraryComponents/mainComponent/mainComponent.html',
        controllerAs:'model',
        bindings:{
          value:'<'

        },
        controller: mainController
    })

 function mainController(){
    var model=this;
    console.log('inside mainController');

    model.getModePref=function(type){
      console.log('main component type value'+type);
      if(type=='flight'){
           model.array=['flightID','seatNumber'];
           console.log('inside '+model.array);
           return model.array;
      }
      else if(type=='train'){
           model.array=['trainNumber','coachNumber','seatNumber'];
           console.log('inside '+model.array);
           return model.array;
      }
      else if(type=='bus'){
           model.array=['busNumber','seatNumber'];
           console.log('inside '+model.array);
           return model.array;
      }
      else if(type=='cab'){
           model.array=['cabNumber','cabType'];
           console.log('inside '+model.array);
           return model.array;
      }
      else if(type=='localBus'){
           model.array=['busNumber','busType','seatsType'];
           console.log('inside '+model.array);
           return model.array;
      }
    }

    model.getSeatPref=function(value){
      if(value=='flight'){
           return ['class','meals','extraBaggage'];
      }
      else if(value=='train'){
           return ['class'];
      }
      else if(value=='bus'){
           return  ['class','seatType'];
      }
    }

 }
