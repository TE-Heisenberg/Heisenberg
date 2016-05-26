/**
 * Created by lenovo on 23-05-2016.
 */
var app = angular.module("app").component("edgeComponent", {

    templateUrl: "public/components/travelplancomponent/edgeComponent/edgeComponent.html",
    controllerAs: "edge",
    controller: edgeController,
    bindings: {
        'travelelement': '<',
        'currentedge':'<',
        'currentnodeedgetravel':'&'
    }
});

function edgeController() {

    var edge = this;

    edge.selectededge = function (indexid,type) {
        edge.currentnodeedgetravel({'index': indexid, 'type': type});
    }

}
