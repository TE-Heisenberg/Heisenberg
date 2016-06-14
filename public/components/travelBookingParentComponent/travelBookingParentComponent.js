angular.module('app')
  .component('travelBookingParentComponent', {
    templateUrl: "public/components/travelBookingParentComponent/travelBookingParentComponent.html",
    controller: ["mainService", "$location", "$routeParams", travelBookingParentCtrl],
    controllerAs: "travelBookingParentCtrl",
    $canActivate: function ($nextInstruction, mainService) {
      console.log("I am inside Can acticate");
      var tid = decodeURIComponent($nextInstruction.params.id);
      console.log(tid);
      return mainService.getPrerequisites(tid).then(function (data) {
        mainService.serviceData = data;
        console.log(data);
        return true;
      });

    }
  });


function travelBookingParentCtrl(mainService, $location, $routeParams) {

  var travelBookingParentCtrl = this;

  travelBookingParentCtrl.$routerOnActivate = function (next) {

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
    travelBookingParentCtrl.travelobjectmain = mainService.serviceData[2];
    console.log(mainService.serviceData);
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



    console.log(travelBookingParentCtrl.elementFields[travelBookingParentCtrl.currentSelectedObj.types]);

    travelBookingParentCtrl.locationchildservices = mainService.serviceData[0].data.servicesDetails.coExistServices;

    travelBookingParentCtrl.transitchildservices = mainService.serviceData[1].data.servicesDetails.coExistServices;
  }


  //console.log(travelBookingParentCtrl.locationchildservices);

  travelBookingParentCtrl.reflectSelectedChild = function (selectedChildDetails) {

    console.log("i am inside reflectSelectedChild");
    console.log(selectedChildDetails);
    console.log("selectedChildDetails.metaData.essential.modesToSelectTheServices");
    console.log(selectedChildDetails.metaData.essential.modesToSelectTheServices);
    travelBookingParentCtrl.currentSelectedObj = selectedChildDetails.currentObject;
    travelBookingParentCtrl.selectedChildren = [selectedChildDetails.selectedChild];
    for (childGroup in selectedChildDetails.metaData.essential.modesToSelectTheServices) {
      console.log("Inside the loop");
      console.log(childGroup);
      console.log(selectedChildDetails.metaData.essential.modesToSelectTheServices[childGroup].specificAttr.domainList);

      if (Object.keys(selectedChildDetails.metaData.essential.modesToSelectTheServices[childGroup].specificAttr.domainList).indexOf(selectedChildDetails.selectedChild) > -1) {
        console.log("Inside first if");
        console.log(selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup]);
        if (selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup] === undefined) {
          console.log("Property is not defined inside the object");
          console.log(selectedChildDetails.metaData.essential.modesToSelectTheServices[childGroup].javascriptDataType);
          switch (selectedChildDetails.metaData.essential.modesToSelectTheServices[childGroup].javascriptDataType) {
            case "String":
              console.log("inside string of when property is undefined");
              selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup] = selectedChildDetails.selectedChild;
              break;
            case "Array":
              console.log("inside array of when property is  undefined");
              selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup] = [selectedChildDetails.selectedChild];
              break;
            default:

          }
          break;
        }
        else {
          //When the property is defined inisde the oject
          console.log("Property is  defined inside the object");
          switch (selectedChildDetails.metaData.essential.modesToSelectTheServices[childGroup].javascriptDataType) {
            case "String":
              console.log("inside string when property is defined");
              if (selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup] === selectedChildDetails.selectedChild) {
                console.log("Inside sendond if");

                selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup] = selectedChildDetails.selectedChild;

              }
              break;

            case "Array":
              console.log("inside array of when property is defined");
              if (selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup].indexOf(selectedChildDetails.selectedChild) < 0) {
                console.log("Inside sendond if");

                // selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup]=selectedChildDetails.selectedChild;

                selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup] = selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup].concat(selectedChildDetails.selectedChild);
                // selectedChildDetails.currentObject.childServices[childGroup] = selectedChildDetails.metaData.servicesIntializer[childGroup];
              }
              break;
          }

          break;
        }

      }

    }


    travelBookingParentCtrl.reflectSelectedChildren([selectedChildDetails.selectedChild]);

  };
  //travelBookingParentCtrl.travelPlanExists = dataUpdateHelper.travelPlanExists();

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
    var mimicDataNode = {
      "stay": [{ "location": "Alaska", "area": "Arkansas", "checkinDate": "2016-06-12T18:30:00.000Z", "checkinTime": "2016-06-13T15:33:00.000Z", "checkoutTime": "2016-06-13T12:33:00.000Z", "preferences": "nonAc", "rating": "twoStar", "nearBy": 21, "typeOfProperty": "hotels", "stars": "twoStar", "amenities": ["meetingRooms", "swimmingPools"], "proximity": "taxiStands" }],
      "localTravel": [{ "pickupPoint": "Alabama", "dropPoint": "Alaska", "typeOfLocalTransport": "cab", "pickupDate": "2016-06-12T18:30:00.000Z", "pickupTime": "2016-06-13T12:31:00.000Z" }]
    };

    var mimicDataEdge = {
      "flight": {
        "source": "",
        "destination": ""
      },
      "train": {}
    };
    //  travelBookingParentCtrl.currentSelectedObj.childServices
    // for (childService in mimicDataNode) {
    //   // travelBookingParentCtrl.currentSelectedObj.childServices[childService].forEach(function(service)
    //   //   {
    //   //    mainService.saveInSearch(travelBookingParentCtrl.currentSelectedObj.childServices[childService],service.requested)
    //   //  });

    //   mimicDataNode[childService].forEach(function (service) {
    //     console.log("from MIMIC NODe", service);
    //     // travelBookingParentCtrl.currentSelectedObj.childServices[childService]
    //     mainService.saveInSearch(childService, service)
    //   });
    // }
    if (travelBookingParentCtrl.ifLastElement()) {
      var travelPlanObject = {
        "components": [{
          "types": "location",
          "state": "initial",
          "essential": {
            "noDependencyData": {
              "location": "Bengaluru"
            },
            "modesToSelectTheServices": {
              "basicServices": ["stay", "localTravel"]
            }
          },
          "childServices": {
            "stay": [{
              "state": "request",
              "requested": {
                "location": "Bengaluru",
                "area": "MadiWala",
                "checkinDate": "01/04/2016",
                "checkoutDate": "02/04/2016",
                "checkinTime": "5:00 AM",
                "checkoutTime": "7:00 AM",
                "preferences": "ac",
                "rating": ["oneStar", "threeStar"],
                "nearBy": "5",
                "typeOfProperty": "guestHouse",
                "stars": ["twoStar", "threeStar"],
                "amenities": ["meetingRooms", "swimmingPools"]
              },
              "selected": {
                "image": "public/assets/images/taj1.png",
                "name": "JW Mariott",
                "rating": "5",
                "location": "hotel's exact address",
                "roomType": "Deluxe",
                "checkinDate": "4/30/2016",
                "checkinTime": "2:00 PM",
                "checkoutDate": "5/01/2016",
                "checkoutTime": "3:00 PM",
                "price": "9000 INR",
                "comments": "Some useful comment which you may want to convey to the hotel"
              }
            }, {
                "state": "request",
                "requested": {
                  "location": "Bengaluru",
                  "area": "MadiWala",
                  "checkinDate": "01/04/2016",
                  "checkOutDate": "02/04/2016",
                  "checkinTime": "5:00 AM",
                  "preferences": "ac",
                  "rating": ["oneStar", "threeStar"],
                  "nearBy": "5",
                  "typeOfProperty": "guestHouse",
                  "stars": ["twoStar", "threeStar"],
                  "amenities": ["meetingRooms", "swimmingPools"]
                },
                "selected": {
                  "image": "public/assets/images/taj1.png",
                  "name": "JW Mariott",
                  "rating": "5",
                  "location": "hotel's exact address",
                  "roomType": "Deluxe",
                  "checkinDate": "4/30/2016",
                  "checkinTime": "2:00 PM",
                  "checkoutDate": "5/01/2016",
                  "checkoutTime": "3:00 PM",
                  "price": "9000 INR",
                  "comments": "Some useful comment which you may want to convey to the hotel"
                }
              }],
            "localTravel": [{
              "state": "select",
              "requested": {},
              "selected": {
                "source": "Rajiv nagar Chowk",
                "destination": "New Delhi IGI Airport",
                "type": "localBus",
                "pickupDate": "4/30/2016",
                "pickupTime": "10:00 AM",
                "dropDate": "4/30/2016",
                "dropTime": "12:00 PM",
                "localBus": {
                  "image": "public/assets/images/localBus.png",
                  "companyName": "red bus",
                  "busNumber": "AB 327014",
                  "busType": "AC bus",
                  "seatsType": "sleeper",
                  "price": "100 INR"
                }
              }
            }, {
                "state": "request",
                "requested": {},
                "selected": {

                  "source": "Rajiv nagar Chowk",
                  "destination": "New Delhi IGI Airport",
                  "type": "cab",
                  "pickupDate": "4/30/2016",
                  "pickupTime": "10:00 AM",
                  "dropDate": "4/30/2016",
                  "dropTime": "12:00 PM",
                  "cab": {
                    "image": "public/assets/images/ola.png",
                    "companyName": "Uber",
                    "cabNumber": "DL AJ 5034",
                    "driverDetails": {
                      "name": "Job Elton"
                    },
                    "estimatedPrice": "800 INR",
                    "cabType": "sedan"
                  }
                }
              }]
          }
        }, {
            "types": "transit",
            "state": "initial",
            "essential": {
              "noDependencyData": {
                "travelStartDate": "02/04/2016"
              },
              "modesToSelectTheServices": {
                "mode": "flight",
                "otherAddOnServices": ["visa", "translator"]
              }
            },
            "childServices": {
              "flight": {
                "state": "select",
                "requested": {
                  "source": "Bengaluru",
                  "destination": "Pune",
                  "travelStartDate":"2016-06-13T18:30:00.000Z",
                  "class":"Bussiness",
                  "numberOfHops":4,
                  "departureTime":"2016-06-13T11:35:00.000Z",
                  "airlines":"Air Costa"
                },
                "selected": {
                  "image": "public/assets/images/indigo.png",
                  "companyName": "Air Costa",
                  "flightID": "AC2456",
                  "seatNumber": "45H",
                  "sourceAirport": "Bengaluru",
                  "destinationAirport": "Pune",
                  "price": "876547 INR",
                  "travelStartDate": "02/04/2016",
                  "preferences": {
                    "class": "Bussiness",
                    "Nonstop": "true",
                    "meals": "Non Veg",
                    "extraBaggage": "14 Kg"
                  },
                  "travelStartTime": "2:00 AM",
                  "travelEndDate": "5/2/2016",
                  "travelEndTime": "3:00 AM"
                }
              }
            }
          }, {
            "types": "location",
            "essential": {
              "noDependencyData": {
                "location": "Pune"
              },
              "modesToSelectTheServices": {
                "basicServices": ["stay", "localTravel"]
              }
            },
            "childServices": {
              "stay": [{
                "state": "select",
                "requested": {
                  "location": "Bengaluru",
                  "area": "MadiWala",
                  "checkinDate": "01/04/2016",
                  "checkOutDate": "02/04/2016",
                  "checkinTime": "5:00 AM",
                  "preferences": "ac",
                  "rating": ["oneStar", "threeStar"],
                  "nearBy": "5",
                  "typeOfProperty": "guestHouse",
                  "stars": ["twoStar", "threeStar"],
                  "amenities": ["meetingRooms", "swimmingPools"]
                },
                "selected": {
                  "image": "public/assets/images/taj1.png",
                  "name": "JW Mariott",
                  "rating": "5",
                  "location": "hotel's exact address",
                  "roomType": "Deluxe",
                  "checkinDate": "4/30/2016",
                  "checkinTime": "2:00 PM",
                  "checkoutDate": "5/01/2016",
                  "checkoutTime": "3:00 PM",
                  "price": "9000 INR",
                  "comments": "Some useful comment which you may want to convey to the hotel"
                }
              }],
              "localTravel": [{
                "state": "select",
                "requested": {},
                "selected": {
                  "source": "Rajiv nagar Chowk",
                  "destination": "New Delhi IGI Airport",
                  "type": "cab",
                  "pickupDate": "4/30/2016",
                  "pickupTime": "10: 00 AM",
                  "dropDate": "4/30/2016",
                  "dropTime": "12:00 PM",
                  "cab": {
                    "image": "public/assets/images/ola.png",
                    "companyName": "Uber",
                    "cabNumber": "DL AJ 5034",
                    "driverDetails": {
                      "name": "Job Elton"
                    },
                    "estimatedPrice": "800 INR",
                    "cabType": "sedan"
                  }

                }
              }]
            }
          }]
      };
      travelPlanObject.components.forEach(function (travelPlan) {
        for (childService in travelPlan.childServices) {
          console.log(childService);
          if(angular.isArray(travelPlan.childServices[childService])) {
            travelPlan.childServices[childService].forEach(function (service) {
            mainService.saveInSearch(childService,service);
          });  
          }else {
            console.log("Inside else", travelPlan.childServices[childService]);
            mainService.saveInSearch(childService,travelPlan.childServices[childService]);
          }
        }
      });
      mainService.UpdateTravelPlanObject(travelBookingParentCtrl.travelobjectmain._id, travelPlanObject).then(function (data) {
        $location.path('/searchResults/' + travelBookingParentCtrl.travelobjectmain._id);
        console.log(data);
      });
      // travelBookingParentCtrl.$router.navigate(['searchResult']);
    }
    else {
      console.log(travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj));

      travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) + 1];
      mainService.UpdateTravelPlanObject(travelBookingParentCtrl.travelobjectmain._id, travelBookingParentCtrl.travelobjectmain);

      console.log("travelBookingParentCtrl.currentSelectedObj");

      console.log(travelBookingParentCtrl.currentSelectedObj);

      // So that the earlier selected child services are also shown on click of next button
      travelBookingParentCtrl.selectedChildren = Object.keys(travelBookingParentCtrl.currentSelectedObj.childServices);
    }



  }


  travelBookingParentCtrl.goToPreviousElement = function () {
    travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) - 1];

    // So that the earlier selected child services are also shown on click of previous button
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
        console.log(travelBookingParentCtrl.elementFields[travelBookingParentCtrl.currentSelectedObj.types]);
        travelBookingParentCtrl.currentSelectedObj.childServices[childId] = travelBookingParentCtrl.elementFields[travelBookingParentCtrl.currentSelectedObj.types].servicesIntializer[childId];
      }
    });
  }
}
