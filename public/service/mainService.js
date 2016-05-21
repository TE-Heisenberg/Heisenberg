angular.module('app').factory('mainService',function($http){

       var travelPlanObject;
       var subFactories = {

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
               return $http.get('public/data/configjsons/edgemaster.json');
             },

             getNodes: function(){
               return $http.get('public/data/configjsons/nodemaster.json');
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

             essentialFieldsUpdate: function(elementType, elementId, essentialFieldKey, essentialFieldValues){
                travelPlanObject[elementType][elementId][essentialFieldKey]=essentialFieldValues;
                console.log(travelPlanObject);
                return 'success';
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
