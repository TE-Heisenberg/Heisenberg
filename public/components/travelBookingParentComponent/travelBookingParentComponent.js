angular.module('app')
  .component('travelBookingParentComponent', {
    templateUrl: "public/components/travelBookingParentComponent/travelBookingParentComponent.html",
    controller: ["mainService", "$location","$routeParams",travelBookingParentCtrl],
    controllerAs: "travelBookingParentCtrl",
    $canActivate: function ($nextInstruction,mainService) {
      console.log("I am inside Can acticate");
      var tid=decodeURIComponent($nextInstruction.params.id);
      console.log(tid);
      return mainService.getPrerequisites(tid).then(function (data) {
        mainService.serviceData = data;
        console.log(data);
        return true;
      });

    }
  });


function travelBookingParentCtrl(mainService, $location,$routeParams) {

  var travelBookingParentCtrl = this;

  travelBookingParentCtrl.$routerOnActivate=function(next){

    var id = next.params.id;
    console.log("-------routeronActivate--------");
    console.log(id);
  };
  console.log("HOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
  console.log(mainService.serviceData);
  travelBookingParentCtrl.$onInit = function () {
    travelBookingParentCtrl.elementFields = {
      "location": mainService.serviceData[0].data,
      "transit": mainService.serviceData[1].data
    };
    console.log("Essential fields");
    console.log(travelBookingParentCtrl.elementFields);
    console.log(" I am inside on init");
    // travelBookingParentCtrl.travelPlanObject = mainService.getTravelPlanObjectInitial();
    console.log(mainService.serviceData[2].components);
    travelBookingParentCtrl.travelPlanObject = mainService.serviceData[2].components;
    console.log(travelBookingParentCtrl.travelPlanObject);
    travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[0];
    console.log(travelBookingParentCtrl.currentSelectedObj);

    travelBookingParentCtrl.selectedChildren = Object.keys(travelBookingParentCtrl.travelPlanObject[0].childServices);

    travelBookingParentCtrl.childrenLabels = {};
    for (elementType in travelBookingParentCtrl.elementFields) {

      for (mode in travelBookingParentCtrl.elementFields[elementType].essential.modesToSelectTheServices) {
        var modeData = travelBookingParentCtrl.elementFields[elementType].essential.modesToSelectTheServices[mode];
        Object.assign(travelBookingParentCtrl.childrenLabels, modeData.specificAttr.domainList)

      }
    }

    console.log(travelBookingParentCtrl.elementFields[travelBookingParentCtrl.currentSelectedObj.type]);
  }

      travelBookingParentCtrl.locationchildservices=mainService.serviceData[0].data.servicesDetails;
        travelBookingParentCtrl.transitchildservices=mainService.serviceData[1].data.servicesDetails;
      //console.log(travelBookingParentCtrl.locationchildservices);

  travelBookingParentCtrl.currentnodeedge = function (value2) {

    console.log("i am inside currentnodeedge");
    console.log(value2);
    travelBookingParentCtrl.currentSelectedObj = value2.currentObject;
    travelBookingParentCtrl.selectedChildren = value2.selectedChildren;
    travelBookingParentCtrl.reflectSelectedChildren(value2.selectedChildren);
  };
  //travelBookingParentCtrl.travelPlanExists = dataUpdateHelper.travelPlanExists();

  travelBookingParentCtrl.travelPlanExists = true;
  if (travelBookingParentCtrl.travelPlanExists) {

    travelBookingParentCtrl.tempCurrentObj = {
      "essential": {
      },
      "childServices": {},
      "type": "edge",
      "state": "initial"
    };
    travelBookingParentCtrl.tempSelectedChildren = ["flight"];



  };

  travelBookingParentCtrl.ifFirstElement = function () {
    //console.log("Inside first element");
    //console.log(travelBookingParentCtrl.currentSelectedObj);
    //console.log(travelBookingParentCtrl.travelPlanObject);
    if (travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) == 0)
      return true;
    return false;
  }

  travelBookingParentCtrl.ifLastElement = function () {
    if (travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) == travelBookingParentCtrl.travelPlanObject.length - 1)
      return true;
    return false;
  }

  travelBookingParentCtrl.goToNextElement = function () {
    console.log(" I am inside goToNextElement");
    if (travelBookingParentCtrl.ifLastElement()) {
      $location.path('/searchResults');
      // travelBookingParentCtrl.$router.navigate(['searchResult']);
    }
    else {
      console.log(travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj));

      travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) + 1];
      console.log("travelBookingParentCtrl.currentSelectedObj");
      console.log(travelBookingParentCtrl.currentSelectedObj);
      travelBookingParentCtrl.selectedChildren = Object.keys(travelBookingParentCtrl.currentSelectedObj.childServices);
    }



  }


  travelBookingParentCtrl.goToPreviousElement = function () {
    travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) - 1];

    travelBookingParentCtrl.selectedChildren = Object.keys(travelBookingParentCtrl.currentSelectedObj.childServices);

  }

  travelBookingParentCtrl.reflectSelectedChildren = function (arrayOfSelectedChildren) {
    travelBookingParentCtrl.currentSelectedChildren = arrayOfSelectedChildren;
    console.log("I am inside reflectSelectedChildren");
    console.log(travelBookingParentCtrl.currentSelectedChildren);
    console.log(travelBookingParentCtrl.currentSelectedObj)
    for (cId in travelBookingParentCtrl.currentSelectedObj.childServices) {

      if (travelBookingParentCtrl.currentSelectedChildren.indexOf(cId) < 0) {
        delete travelBookingParentCtrl.currentSelectedObj.childServices[cId];
      }
    }
    travelBookingParentCtrl.currentSelectedChildren.forEach(function (childId) {
      console.log("Inside foreach of children list initial");
      if (travelBookingParentCtrl.currentSelectedObj.childServices[childId] == undefined) {
        console.log("I am going to intialize childServices");
        console.log(travelBookingParentCtrl.elementFields[travelBookingParentCtrl.currentSelectedObj.type]);
        travelBookingParentCtrl.currentSelectedObj.childServices[childId] = travelBookingParentCtrl.elementFields[travelBookingParentCtrl.currentSelectedObj.type].servicesIntializer[childId];
      }
    });
  }
}
