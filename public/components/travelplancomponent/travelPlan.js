/**
 * Created by lenovo on 09-05-2016.
 */

var app = angular.module("app").component("travelPlan", {

    templateUrl: "public/components/travelplancomponent/travelPlanDiv.html",
    controllerAs: "plan",
    controller: ["$http", travelPlanController]

}).filter('keylength', function () {
    return function (input) {
        if (!angular.isObject(input)) {
            throw Error("Usage of non-objects with keylength filter!!")
        }
        return Object.keys(input).length;
    }
});

function travelPlanController($http) {

    var plan = this;
    plan.travelPlanJSON = {};
    plan.newNode = {};
    plan.newEdge = {};
    plan.$onInit = function () {
        fetchJSON($http, "travelplan").then(function (json) {
            plan.travelPlanJSON = json;
        });

    }

    plan.addNode = function (nodeIndex) {

        var nodeIdNumber = nodeIndex + 2;
        var edgeIdNumber = nodeIndex + 1;

        var nodeId = "node" + nodeIdNumber;
        var edgeId = "edge" + edgeIdNumber;

      console.log(nodeId);
      console.log(edgeId);

      fetchJSON($http, "newNode").then(function (json) {
          plan.newNode = json;
          console.log(plan.newNode);
      });
      fetchJSON($http, "newEdge").then(function (json) {
          plan.newEdge = json;
            console.log(plan.newEdge);
      });
        plan.travelPlanJSON.nodes[nodeId] = plan.newNode;
      plan.travelPlanJSON.edges[edgeId] = plan.newEdge;
        console.log(plan.travelPlanJSON);

    }

    plan.subNode = function (nodeIndex) {

        var deleteNodeIDnumber = nodeIndex + 1;
        var deleteEdgeIDnumber = nodeIndex;

        var nodeId = "node" + deleteNodeIDnumber;
        var edgeId = "edge" + deleteEdgeIDnumber;

        delete plan.travelPlanJSON.nodes[nodeId];
        delete plan.travelPlanJSON.edges[edgeId];

    };

    plan.node_md_action_show = function (x) {

        if (x.show == false) {
            x.show = true;
        } else {
            x.show = false;
        }

    }
    plan.closeThis= function(x){
           console.log("closing");
           x.show = false;
         }

      plan.Flight_buttion_Action = function (x) {
          if (x.flightShow == false) {
              x.flightShow = true;
          } else {
              x.flightShow = false;
          }
      }

      plan.change_travel_mode = function (count, index, icon) {
              console.log(count);
          index.edgeMode1.request.mode = icon;

      }

}


function fetchJSON($http, JSONname) {

    return $http.get("public/data/" + JSONname + ".json").then(function (response) {
        return response.data;

    })

}
