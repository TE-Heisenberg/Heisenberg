/**
 * Created by lenovo on 09-05-2016.
 */
 angular.module("app").component("travelPlan", {

    templateUrl: "public/components/travelplancomponent/travelPlanDiv.html",
    controllerAs: "plan",
    controller: travelPlanController,
    bindings: {
        'addnode': '&',
        'subnode': '&',
        'updatenode': '&',
        'currentnode': '&',
        'traveljson': '<'
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
    plan.travelPlanJSON = {};
    plan.newNode = {};
    plan.newEdge = {};
    //console.log(FetchService);
  

    plan.currentNode = function (id, type) {

    };
    plan.addNode = function () {

    };
    plan.subNode = function () {

    }

}
