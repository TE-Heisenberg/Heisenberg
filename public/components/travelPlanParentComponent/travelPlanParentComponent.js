angular.module('app')
  .component('travelPlanParentComponent',{
    templateUrl: "public/components/travelPlanParentComponent/travelPlanParentComponent.html",
    controller: travelPlanParentCtrl,
    controllerAs: "travelPlanParentCtrl"
  });


function travelPlanParentCtrl () {
  var travelPlanParentCtrl = this;
  travelPlanParentCtrl.travelPlan={
    "travelType": "oneWay",
    "state": "initial",

    "sequenceOfNodes": [{"type": "node", "id": "node1"}, {"type": "edge", "id": "edge1"}, {"type":"node", "id":"node2"}],
    "edges": {

      "edge2": {
        "status": "initial",
        "travelStartDate": "29th May' 2016",
        "mode":"flight",
        "childServices": {
        }
      },
      "edge1": {
        "status": "intial",
        "travelStartDate": "29th May' 2016",
        "mode":"flight",
        "childServices": {

        }
      }
    },
    "nodes": {
      "node1": {
        "cityName": "bangalore",
        "status": "initial",
        "childServices": {
          "node1T2": {
            "type": "localTravel",
            "status": "picking",
            "requestedData": {
              "source": "Rajiv Chowk",
              "destination": "New Delhi IGI Airport",
              "type": "cab",
              "pickupDate": "4/30/2016",
              "pickupTime": "10:00 AM"
            },
            "selectedData": {
              "source": "Rajiv Chowk",
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
              },
              "localBus": {
                "image": "",
                "companyName": "",
                "busNumber": "",
                "busType": "",
                "seatsType": "",
                "price": "100 INR"
              }
            }
          },
          "node1S2": {
            "type": "stay",
            "status": "request",
            "requestedData": {
              "area": "Hari Nagar",
              "rating": "3",
              "roomType": "Executive",
              "checkinDate": "6/30/2016",
              "checkoutDate": "7/01/2016"
            },
            "selectedData": {
              "image": "public/assets/images/hotel3.png",
              "name": "JW Mariott",
              "rating": "5",
              "location": "hotel's exact address",
              "roomType": "Deluxe",
              "checkinDate": "6/30/2016",
              "checkinTime": "2:00 PM",
              "checkoutDate": "7/01/2016",
              "checkoutTime": "3:00 PM",
              "price": "10000 INR",
              "comments": "Some useful comment which you may want to convey to the hotel"
            }
          }
        }
      },
      "node2": {
        "cityName": "New Delhi",
        "status": "initial",
        "childServices": {
          "node2S1": {
            "type": "stay",
            "status": "booking",
            "requestedData": {
              "area": "Chanakya Puri",
              "rating": "3",
              "roomType": "Executive",
              "checkinDate": "4/30/2016",
              "checkoutDate": "5/01/2016"
            },
            "selectedData": {
              "image": "public/assets/images/hotel2.png",
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
        }
      }
    }
  };
  //PG: 19th May- It is checked before hand if the Travel Plan exists or not
  travelPlanParentCtrl.$onInit = function () {

      //travelPlanParentCtrl.travelPlanExists = dataUpdateHelper.travelPlanExists();

  };


  if(travelPlanParentCtrl.travelPlanExists)
  {
    //PG: 19th May- Getting all the fields data needed to render the forms
    // var elementFields = {
    //   "node": dataUpdateHelper.getNodes(),
    //   "edge": dataUpdateHelper.getEdges()
    // }

  };

  //PG: 19th May- This function will be called when there will be a change in the travel-plan state.
  travelPlanParentCtrl.updateCurrentState = function(elementId,elementType, childState) {
    travelPlanParentCtrl.state = "travelPlanForm";
    travelPlanParentCtrl.currentElement = elementType;
    travelPlanParentCtrl.currentElementId = elementId;
    if(childState != undefined) {
      travelPlanParentCtrl.childState = childState;
      travelPlanParentCtrl.state = "child";
    }

    travelPlanParentCtrl.currentFormData = dataUpdateHelper.getElementData(travelPlanParentCtrl.currentElement,travelPlanParentCtrl.currentElementId);

    travelPlanParentCtrl.currentFormFieldsData =  elementFields[travelPlanParentCtrl.currentElement];

  };


  travelPlanParentCtrl.essentialFieldsUpdate = function(fieldId, essentialFieldsValues ) {
   // dataUpdateHelper.essentialFieldsUpdate(travelPlanParentCtrl.currentElement, travelPlanParentCtrl.currentElementId, fieldId, essentialFieldsValues);
 };
  travelPlanParentCtrl.childServicesFormUpdate = function(childServicesFormValues, childServiceId, fieldId) {
    //dataUpdateHelper.childServicesFormUpdate(travelPlanParentCtrl.currentElement, travelPlanParentCtrl.currentElementId, childServiceId, fieldId, childServicesFormValues);
  };


}
