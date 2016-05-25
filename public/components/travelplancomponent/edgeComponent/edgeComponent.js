/**
 * Created by lenovo on 23-05-2016.
 */
var app = angular.module("app").component("edgeComponent", {

    templateUrl: "public/components/travelplancomponent/edgeComponent/edgeComponent.html",
    controllerAs: "edge",
    controller: edgeController,
    bindings: {
        'edgeid': '<',
        'travelobject': '<',
        'currentNode': '&'
    }
});

function edgeController() {

    var edge = this;

    edge.currentNodeChild = function (nodeid, type) {
        edge.currentNode({'id': nodeid, 'type': type});
    }


}
