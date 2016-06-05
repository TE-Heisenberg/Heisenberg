angular.module('app')
.component('travelBookingParentComponent',{
  templateUrl: "public/components/travelBookingParentComponent/travelBookingParentComponent.html",
  controller: ["mainService",travelBookingParentCtrl],
  controllerAs: "travelBookingParentCtrl",
  $canActivate: function(mainService) {
    return mainService.getPrerequisites().then(function(data) {
      mainService.serviceData = data;
      return true;
    });
  }
});


function travelBookingParentCtrl (mainService) {

    var travelBookingParentCtrl = this;
    console.log(travelBookingParentCtrl);

    console.log(mainService.serviceData);
    travelBookingParentCtrl.$onInit = function()
    {
      console.log(" I am inside on init");
      travelBookingParentCtrl.travelPlanObject = mainService.getTravelPlanObject();
      console.log(travelBookingParentCtrl.travelPlanObject);
      travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[0];
      console.log(travelBookingParentCtrl.currentSelectedObj);
      travelBookingParentCtrl.selectedChildren = Object.keys(travelBookingParentCtrl.travelPlanObject[0].childServices);
      travelBookingParentCtrl.elementFields = {
        "location": mainService.serviceData[0].data,
        "transit": mainService.serviceData[1].data
      };
      console.log(travelBookingParentCtrl.elementFields[travelBookingParentCtrl.currentSelectedObj.type])
    }

    // travelBookingParentCtrl.$canActivate = function() {
    //   console.log(" I am inside on init");
    //   travelBookingParentCtrl.travelPlanObject = mainService.getTravelPlanObject();
    //   console.log(travelBookingParentCtrl.travelPlanObject);
    //   travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[0];
    //   console.log(travelBookingParentCtrl.currentSelectedObj);
    //   travelBookingParentCtrl.selectedChildren = Object.keys(travelBookingParentCtrl.travelPlanObject[0].childServices);
    //       console.log("I am in travelBookingParentCtrl routerOnActivate before");
    //       var getPrerequisites = mainService.getPrerequisites();
    //       console.log(getPrerequisites);
    //       return getPrerequisites.then(function(data) {
    //           console.log("I am in travelBookingParentCtrl routerOnActivate");
    //           console.log(data);
    //
    //       });
    //
    // }

  // travelBookingParentCtrl.$routerOnActivate = function() {
  //
  //
  //     console.log("I am in travelBookingParentCtrl routerOnActivate before");
  //     var getPrerequisites = mainService.getPrerequisites();
  //     console.log(getPrerequisites);
  //     return getPrerequisites.then(function(data) {
  //         console.log("I am in travelBookingParentCtrl routerOnActivate");
  //         console.log(data);
  //         travelBookingParentCtrl.elementFields = {
  //           "location": data[0].data,
  //           "transit": data[1].data
  //         };
  //
  //     });
  // };



  travelBookingParentCtrl.currentnodeedge = function (id, type) {
    travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[id];
    travelBookingParentCtrl.selectedChildren = type;
    console.log(id);
    console.log(type);

  };
  //PG: 19th May- It is checked before hand if the Travel Plan exists or not
  // travelBookingParentCtrl.$onInit = function () {

    //travelBookingParentCtrl.travelPlanExists = dataUpdateHelper.travelPlanExists();

  // };

  travelBookingParentCtrl.travelPlanExists = true;
  if(travelBookingParentCtrl.travelPlanExists)
  {

    travelBookingParentCtrl.tempCurrentObj = {
      "essential": {
      },
      "childServices": {},
      "type": "edge",
      "state": "initial"
    };
    travelBookingParentCtrl.tempSelectedChildren = ["flight"];



  };

  travelBookingParentCtrl.ifFirstElement = function() {
    console.log("Inside first element");
    console.log(travelBookingParentCtrl.currentSelectedObj);
    console.log(travelBookingParentCtrl.travelPlanObject);
    if(travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) == 0)
      return true;
    return false;
  }

  travelBookingParentCtrl.ifLastElement = function() {
    if(travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) == travelBookingParentCtrl.travelPlanObject.length-1)
      return true;
    return false;
  }

  travelBookingParentCtrl.goToNextElement = function() {
    console.log(" I am inside goToNextElement");
    travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj)+1];

    travelBookingParentCtrl.selectedChildren = Object.keys(travelBookingParentCtrl.currentSelectedObj.childServices);



  }


  travelBookingParentCtrl.goToPreviousElement = function() {
    travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) - 1];

    travelBookingParentCtrl.selectedChildren = Object.keys(travelBookingParentCtrl.currentSelectedObj.childServices);

  }

}
