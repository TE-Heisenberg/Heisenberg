angular.module('app')
.component('travelBookingParentComponent',{
  templateUrl: "public/components/travelBookingParentComponent/travelBookingParentComponent.html",
  controller: travelBookingParentCtrl,
  controllerAs: "travelBookingParentCtrl"
});


function travelBookingParentCtrl () {
  var travelBookingParentCtrl = this;
  travelBookingParentCtrl.travelPlanObject = [
    { type:"location",
    cityName:"Bangalore"
  },
  {
    type:"transit",
    childServices:
    {
      booking:{
        requested:{mode:"flight"}
      }
    }
  },
  {
    type:"location",
    cityName:"Delhi"
  }
];




travelBookingParentCtrl.currentnodeedge = function (id, type) {
  console.log(id);
  console.log(type);

};
//PG: 19th May- It is checked before hand if the Travel Plan exists or not
travelBookingParentCtrl.$onInit = function () {

  //travelBookingParentCtrl.travelPlanExists = dataUpdateHelper.travelPlanExists();

};

travelBookingParentCtrl.travelPlanExists = true;
if(travelBookingParentCtrl.travelPlanExists)
{
  // PG: 19th May- Getting all the fields data needed to render the forms
  // var elementFields = {
  //   "node": dataUpdateHelper.getNodes(),
  //   "edge": dataUpdateHelper.getEdges()
  // }

  travelBookingParentCtrl.elementFields = {
    "node": {
      "essential": {
        "noDependencyData":{
          "location": {
            "mandatory": true,
            "displayName": "City",
            "id": "location",
            "type": "text"
          }
        },
        "modesToSelectTheServices": {
          "basicServices":{
            "mandatory": false,
            "displayName": "Select Basic Services",
            "id": "selectedServices",
            "type": "checkBox",
            "specificAttr":{
              "domainList": {"stay":"Stay","localTravel":"Local Travel"}
              // "domainList":[{"serviceId":"stay", "serviceDisplayName": "Stay"},{"serviceId":"localTravel", "serviceDisplayName": "Local Travel"}],
              // "listLabelKey": "serviceId",
              // "listLabelValue": "serviceDisplayName"
            }

          },



        }
      },
      "services": {
        "stay": {
          "location":{
            "mandatory": true,
            "displayName": "City",
            "id": "location",
            "type": "autoComplete",
            "data-reference": "essential.location"
          },
          "area": {
            "mandatory": true,
            "displayName": "Area",
            "id": "area",
            "type": "autoComplete",
            "data": "areaLocationUrl"

          },
          "checkindate":{
            "mandatory": true,
            "displayName": "Check-in Date",
            "id": "checkindate",
            "type": "date"
          },
          "checkoutdate":{
            "mandatory": true,
            "displayName": "Check-out Date",
            "id": "checkoutdate",
            "type": "date"
          },
          "checkinTime":{
            "mandatory": true,
            "displayName": "Check-in Time",
            "id": "checkinTime",
            "type": "time"
          },
          "checkoutTime":{
            "mandatory": true,
            "displayName": "Check-out Time",
            "id": "checkoutTime",
            "type": "time"
          }
          ,
          "preferences":{
            "mandatory": false,
            "displayName": "Preferences",
            "id": "preferences",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["ac","non-ac"]
            }
          },
          "rating":
          {
            "mandatory": false,
            "displayName": "Rating",
            "id": "rating",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["1-star","2-star","3-star","4-star"]
            }
          },
          "nearBy" : {
            "mandatory": false,
            "displayName": "Near By",
            "id": "nearBy",
            "type": "slider",
            "specificAttr":{
              "min":0.1,
              "max":200
            }
          }
          ,
          "typeOfProperty":
          {
            "mandatory": true,
            "displayName": "Type Of Property",
            "id": "typeOfProperty",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["Guest House", "Hotels"]
            }
          },
          "stars":
          {
            "mandatory": false,
            "displayName": "Stars",
            "id": "stars",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["1-star","3-star", "5-star", "7-star"]
            }
          },
          "amenities":{
            "mandatory": false,
            "displayName": "Amenities",
            "id": "amenities",
            "type": "multiSelect",
            "specificAttr":{
              "domainList":["meeting rooms", "swimming pool", "fitness", "restaurants"]
            }
          },
          "proximity": {
            "mandatory": false,
            "displayName": "Proximity",
            "id": "proximity",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["metro station", "taxi stands", "airports", "railway stations" ]
            }

          }

        }
        ,
        "localTravel":{
          "pickupPoint": {
            "mandatory": true,
            "displayName": "Pick-up Point",
            "id": "pickupPoint",
            "type": "autoComplete",
            "data": ["koramangala",
              "SilkBoard",
              "Electronic City",
              "Sarjapura"
            ]
          },

          "dropPoint": {
            "mandatory": true,
            "displayName": "Drop Point",
            "id": "dropPoint",
            "type": "autoComplete",
            "data": ["koramangala",
              "SilkBoard",
              "Electronic City",
              "Sarjapura"
            ]
          },
          "typeOfLocalTransport": {
            "mandatory": true,
            "displayName": "Type",
            "id": "typeOfLocalTransport",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["Cab", "Bus"]
            }
          },

          "pickupDate": {
            "mandatory": true,
            "displayName": "Pick up Date",
            "id": "pickupDate",
            "type": "date"
          },
          "pickupTime": {
            "mandatory": true,
            "displayName": "Pick up Time",
            "id": "pickupTime",
            "type": "time"
          }


        }
      }
    },
    "edge": {
      "essential": {
        "noDependencyData":{
          "location": {
            "mandatory": true,
            "displayName": "Cityy",
            "id": "location",
            "type": "text"
          }
        },
        "modesToSelectTheServices": {
          "basicServices":{
            "mandatory": false,
            "displayName": "Select Basic Services",
            "id": "selectedServices",
            "type": "checkBox",
            "specificAttr":{
              "domainList": {"stay":"Jagah","localTravel":"sthaaneey parivahan"}
              // "domainList":[{"serviceId":"stay", "serviceDisplayName": "Stay"},{"serviceId":"localTravel", "serviceDisplayName": "Local Travel"}],
              // "listLabelKey": "serviceId",
              // "listLabelValue": "serviceDisplayName"
            },

          }
        }
      },
      "services": {
        "stay":{
          "travelDate":{
            "mandatory": true,
            "displayName": "Some Good Travel date",
            "id": "checkindate",
            "type": "date"
          },
          "someOtherDate":{
            "mandatory": true,
            "displayName": "Travel date",
            "id": "checkindate",
            "type": "date"
          },
          "checkinDate":{
            "mandatory": true,
            "displayName": "Check-in Date",
            "id": "checkindate",
            "type": "date"
          },
          "checkoutDate":{
            "mandatory": true,
            "displayName": "Check-out Date",
            "id": "checkoutdate",
            "type": "date"
          }
          ,
          "preferences":{
            "mandatory": false,
            "displayName": "Preferences",
            "id": "preferences",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["ac","non-ac"]
            }
          },
          "preferencesss":{
            "mandatory": false,
            "displayName": "Preferences",
            "id": "preferences",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["ac","non-ac"]
            }
          },

          "prefer":{
            "mandatory": false,
            "displayName": "Preferences",
            "id": "preferences",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["ac","non-ac"]
            }
          }
        }
        ,
        "localTravel":{
          "checkinDate":{
            "mandatory": true,
            "displayName": "Check-in Date",
            "id": "checkindate",
            "type": "date"
          },
          "checkoutDate":{
            "mandatory": true,
            "displayName": "Check-out Date",
            "id": "checkoutdate",
            "type": "date"
          }
          ,
          "preferences":{
            "mandatory": false,
            "displayName": "Preferences",
            "id": "preferences",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["ac","non-ac"]
            }
          }
        }
      }
    }

  };
  travelBookingParentCtrl.tempCurrentObj = {
    "essential": {
    },
    "childServices": {},
    "type": "node",
    "state": "initial"
  };
  travelBookingParentCtrl.tempSelectedChildren = ["stay","localTravel"];
};



}
