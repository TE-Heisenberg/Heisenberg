angular.module('app').factory('mainService', function ($http, $q) {

//   var travelPlanObject=[
//   {
//     "type": "location",
//     "essential": {
//         "noDependencyData": {
//           "cityName": "Bangalore"
//         }
//         ,
//         "modesToSelectTheServices": {
//           "basicServices": ["stay","localTravel"]
//         }
//     },
//     "childServices": {
//       "stay": [
//                 {
//                   "state": "selection",
//                   "requested": {
//                     "location": "Bangalore",
//                     "area": "MadiWala",
//                     "checkinDate": "01/04/2016",
//                     "checkOutDate": "02/04/2016",
//                     "checkinTime": "5:00 AM",
//                     "preferences": "ac",
//                     "rating": ["oneStar","threeStar"],
//                     "nearBy": "5",
//                     "typeOfProperty": "guestHouse",
//                     "stars":["twoStar", "threeStar"],
//                     "amenities":["meetingRooms","swimmingPools"]
//                   },
//                   "selected": {
//                     "image": "public/assets/images/taj1.png",
//                     "name": "JW Mariott",
//                     "rating": "5",
//                     "location": "hotel's exact address",
//                     "roomType": "Deluxe",
//                     "checkinDate": "4/30/2016",
//                     "checkinTime": "2:00 PM",
//                     "checkoutDate": "5/01/2016",
//                     "checkoutTime": "3:00 PM",
//                     "price": "9000 INR",
//                     "comments": "Some useful comment which you may want to convey to the hotel"
//                   }
//                 },
//                 {
//                   "state": "selection",
//                   "requested": {
//                     "location": "Bangalore",
//                     "area": "MadiWala",
//                     "checkinDate": "01/04/2016",
//                     "checkOutDate": "02/04/2016",
//                     "checkinTime": "5:00 AM",
//                     "preferences": "ac",
//                     "rating": ["oneStar","threeStar"],
//                     "nearBy": "5",
//                     "typeOfProperty": "guestHouse",
//                     "stars":["twoStar", "threeStar"],
//                     "amenities":["meetingRooms","swimmingPools"]
//                   },
//                   "selected": {
//                     "image": "public/assets/images/taj1.png",
//                     "name": "JW Mariott",
//                     "rating": "5",
//                     "location": "hotel's exact address",
//                     "roomType": "Deluxe",
//                     "checkinDate": "4/30/2016",
//                     "checkinTime": "2:00 PM",
//                     "checkoutDate": "5/01/2016",
//                     "checkoutTime": "3:00 PM",
//                     "price": "9000 INR",
//                     "comments": "Some useful comment which you may want to convey to the hotel"
//                   }
//                 }
//               ],
//       "localTravel": [
//           {
//             "state": "selection",
//             "selected":{
//
//                 "source": "Rajiv nagar Chowk",
//                 "destination": "New Delhi IGI Airport",
//                 "type": "localBus",
//                 "pickupDate": "4/30/2016",
//                 "pickupTime": "10:00 AM",
//                 "dropDate": "4/30/2016",
//                 "dropTime": "12:00 PM",
//                 "localBus": {
//                   "image": "public/assets/images/localBus.png",
//                   "companyName": "red bus",
//                   "busNumber": "AB 327014",
//                   "busType": "AC bus",
//                   "seatsType": "sleeper",
//                   "price": "100 INR"
//                 }
//             }
//           },
//           {
//             "state": "selection",
//             "selected":{
//
//                 "source": "Rajiv nagar Chowk",
//                 "destination": "New Delhi IGI Airport",
//                 "type": "cab",
//                 "pickupDate": "4/30/2016",
//                 "pickupTime": "10:00 AM",
//                 "dropDate": "4/30/2016",
//                 "dropTime": "12:00 PM",
//                 "cab": {
//                   "image": "public/assets/images/ola.png",
//                   "companyName": "Uber",
//                   "cabNumber": "DL AJ 5034",
//                   "driverDetails": {
//                     "name": "Job Elton"
//                   },
//                   "estimatedPrice": "800 INR",
//                   "cabType": "sedan"
//                 }
//             }
//           }
//       ]
//     }
//   },
//   {
//     "type": "transit",
//     "essential": {
//       "noDependencyData": {
//           "travelStartDate":"02/04/2016"
//         },
//       "modesToSelectTheServices": {
//         "mode": "flight",
//         "otherAddOnServices": ["visa","translator"]
//       }
//     }
//     ,
//     "childServices": {
//       "flight": {
//         "state": "selection",
//         "selected": {
//           "image":"public/assets/images/indigo.png",
//           "companyName": "Air Costa",
//           "flightID": "AC2456",
//           "seatNumber": "45H",
//           "sourceAirport":"koramangala airport",
//           "destinationAirport":"delhi airport",
//           "price": "876547 INR",
//           "travelStartDate":"02/04/2016",
//           "preferences": {
//             "class": "Bussiness",
//             "Nonstop": "true",
//             "meals": "Non Veg",
//             "extraBaggage": "14 Kg"
//           },
//           "travelStartTime": "2:00 AM",
//           "travelEndDate": "5/2/2016",
//           "travelEndTime": "3:00 AM"
//         }
//       }
//     }
//   },
//   {
//     "type": "location",
//     "essential": {
//       "noDependencyData": {
//         "cityName": "Bangalore"
//       }
//       ,
//       "modesToSelectTheServices": {
//         "basicServices": ["stay", "localTravel"]
//       }
//
//     }
//     ,
//     "childServices": {
//       "stay": [
//                 {
//                   "state": "selection",
//                   "requested": {
//                     "location": "Bangalore",
//                     "area": "MadiWala",
//                     "checkinDate": "01/04/2016",
//                     "checkOutDate": "02/04/2016",
//                     "checkinTime": "5:00 AM",
//                     "preferences": "ac",
//                     "rating": ["oneStar","threeStar"],
//                     "nearBy": "5",
//                     "typeOfProperty": "guestHouse",
//                     "stars":["twoStar", "threeStar"],
//                     "amenities":["meetingRooms","swimmingPools"]
//                   },
//                   "selected": {
//                     "image": "public/assets/images/taj1.png",
//                     "name": "JW Mariott",
//                     "rating": "5",
//                     "location": "hotel's exact address",
//                     "roomType": "Deluxe",
//                     "checkinDate": "4/30/2016",
//                     "checkinTime": "2:00 PM",
//                     "checkoutDate": "5/01/2016",
//                     "checkoutTime": "3:00 PM",
//                     "price": "9000 INR",
//                     "comments": "Some useful comment which you may want to convey to the hotel"
//                   }
//                 }
//               ],
//       "localTravel": [
//           {
//             "state": "selection",
//             "selected":{
//
//                 "source": "Rajiv nagar Chowk",
//                 "destination": "New Delhi IGI Airport",
//                 "type": "cab",
//                 "pickupDate": "4/30/2016",
//                 "pickupTime": "10:00 AM",
//                 "dropDate": "4/30/2016",
//                 "dropTime": "12:00 PM",
//                 "cab": {
//                   "image": "public/assets/images/ola.png",
//                   "companyName": "Uber",
//                   "cabNumber": "DL AJ 5034",
//                   "driverDetails": {
//                     "name": "Job Elton"
//                   }
//                   ,
//                   "estimatedPrice": "800 INR",
//                   "cabType": "sedan"
//                 }
//             }
//           }
//       ]
//     }
//   },
//   {
//     "type": "transit",
//     "essential": {
//       "noDependencyData": {
//         "travelStartDate":"02/04/2016"
//       },
//       "modesToSelectTheServices": {
//         "mode": "train",
//         "otherAddOnServices": ["visa","translator"]
//       }
//     }
//     ,
//     "childServices": {
//       "train": {
//         "state": "selection",
//         "selected": {
//           "image":"public/assets/images/rail.png",
//           "companyName": "Air Costa",
//           "trainNumber": "AC2456",
//           "seatNumber": "45H",
//           "coachNumber": "7A",
//           "sourceStation":"koramangala railway station",
//           "destinationStation":"new delhi railway station",
//           "price": "876547 INR",
//           "travelStartDate":"02/04/2016",
//           "preferences": {
//             "class": "2 AC"
//           },
//           "travelStartTime": "2:00 AM",
//           "travelEndDate": "5/2/2016",
//           "travelEndTime": "3:00 AM"
//         }
//       }
//     }
//   },
//   {
//     "type": "location",
//     "cityName": "Bangalore",
//     "basicServices": "",
//     "childServices": {
//       "stay": [
//                 {
//                   "state": "selection",
//                   "requested": {
//                     "location": "Bangalore",
//                     "area": "MadiWala",
//                     "checkinDate": "01/04/2016",
//                     "checkOutDate": "02/04/2016",
//                     "checkinTime": "5:00 AM",
//                     "preferences": "ac",
//                     "rating": ["oneStar","threeStar"],
//                     "nearBy": "5",
//                     "typeOfProperty": "guestHouse",
//                     "stars":["twoStar", "threeStar"],
//                     "amenities":["meetingRooms","swimmingPools"]
//                   },
//                   "selected": {
//                     "image": "public/assets/images/taj1.png",
//                     "name": "JW Mariott",
//                     "rating": "5",
//                     "location": "hotel's exact address",
//                     "roomType": "Deluxe",
//                     "checkinDate": "4/30/2016",
//                     "checkinTime": "2:00 PM",
//                     "checkoutDate": "5/01/2016",
//                     "checkoutTime": "3:00 PM",
//                     "price": "9000 INR",
//                     "comments": "Some useful comment which you may want to convey to the hotel"
//                   }
//                 }
//               ],
//       "localTravel": [
//           {
//             "state": "selection",
//             "selected":{
//
//                 "source": "Rajiv nagar Chowk",
//                 "destination": "New Delhi IGI Airport",
//                 "type": "cab",
//                 "pickupDate": "4/30/2016",
//                 "pickupTime": "10:00 AM",
//                 "dropDate": "4/30/2016",
//                 "dropTime": "12:00 PM",
//                 "cab": {
//                   "image": "public/assets/images/ola.png",
//                   "companyName": "Uber",
//                   "cabNumber": "DL AJ 5034",
//                   "driverDetails": {
//                     "name": "Job Elton"
//                   }
//                   ,
//                   "estimatedPrice": "800 INR",
//                   "cabType": "sedan"
//                 }
//             }
//           }
//       ]
//     }
//   },
//   {
//     "type": "transit",
//     "travelStartDate":"02/04/2016",
//     "mode": "bus",
//     "otherAddOnServices": ["visa","translator"],
//     "childServices": {
//       "bus": {
//         "state": "selection",
//         "selected": {
//           "image":"public/assets/images/bus.png",
//           "companyName": "Air Costa",
//           "busNumber": "AC2456",
//           "seatNumber": "45H",
//           "sourceBusStop":"koramangala bus stop",
//           "destinationBusStop":"delhi bus stop",
//           "price": "876547 INR",
//           "travelStartDate":"02/04/2016",
//           "preferences": {
//             "class": "Deluxe AC",
//             "seatType": "sleeper"
//           },
//           "travelStartTime": "2:00 AM",
//           "travelEndDate": "5/2/2016",
//           "travelEndTime": "3:00 AM"
//         }
//       }
//     }
//   },
//   {
//     "type": "location",
//     "cityName": "Bangalore",
//     "basicServices": "",
//     "childServices": {
//       "stay": [
//                 {
//                   "state": "selection",
//                   "requested": {
//                     "location": "Bangalore",
//                     "area": "MadiWala",
//                     "checkinDate": "01/04/2016",
//                     "checkOutDate": "02/04/2016",
//                     "checkinTime": "5:00 AM",
//                     "preferences": "ac",
//                     "rating": ["oneStar","threeStar"],
//                     "nearBy": "5",
//                     "typeOfProperty": "guestHouse",
//                     "stars":["twoStar", "threeStar"],
//                     "amenities":["meetingRooms","swimmingPools"]
//                   },
//                   "selected": {
//                     "image": "public/assets/images/taj1.png",
//                     "name": "JW Mariott",
//                     "rating": "5",
//                     "location": "hotel's exact address",
//                     "roomType": "Deluxe",
//                     "checkinDate": "4/30/2016",
//                     "checkinTime": "2:00 PM",
//                     "checkoutDate": "5/01/2016",
//                     "checkoutTime": "3:00 PM",
//                     "price": "9000 INR",
//                     "comments": "Some useful comment which you may want to convey to the hotel"
//                   }
//                 }
//               ],
//       "localTravel": [
//           {
//             "state": "selection",
//             "selected":{
//
//                 "source": "Rajiv nagar Chowk",
//                 "destination": "New Delhi IGI Airport",
//                 "type": "cab",
//                 "pickupDate": "4/30/2016",
//                 "pickupTime": "10:00 AM",
//                 "dropDate": "4/30/2016",
//                 "dropTime": "12:00 PM",
//                 "cab": {
//                   "image": "public/assets/images/ola.png",
//                   "companyName": "Uber",
//                   "cabNumber": "DL AJ 5034",
//                   "driverDetails": {
//                     "name": "Job Elton"
//                   }
//                   ,
//                   "estimatedPrice": "800 INR",
//                   "cabType": "sedan"
//                 }
//             }
//           }
//       ]
//     }
//   }
// ]

<<<<<<< HEAD
/*var travelPlanObject={
  components:
  [{
    "type": "location",
    "essential": {
        "noDependencyData": {
          "location": "Bangalore"
        },
        "modesToSelectTheServices": {
          "basicServices": ["stay","localTravel"]
        }
    },
    "childServices": {
      "stay": [
                {
                  "state": "select",
=======
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
            "stay": [
               {
                  "state": "request",
>>>>>>> e0a029d6c0ba5a129cadc1c29e83486c3465e380
                  "requested": {
                     "location": "Bangalore",
                     "area": "MadiWala",
                     "checkinDate": "01/04/2016",
                     "checkinDate": "02/04/2016",
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
               },
               {
                  "state": "request",
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
            ],
            "localTravel": [
               {
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
               },
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
            "stay": [
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
            ],
            "localTravel": [
               {
                  "state": "select",
                  "requested": {},
                  "selected": {

<<<<<<< HEAD
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
]
}*/

        var travelPlanObjectInitial = {};
          // {
          //   "essential": {
          //   },
          //   "childServices": {},
          //   "type": "location",
          //   "state": "initial"
          // },
          // {
          //   "essential": {
          //   },
          //   "childServices": {},
          //   "type": "transit",
          //   "state": "initial"
          // },
          // {
          //   "essential": {
          //   },
          //   "childServices": {},
          //   "type": "location",
          //   "state": "initial"
          // }
        var elementMasters = {};
        var nodeMaster = {};
        var edgeMaster = {};
        var travelId='';
        var components=[];
        // var someData;
//         var events = (function(){
//             var topics = {};
//             var hOP = topics.hasOwnProperty;
//
//             return {
//               subscribe: function(topic, listener) {
//                 // Create the topic's object if not yet created
//                 if(!hOP.call(topics, topic)) topics[topic] = [];
//
//                 // Add the listener to queue
//                 var index = topics[topic].push(listener) -1;
//
//                 // Provide handle back for removal of topic
//                 return {
//                   remove: function() {
//                     delete topics[topic][index];
//                   }
//                 };
//               },
//               publish: function(topic, info) {
//                 // If the topic doesn't exist, or there's no listeners in queue, just leave
//                 if(!hOP.call(topics, topic)) return;
//
//                 // Cycle through topics queue, fire!
//                 topics[topic].forEach(function(item) {
//                 		item(info != undefined ? info : {});
//                 });
//               }
//             };
// })();

function travelPlanSaver(travelPlanobject)
{
        console.log("In travelPlanSaver");
        var deferred=$q.defer();
        $http.post("http://172.23.238.144:8080/travelPlan/crud/travelPlan",travelPlanobject)
        .success(function(data){
               console.log(data.components[0]);
          deferred.resolve(data);
      });
      return deferred.promise;
}
function travelPlanGetter(travelPlanid)
{

        console.log("in travelplan getter");
        console.log(travelPlanid);
        var deferred=$q.defer();
        $http.get("http://172.23.238.144:8080/travelPlan/crud/travelPlan/"+travelPlanid)
        .success(function(data){
                console.log("again in travelplan getter");
                //console.log(data);
                console.log(data.components[0]);
          deferred.resolve(data);
      });
      return deferred.promise;
}
        var subFactories= {
=======
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
   ]
   var travelPlanObjectInitial = [
      // {
      //   "essential": {
      //   },
      //   "childServices": {},
      //   "type": "location",
      //   "state": "initial"
      // },
      // {
      //   "essential": {
      //   },
      //   "childServices": {},
      //   "type": "transit",
      //   "state": "initial"
      // },
      // {
      //   "essential": {
      //   },
      //   "childServices": {},
      //   "type": "location",
      //   "state": "initial"
      // }
>>>>>>> e0a029d6c0ba5a129cadc1c29e83486c3465e380

   ];
   var elementMasters = {};
   var nodeMaster = {};
   var edgeMaster = {};
   // var someData;
   var subFactories = {

<<<<<<< HEAD
              components.push({
                "types":elementType,
                "state":"initial",
                "essential": {},
                "childServices": {}
              });
              console.log("I am inside travelPlanElementInitializer");
             },



             travelPlanInitializer: function(indexForTravelMode) {
                var deferred = $q.defer();
               travelPlanObjectInitial={};
               var modeOfTravel = ["oneWay", "twoWay", "multiWay"];
               console.log("I am in travelPlanInitializer");
               console.log(indexForTravelMode);
               var i=0;
               if(indexForTravelMode>=0){
                    while(i<=indexForTravelMode)
                    {
                      console.log("I am inside loop", i,indexForTravelMode );
                      subFactories.travelPlanElementInitializer('location');
                      subFactories.travelPlanElementInitializer('transit');
                      i +=1;
                    }
                      subFactories.travelPlanElementInitializer('location');
                      travelPlanObjectInitial['components']=components;
                    // return true;
                    travelPlanSaver(travelPlanObjectInitial).then(function(data){
                            deferred.resolve(data._id);
                    });
                    return deferred.promise;
                }

             },
              getTravelPlanId:function(){
                return travelId;
              },
              getTravelPlanObject: function(tid)
              {
                      var deferred=$q.defer();

                      travelPlanGetter(tid).then(function(data)
                      {
                         deferred.resolve(data);
                      });
                      return deferred.promise;
                   //return travelPlanObject;

                },
              getTravelPlanObjectInitial: function() {
                return travelPlanObjectInitial;
              },
=======
      travelPlanElementInitializer: function (elementType) {

         travelPlanObjectInitial.push({
            "type": elementType,
                "essential": {
                  "noDependencyData": {},
                  "modesToSelectTheServices": {

                  }
                },
            "childServices": {},
            "state": "initial"
         });
         console.log("I am inside travelPlanElementInitializer");
      },
>>>>>>> e0a029d6c0ba5a129cadc1c29e83486c3465e380

      travelPlanInitializer: function (indexForTravelMode) {
         travelPlanObjectInitial = [];
         var modeOfTravel = ["oneWay", "twoWay", "multiWay"];
         console.log("I am in travelPlanInitializer");
         console.log(indexForTravelMode);
         var i = 0;
         if (indexForTravelMode >= 0) {
            while (i <= indexForTravelMode) {
               console.log("I am inside loop", i, indexForTravelMode);
               subFactories.travelPlanElementInitializer('location');
               subFactories.travelPlanElementInitializer('transit');
               i += 1;
            }
            subFactories.travelPlanElementInitializer('location');
            return true;
         }
         else {
            return false;
         }
      },

      getTravelPlanObject: function () {
         return travelPlanObject;
      },
      getTravelPlanObjectInitial: function () {
         return travelPlanObjectInitial;
      }
      ,

      getElementData: function (elementType, elementId) {
         return travelPlanObject[elementType][elementId];

      },

<<<<<<< HEAD

             getPrerequisites: function(tid) {
                  console.log("in get prerequisites");
                     console.log(tid);
               return $q.all([subFactories.getNodeMaster(),subFactories.getEdgeMaster(),subFactories.getTravelPlanObject(tid)]);
             },

             travelPlanExists :function(){
               if(travelPlanObject==null || travelPlanObject.length==0){
                 return false;
               }
               else{
                 return true;
               }
             },
             currentplanLabels :function(){
               currentplan ={};
              return $http.get("public/data/landing/myPlans.config.json");

              //  .success(function (response) {
                //  currentplan.planDisplayName =response.headerDisplayName;
                //  currentplan.planSubHeaderCompleted=response.subHeadersDisplayName.completed;
                //  currentplan.planSubHeaderCurrent=response.subHeadersDisplayName.current;
                //  currentplan.planSubHeaderFuture=response.subHeadersDisplayName.future;
              //    return currentplan;
              //  });
             },

             worklistLabels :function(){
                 worklist={};
               return $http.get("public/data/landing/myWorklist.config.json");
              //  .success(function (response) {
                //  worklist.worklistDisplayName = response.headerDisplayName;
                //  worklist.actiontDisplayName = response.actionButtonDisplayName;
              //        return worklist;
              //  });
             },

             favouriteLables :function(){

                   favourite={};
               return $http.get("public/data/landing/myFavourites.config.json");
              //  .success(function (response) {

              //     favourite.favouriteDisplayName = response.headerDisplayName;
              //          return favourite;
              //   });
              },

              calendarLabel:function(){
                calendar ={};
              return  $http.get("public/data/landing/myTravelcalendar.config.json");
              // .success(function (response) {
              //     calendar.calendarDisplayName = response.headerDisplayName;
              //     calendar.approved=response.subHeaders.approved;
              //     calendar.past=response.subHeaders.past;
              //     calendar.pending=response.subHeaders.pending;
              //     return calendar;
              //   });
             }

          };
     return subFactories;
  });
=======
      getEdgeMaster: function () {
         return $http.get('public/data/configjsons/edgemaster.json');
      },

      getNodeMaster: function () {
         console.log('I am in getNodeMaster');
         return $http.get('public/data/configjsons/nodemaster.json');
      },

      getPrerequisites: function () {
         return $q.all([subFactories.getNodeMaster(), subFactories.getEdgeMaster()]);
      },

      travelPlanExists: function () {
         if (travelPlanObject == null || travelPlanObject.length == 0) {
            return false;
         }
         else {
            return true;
         }
      }

   }
   return subFactories;
});
>>>>>>> e0a029d6c0ba5a129cadc1c29e83486c3465e380
