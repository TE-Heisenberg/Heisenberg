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
    travelBookingParentCtrl.tempSelectedChildren = ["stay", "localTravel"];
  };



}
