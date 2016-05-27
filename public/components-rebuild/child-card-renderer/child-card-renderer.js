var app = angular.module("app").component("childCardRenderer", {
    templateUrl: "./public/components-rebuild/child-card-renderer/child-card-renderer.html",
    controllerAs: "childCardRenderer",
    controller: childCardRendererCtrl,
    bindings: {
      "arrayOfChildFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@"
    }
});

function childCardRendererCtrl()
{

  var childCardRenderer = this;
  console.log("Inside childCardRenderer");
  console.log(childCardRenderer);

  childCardRenderer.onAdd = function() {
    console.log("Adding something");
  };

  childCardRenderer.onDelete = function(index) {
    console.log("Deleting index",index);
  };
}
