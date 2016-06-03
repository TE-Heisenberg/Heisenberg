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
            "type": "singleSlider",
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
    "noDependencyData": {
      "travelStartDate": {
        "mandatory": "true",
        "displayName": "Travel Start Date",
        "id": "travelStartDate",
        "type": "date"
      }
    },
    "modesToSelectTheServices": {
      "mode": {
        "mandatory": true,
        "displayName": "Select the mode",
        "id": "mode",
        "type": "singleSelect",
        "specificAttr": {
          "domainList": ["flight", "bus", "train"]
        }

      },
      "extraAddOnsServices": {
        "mandatory": false,
        "displayName": "Extra Add-on Services",
        "id": "extraAddOnsServices",
        "type": "multiSelect",
        "specificAttr": {
          "domainList": ["visaOnArrival", "forex"]
        }
      }
    }
  },
  "services": {
    "flight": {
      "travelStartDate": {
        "mandatory": true,
        "displayName": "Travel Start Date",
        "id": "travelStartDate",
        "type": "date",
        "data-reference": "essential.travelStartDate"
      },
      "class": {
        "mandatory": true,
        "displayName": "Class",
        "id": "class",
        "type": "singleSelect",
        "specificAttr": {
          "domainList": ["Bussiness", "Economy"]
        }

      },
      "numberOfHops": {
        "mandatory": true,
        "displayName": "Number of Hops",
        "id": "numberOfHops",
        "type": "singleSlider",
        "specificAttr": {
          "min": 0,
          "max": 15
        }
      },
      "departureTime": {
        "mandatory": false,
        "displayName": "Departure Time",
        "id": "departureTime",
        "type": "time"
      },
      "airlines": {
        "mandatory": false,
        "displayName": "Airlines",
        "id": "airlines",
        "type": "singleSelect",
        "specificAttr": {
          "domainList": ["Air Asia", "Air Costa", "Jet"]
        }

      }
    },
    "train": {
      "travelStartDate": {
        "mandatory": true,
        "displayName": "Travel Start Date",
        "id": "travelStartDate",
        "type": "date",
        "data-reference": "essential.travelStartDate"
      },
      "class": {
        "mandatory": true,
        "displayName": "Class",
        "id": "class",
        "type": "singleSelect",
        "specificAttr": {
          "domainList": ["Bussiness", "Economy"]
        }

      },
      "numberOfHops": {
        "mandatory": true,
        "displayName": "Number of Hops",
        "id": "numberOfHops",
        "type": "singleSlider",
        "specificAttr": {
          "min": 0,
          "max": 15
        }
      },
      "departureTime": {
        "mandatory": false,
        "displayName": "Departure Time",
        "id": "departureTime",
        "type": "time"
      },
      "airlines": {
        "mandatory": false,
        "displayName": "Airlines",
        "id": "airlines",
        "type": "singleSelect",
        "specificAttr": {
          "domainList": ["Air Asia", "Air Costa", "Jet"]
        }

      }
    },
    "bus": {
		"travelStartDate": {
			"mandatory": true,
			"displayName": "Travel Start Date",
			"id": "travelStartDate",
			"type": "date",
			"data-reference": "essential.travelStartDate"
		},
		"class": {
			"mandatory": true,
			"displayName": "Class",
			"id": "class",
			"type": "singleSelect",
			"specificAttr": {
				"domainList": ["Bussiness", "Economy"]
			}

		},
		"numberOfHops": {
			"mandatory": true,
			"displayName": "Number of Hops",
			"id": "numberOfHops",
			"type": "singleSlider",
			"specificAttr": {
				"min": 0,
				"max": 15
			}
		},
		"departureTime": {
			"mandatory": false,
			"displayName": "Departure Time",
			"id": "departureTime",
			"type": "time"
		},
		"airlines": {
			"mandatory": false,
			"displayName": "Airlines",
			"id": "airlines",
			"type": "singleSelect",
			"specificAttr": {
				"domainList": ["Air Asia", "Air Costa", "Jet"]
			}

		}
	}
  }

}

};
//  travelBookingParentCtrl.tempCurrentObj ={
// 	"essential": {},
// 	"childServices": {
//    	"state": "selected",
// 		"selectedData": {
// 			"travelStartDate": "5/1/2016",
// 			"mode": "flight",
// 			"flight": {
//
// 				"image": "public/assets/images/indigo.png",
// 				"companyName": "Air Costa",
// 				"flightID": "AC2456",
// 				"seatNumber": "45H",
// 				"sourceAirport": "koramangala airport",
// 				"destinationAirport": "delhi airport",
// 				"price": "876547 INR",
// 				"preferences": {
// 					"class": "Bussiness",
// 					"Nonstop": "true",
// 					"meals": "Non Veg",
// 					"extraBaggage": "14 Kg"
// 				}
// 			}
// 		}
//
//
// 	},
// 	"type": "edge",
// 	"state": "selected"
// }
//  travelBookingParentCtrl.tempCurrentObj ={
//  "essential": {},
//  "childServices": {
//
//
//  "stay": [{
//    "requestedData": {
//      "area": "Hari Nagar",
//      "rating": "3",
//      "roomType": "Executive",
//      "checkinDate": "6/30/2016",
//      "checkoutDate": "7/01/2016"
//    },
//    "selectedData": {
//      "image": "public/assets/images/hotel3.png",
//      "name": "JW Mariott",
//      "rating": "5",
//      "location": "hotel's exact address",
//      "roomType": "Deluxe",
//      "checkinDate": "6/30/2016",
//      "checkinTime": "2:00 PM",
//      "checkoutDate": "7/01/2016",
//      "checkoutTime": "3:00 PM",
//      "price": "10000 INR",
//      "comments": "Some useful comment which you may want to convey to the hotel"
//    }
//  }]
// },
//
//
//
//  "type": "node",
//  "state": "selected"
// }
travelBookingParentCtrl.tempCurrentObj ={
  "essential": {},
  "childServices": {


  },



  "type": "edge",
  "state": "selected"
}
travelBookingParentCtrl.tempSelectedChildren = ["flight","train","bus"];
};



}
