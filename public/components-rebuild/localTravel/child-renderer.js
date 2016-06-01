var app = angular.module("app").component("localTravelRenderer", {
    templateUrl: "./public/components-rebuild/localTravel/child-renderer.html",
    controllerAs: "localTravelRenderer",
    controller: localTravelRendererCtrl,
    bindings: {
      "arrayOfChildFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@"
    }
});

function localTravelRendererCtrl()
{

  var localTravelRenderer = this;
  console.log("Inside localTravelRenderer");
  console.log(localTravelRenderer);

}
