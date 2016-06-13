angular.module('app')
    .component('itineraryParentComponent',{

        templateUrl:'public/components/itineraryComponents/itineraryParentComponent/itineraryParentComponent.html',
        controllerAs:'model',
        controller: mainController,
        $canActivate: function(mainService){
           return mainService.getPrerequisites().then(function(data){
             mainService.nodeOrEdgeMasterData=data;
             return true;
           });
        }
    })

 function mainController(mainService){
    var model=this;
    model.displayKeyObject=new Object();
    model.nodeMasterData=mainService.nodeOrEdgeMasterData[0].data;
    model.edgeMasterData=mainService.nodeOrEdgeMasterData[1].data;

    console.log("node and edge master data............");
    console.log(model.nodeMasterData);
    console.log(model.edgeMasterData);
    console.log('inside mainController');

    model.displayKeyObject=model.edgeMasterData.servicesDetails.mutuallyExclusive.mode.servicesDetails.flight;
    console.log("display key object");
    console.log(model.displayKeyObject);

    model.travelPlanData=new Object();

    model.$onInit=function(){
      model.travelPlanData=mainService.getTravelPlanObject();
      console.log("kkkkkkkkkkkkkk "+model.travelPlanData);
    }

    model.edgeMasterFinder=function(type,servicesDetailsObject){
      for(key in servicesDetailsObject){
         for(innerKey in servicesDetailsObject[key]){
           if(innerKey=="servicesDetails"){
                console.log(servicesDetailsObject[key][innerKey][type]);
                return servicesDetailsObject[key][innerKey][type];
           }
         }
      }
    }

    model.nodeMasterFinder=function(type,servicesDetailsObject){
       for(key in servicesDetailsObject){
         for(innerKey in servicesDetailsObject[key]){
           if(innerKey==type){
             return servicesDetailsObject[key][innerKey];
           }
         }
       }
    }

    model.getDisplayKeys=function(type){
        if(type=='flight'||type=='train'||type=='bus'){
          servicesDetailsObject=model.edgeMasterData.servicesDetails.mutuallyExclusive;
          model.displayKeyObject=model.edgeMasterFinder(type,servicesDetailsObject);
          console.log(model.displayKeyObject);
        }
        if(type=='cab'||type=='localBus'){
          type="localTravel";
          servicesDetailsObject=model.nodeMasterData.servicesDetails;
          model.displayKeyObject=model.nodeMasterFinder(type,servicesDetailsObject);
          console.log(model.displayKeyObject);
        }
        if(type=='stay'){
          servicesDetailsObject=model.nodeMasterData.servicesDetails;
          model.displayKeyObject=model.nodeMasterFinder(type,servicesDetailsObject);
          console.log(model.displayKeyObject);
        }
        if(type=='location'){
          servicesDetailsObject=model.nodeMasterData.essential;
          model.displayKeyObject=model.nodeMasterFinder(type,servicesDetailsObject);
          console.log(model.displayKeyObject);
        }
        return model.displayKeyObject;
      }

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
