var app = angular.module("app").component("flightRenderer", {
    templateUrl: "./public/components-rebuild/flight/child-renderer.html",
    controllerAs: "flightRenderer",
    controller: flightRendererCtrl,
    bindings: {
      "childFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@"
    }
});

function flightRendererCtrl()
{

  var flightRenderer = this;
  console.log("Inside flightRenderer");
  console.log(flightRenderer);


  flightRenderer.$onInit =  function() {


    if (flightRenderer.childFieldsData.length == 0) {
      flightRenderer.childFieldsData = {};
    }
  }
}
