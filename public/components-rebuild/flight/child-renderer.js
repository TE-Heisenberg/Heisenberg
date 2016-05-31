var app = angular.module("app").component("flightRenderer", {
    templateUrl: "./public/components-rebuild/flight/child-renderer.html",
    controllerAs: "flightRenderer",
    controller: flightRendererCtrl,
    bindings: {
      "arrayOfChildFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@"
    }
});

function flightRendererCtrl()
{

  var flightRenderer = this;
  console.log("Inside flightRenderer");
  console.log(flightRenderer);

}
