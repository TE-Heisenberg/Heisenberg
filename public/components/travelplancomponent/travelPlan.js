/**
* Created by lenovo on 09-05-2016.
*/
angular.module("app").component("travelPlan", {

  templateUrl: "public/components/travelplancomponent/travelPlanDiv.html",
  controllerAs: "plan",
  controller: travelPlanController,
  bindings: {
    travelplanobject:'<',
    currentnodeedgebooking:'&',
    nodetype:'@',
    edgetype:'@'
  }
}).filter('keylength', function () {
  return function (input) {
    if (!angular.isObject(input)) {
      throw Error("Usage of non-objects with keylength filter!!")
    }
    return Object.keys(input).length;
  }
});

function travelPlanController() {

  var plan = this;

  plan.currentnodeedgetravel = function (value) {
    console.log("in travel plan")
    console.log(value);
    var currentObjectDetails = {
      "currentObject": plan.travelplanobject[value.index],
      "selectedChildren": value.type
    }
    plan.currentnodeedgebooking({value2:currentObjectDetails});
  };
  plan.addNode = function () {
    plan.newNode = {
      type:"location",
      cityName:" "
    };
    plan.newEdge = {
      type:"transit",
      childServices:
      {
        booking:{
          requested:{mode:""}
        }
      }
    };
    plan.travelplanobject.push(plan.newEdge);
    plan.travelplanobject.push(plan.newNode);
  }
  plan.subNode = function () {
    plan.travelplanobject.splice(plan.travelplanobject.length-1,1);
    plan.travelplanobject.splice(plan.travelplanobject.length-1,1);

  }

}
