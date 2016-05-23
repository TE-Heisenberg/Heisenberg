angular.module('app').factory('mainService',function($http){

       var travelPlanObject;

          {

             nodeEdgeInitializer:function(nodeOrEdge){
               var numberOfElements = Object.keys(travelPlanObject[nodeOrEdge]).length;
               var id=nodeOrEdge.slice(0, -1)+numberOfElements;
               travelPlanObject[nodeOrEdge][id] = {
                 "status": "initial"
               };
             },

             travelPlanInitializer: function(indexForTravelMode){
               console.log(indexForTravelMode);
               travelPlanObject={
                 nodes:{},
                 edges:{}
               };
               var modeOfTravel = ["oneWay", "twoWay", "multiWay"];
               if(indexForTravelMode>=0){
                 for(var i=0;i<indexForTravelMode+1;i++){
                   subFactories.nodeEdgeInitializer('nodes');
                   subFactories.nodeEdgeInitializer('edges');
                 }
                   subFactories.nodeEdgeInitializer('nodes');
                 return 'success';
               }else{
                 return 'fail';
               }
             },

              getTravelPlanObject: function(){
                   return travelPlanObject;
                },

             getElementData: function(elementType, elementId){
                 return travelPlanObject[elementType][elementId];

             },

             getEdges: function(){
               var edgeMaster = {
                 "essential": {
                   "travelStartDate": {
                     "mandatory": "true",
                     "displayName": "Travel Start Date",
                     "id": "travelStartDate",
                     "type": "date"
                   },
                   "modesToSelectTheServices": {
                     "mode":{
                       "mandatory": true,
                       "displayName": "Select the mode",
                       "id": "mode",
                       "type": "singleSelectAddChild",
                       "data": ["flight","bus","train"]
                     },
                     "extraAddOnsServices": {
                       "mandatory": false,
                       "displayName":"Extra Add-on Services",
                       "id": "extraAddOnsServices",
                       "type": "multi-select",
                       "data": ["visaOnArrival", "forex"]
                     }
                   }
                 },
                 "services": {
                   "flight":{
                       "travelStartDate":{
                           "mandatory": true,
                           "displayName": "Travel Start Date",
                           "id": "travelStartDate",
                           "type": "date",
                           "data-reference": "essential.travelStartDate"
                         },
                         "class":{
                           "mandatory":true,
                           "displayName": "Class",
                           "id": "class",
                           "type": "dropDown",
                           "data": ["Bussiness","Economy"]
                         },
                         "numberOfHops": {
                           "mandatory":true,
                           "displayName": "Number of Hops",
                           "id": "numberOfHops",
                           "type": "slider",
                           "data": {"min": 0, "min": 5 }
                         },
                         "departureTime": {
                           "mandatory": false,
                           "displayName": "Departure Time",
                           "id":"departureTime",
                           "type": "time"
                         },
                         "airlines": {
                           "mandatory": false,
                           "displayName":"Airlines",
                           "id":"airlines",
                           "type":"dropDown",
                           "data": ["Air Asia", "Air Costa", "Jet"]
                         }
                   }
                 }

               };
               return edgeMaster;
              //  return $http.get('public/data/configjsons/edgemaster.json');
             },

             getNodes: function(){
               var nodeMaster = {
                 "essential": {
                   "noDependencyData":{
                     "location": {
                       "mandatory": true,
                       "displayName": "City",
                       "id": "location",
                       "type": "autoComplete",
                       "data": "sampleurl"

                     }
                   },
                   "modesToSelectTheServices": {
                     "basicServices":{
                       "mandatory": false,
                       "displayName": "Select Basic Services",
                       "id": "selectedServices",
                       "type": "multiSelect",
                       "specificAttr":{
                          "domainList":[{"serviceId":"stay", "serviceDisplayName": "Stay"},{"serviceId":"localTravel", "serviceDisplayName": "Local Travel"}]
                        },
                        "listLabelKey": "serviceId",
                        "listLabelValue": "serviceDisplayName"
                     }
                   }
                 },
                 "servicesName":{
                   "stay": "Stay",
                   "localTravel": "Local Travel"
                 },
                 ,
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
                   "localTravel": {
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
               };
               return edgeMaster;
              //  return $http.get('public/data/configjsons/nodemaster.json');
             },

             travelPlanExists :function(){
               if(travelPlanObject==null || travelPlanObject.length==0){
                 return false;
               }
               else{
                 return true;
               }
             },

             childServiesFormUpdate: function(elementType, elementId, service, childServiceId, childServiceKey, childServiceValues){
                for(key in travelPlanObject[elementType][elementId][service][childServiceId]){
                   console.log(key);
                   console.log('inside service for loop');
                   if(key==childServiceKey){
                      console.log('inside service');
                      travelPlanObject[elementType][elementId][service][childServiceId][childServiceKey]=childServiceValues;
                      console.log(travelPlanObject);
                      return 'success';
                   }
                   else{
                     return 'fail';
                   }
                }
             },

             essentialFieldsUpdate: function(elementType, elementId, essentialFieldKey, essentialFieldValues)
               console.log(elementType);
               if(elementType=='nodes'){
                var elementFields;
                switch (elementType) {
                  case "node":
                      elementFields = subFactories.getNodes();
                    break;
                  case: "edge":
                      elementFields = subFactories.getEdges();
                }

                var actionKeys = Object.keys(elementFields.essential.modesToSelectTheServices);
                if(actionKeys.indexOf(elementId) > -1) {
                  //Element needs an action to be taken
                  var listLabelKey = elementFields.essential.modesToSelectTheServices[elementId].listLabelKey;
                  var currentActionFieldValueArray = travelPlanObject[elementType+"s"][elementId][essentialFieldKey];

                  var countOfSameFields = 0;
                  var tempObj = {};
                  for(actionField in currentActionFieldValueArray)

                  {
                    var present = false;
                    for(enteredActionField in essentialFieldValues)
                     {
                      if(actionField[listLabelKey] == enteredActionField[listLabelKey])
                        {
                          present = true;
                          countOfSameFields += 1;
                          tempObj[enteredActionField[listLabelKey]] = true;
                          break;
                        }
                        tempObj[enteredActionField[listLabelKey]] = false;

                    }
                    if(present == false) {
                      subFactories.removeServiceGroupById(elementType, elementId,actionField[listLabelKey]);
                    }
                  }

                  for(key in tempObj) {
                    if(tempObj[key] == false) {
                      subFactories.createServiceGroupById(elementType, elementId, key)
                    }
                  }
                }
                travelPlanObject[elementType][elementId][essentialFieldKey]=essentialFieldValues;


              },//End Of function
              removeServiceGroupById: function(elementType, elementId, serviceId  ) {


              },
              createServiceGroupById: function(elementType, elementId, serviceId) {
                // object.keys(travelPlanObject[elementType+"s"][elementId].childServices);
                travelPlanObject[elementType+"s"][elementId].childServices = {
                  "status": initial;
                  "type":
                }
              },
              deleteChildServiceById: function(elementType, elementId, serviceId) {

              }



            }
     return subFactories;
  });

    /*
        getTravelPlanObject: function(){
        var travelPlanObject=travelPlanData;
        return travelPlanObject;
      };

       travelPlanInitializer = function(indexForTravelMode) {
          var modeOfTravel = ["oneWay", "twoWay", "multiWay"];
          travelPlanData = {
          "travelType": modeOfTravel[indexForTravelMode+1],
          "state": "initial",
          "nodes": {},
          "edges": {}
         };

         var indexForNodesAndEdges = 0;
         while(indexForNodesAndEdges < indexForTravelMode+1) {
           nodeEdgeInitializer("nodes");
           nodeEdgeInitializer("edges");
         }
           nodeEdgeInitializer("nodes");
       }

      nodeEdgeInitializer = function(nodeOrEdge) {
         var numberOfElements = Object.keys(travelPlanData[nodeOrEdge]).length;
         var id = nodeOrEdge.slice(0, -1)+numberOfElements;
         travelPlanData[nodeOrEdge][id] = {
           "status": "initial"
         };

       //  mainComponent.nodeEdgeInitializer[nodeEdgeInitializer]
       }


     insertInformationInTravelPlan = function(keyString, value)
     {
       setObj(travelPlanData, keyString,value);
     }
     insertNodeEdgeInfo = function(nodeOrEdge) {

      }
     childServicesInitializer  = function(nodeOrEdge) {

      }
     insertChildServicesData = function(nodeOrEdge) {

     }*/
