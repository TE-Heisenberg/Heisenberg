var app = angular.module("app").component("trainRenderer", {
    templateUrl: "./public/components-rebuild/train/child-renderer.html",
    controllerAs: "trainRenderer",
    controller: trainRendererCtrl,
    bindings: {
      "arrayOfChildFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@"
    }
});

function trainRendererCtrl()
{

  var trainRenderer = this;
  console.log("Inside trainRenderer");
  console.log(trainRenderer);

}
