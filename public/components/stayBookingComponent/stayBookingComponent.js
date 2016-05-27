var app = angular.module("app").component("stayBookingComponent", {
    templateUrl: "public/components/stayBookingComponent/stayBookingComponent.html",
    controllerAs: "stayBookingCtrl",
    controller: ["$http", stayBookingController]
});


function stayBookingController($http)
{


  var stayBookingCtrl = this;

  stayBookingCtrl.cardHeading = "Stay/Accomodation";

  stayBookingCtrl.fieldsData = {
      "stay":[{
      "area": "Hari Nagar",
      "preferences": "ac",
      "checkinDate": "6/30/2016",
      "checkoutDate": "7/01/2016"
    }, {
      "area": "Hari Nagar",
      "preferences": "ac",
      "checkinDate": "6/30/2 016",
      "checkoutDate": "7/01/2016"
    }],
    "localTravel":[{
    "area": "Hari Nagar",
    "preferences": "ac",
    "checkinDate": "6/30/2016",
    "checkoutDate": "7/01/2016"
    },
     {
      "area": "Hari Nagar",
      "preferences": "ac",
      "checkinDate": "6/30/2016",
      "checkoutDate": "7/01/2016"
    }]
  };

  stayBookingCtrl.fieldsMetaData = {
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
  };
  // stayBookingCtrl.selectedChildren = {
  //   "stay":"Stay",
  //   "localTravel":"Local Travel"
  // }

  console.log(stayBookingCtrl);

  stayBookingCtrl.onAdd = function() {
    console.log("Adding something");
  };

  stayBookingCtrl.onDelete = function(index) {
    console.log("Deleting index",index);
  };

  stayBookingCtrl.metaDataEssentialFieldsData = {
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
        "type": "multiSelect",
        "specificAttr":{
          "domainList": ["stay","localTravel"]
          // "domainList":[{"serviceId":"stay", "serviceDisplayName": "Stay"},{"serviceId":"localTravel", "serviceDisplayName": "Local Travel"}],
          // "listLabelKey": "serviceId",
          // "listLabelValue": "serviceDisplayName"
        },

      }
    }
  };
  stayBookingCtrl.essentialFieldsData = {
    "location": "Banaras"

  };


  stayBookingCtrl.tempEssentialFieldsData = {
    "location": "Banaras",
    "basicServices": [{"serviceId":"stay", "serviceDisplayName": "Stay"},{"serviceId":"localTravel", "serviceDisplayName": "Local Travel"}]
  };

  stayBookingCtrl.essentialFieldsData = {
    "location": "Banaras"
  };

  // stayBookingCtrl.selectedChildren = ["stay", "localTravel"];
  stayBookingCtrl.childrenLabels = {
    "stay": "Stay",
    "localTravel": "Local Travel"
  };


  stayBookingCtrl.reflectSelectedChildren = function(arrayOfSelectedServices) {

    console.log("&&&&&&&&&&&&&&&&&&&&&");
    console.log(arrayOfSelectedServices);
    stayBookingCtrl.selectedChildren = arrayOfSelectedServices;

    // stayBookingCtrl.selectedChildrenFromEssentialFields = arrayUnique(stayBookingCtrl.selectedChildrenFromEssentialFields.concat(arrayOfSelectedServices));
    console.log(stayBookingCtrl.selectedChildren);

  }
  // stayBookingCtrl.tempChildrenFieldsData = ;
  // stayBookingCtrl.tempChildrenFieldsMetaData = ;
  // stayBookingCtrl.tempSelectedChildren = ;
  //
  //
  // chidren-fields-data="stayBookingCtrl.fieldsData" children-fields-meta-data="stayBookingCtrl.fieldsMetaData" selected-children="stayBookingCtrl.selectedChildren"



}//eof
