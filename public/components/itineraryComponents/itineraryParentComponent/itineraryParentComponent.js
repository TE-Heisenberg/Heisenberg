angular.module('app')
  .component('itineraryParentComponent', {

    templateUrl: 'public/components/itineraryComponents/itineraryParentComponent/itineraryParentComponent.html',
    controllerAs: 'model',
    controller: mainController,
    $canActivate: function (mainService, $nextInstruction) {
      var tid = decodeURIComponent($nextInstruction.params.id);
      console.log("Inside Can activate of iti");
      console.log(tid);
      return mainService.getPrerequisites(tid).then(function (data) {
        console.log(data);
        mainService.nodeOrEdgeMasterData = data;
        return true;
      });
    }
  })

function mainController(mainService) {
  var model = this;
  var travelPlanObject = [
    {
      "type": "location",
      "essential": {
        "noDependencyData": {
          "location": "Bangalore"
        }
        ,
        "modesToSelectTheServices": {
          "basicServices": ["stay", "localTravel"]
        }
      },
      "childServices": {
        "stay": {
          "state": "",
          "individualChildServices": [
            {
              "state": "request",
              "requested": {
                "location": "Bangalore",
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
            }
          ]
        },
        "localTravel": {
          "state": "",
          "individualChildServices": [
            {
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
            }
          ]
        }
      }
    },
    {
      "type": "transit",
      "essential": {
        "noDependencyData": {
          "travelStartDate": "02/04/2016"
        },
        "modesToSelectTheServices": {
          "mode": "flight",
          "otherAddOnServices": ["visa", "translator"]
        }
      }
      ,
      "childServices": {
        "flight": {
          "state": "select",
          "individualChildServices": {
            "requested": {},
            "selected": {
              "image": "public/assets/images/indigo.png",
              "companyName": "Air Costa",
              "flightID": "AC2456",
              "seatNumber": "45H",
              "sourceAirport": "koramangala airport",
              "destinationAirport": "delhi airport",
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
      }
    },
    {
      "type": "location",
      "essential": {
        "noDependencyData": {
          "location": "Pune"
        }
        ,
        "modesToSelectTheServices": {
          "basicServices": ["stay", "localTravel"]
        }
      }
      ,
      "childServices": {
        "stay": {
          "state": "",
          "individualChildServices": [
            {
              "state": "select",
              "requested": {
                "location": "Bangalore",
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
            }
          ]
        },
        "localTravel": {
          "state": "",
          "individualChildServices": [
            {
              "state": "select",
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
                  }
                  ,
                  "estimatedPrice": "800 INR",
                  "cabType": "sedan"
                }
              }
            }
          ]
        }
      }
    }
  ];
  model.displayKeyObject = new Object();
  model.nodeMasterData = mainService.nodeOrEdgeMasterData[0].data;
  model.edgeMasterData = mainService.nodeOrEdgeMasterData[1].data;
  model.travelPlanObject = mainService.nodeOrEdgeMasterData[2].data;

  console.log("node and edge master data............");
  console.log(model.nodeMasterData);
  console.log(model.edgeMasterData);
  console.log('inside mainController');

  model.displayKeyObject = model.edgeMasterData.servicesDetails.mutuallyExclusive.mode.servicesDetails.flight;
  console.log("display key object");
  console.log(model.displayKeyObject);
  model.travelPlanData = travelPlanObject;
  // model.travelPlanData=new Object();

  // model.$onInit=function(){
  //    model.travelPlanData=
  //   //  console.log("kkkkkkkkkkkkkk "+model.travelPlanData);
  //   //  console.log(model.travelPlanData);
  // }

  model.edgeMasterFinder = function (type, servicesDetailsObject) {
    for (key in servicesDetailsObject) {
      for (innerKey in servicesDetailsObject[key]) {
        if (innerKey == "servicesDetails") {
          console.log(servicesDetailsObject[key][innerKey][type]);
          return servicesDetailsObject[key][innerKey][type];
        }
      }
    }
  }

  model.nodeMasterFinder = function (type, servicesDetailsObject) {
    for (key in servicesDetailsObject) {
      for (innerKey in servicesDetailsObject[key]) {
        if (innerKey == type) {
          return servicesDetailsObject[key][innerKey];
        }
      }
    }
  }

  model.getDisplayKeys = function (type) {
    if (type == 'flight' || type == 'train' || type == 'bus') {
      servicesDetailsObject = model.edgeMasterData.servicesDetails.mutuallyExclusive;
      model.displayKeyObject = model.edgeMasterFinder(type, servicesDetailsObject);
      console.log(model.displayKeyObject);
    }
    if (type == 'cab' || type == 'localBus') {
      type = "localTravel";
      servicesDetailsObject = model.nodeMasterData.servicesDetails;
      model.displayKeyObject = model.nodeMasterFinder(type, servicesDetailsObject);
      console.log(model.displayKeyObject);
    }
    if (type == 'stay') {
      servicesDetailsObject = model.nodeMasterData.servicesDetails;
      model.displayKeyObject = model.nodeMasterFinder(type, servicesDetailsObject);
      console.log(model.displayKeyObject);
    }
    if (type == 'location') {
      servicesDetailsObject = model.nodeMasterData.essential;
      model.displayKeyObject = model.nodeMasterFinder(type, servicesDetailsObject);
      console.log(model.displayKeyObject);
    }
    return model.displayKeyObject;
  }

  model.getModePref = function (type) {
    console.log('main component type value' + type);
    if (type == 'flight') {
      model.array = ['flightID', 'seatNumber'];
      console.log('inside ' + model.array);
      return model.array;
    }
    else if (type == 'train') {
      model.array = ['trainNumber', 'coachNumber', 'seatNumber'];
      console.log('inside ' + model.array);
      return model.array;
    }
    else if (type == 'bus') {
      model.array = ['busNumber', 'seatNumber'];
      console.log('inside ' + model.array);
      return model.array;
    }
    else if (type == 'cab') {
      model.array = ['cabNumber', 'cabType'];
      console.log('inside ' + model.array);
      return model.array;
    }
    else if (type == 'localBus') {
      model.array = ['busNumber', 'busType', 'seatsType'];
      console.log('inside ' + model.array);
      return model.array;
    }
  }

  model.getSeatPref = function (value) {
    if (value == 'flight') {
      return ['class', 'meals', 'extraBaggage'];
    }
    else if (value == 'train') {
      return ['class'];
    }
    else if (value == 'bus') {
      return ['class', 'seatType'];
    }
  }
}
