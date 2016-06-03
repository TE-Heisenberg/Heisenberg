var app = angular.module("app").component("stayRenderer", {
    templateUrl: "./public/components-rebuild/stay/child-renderer.html",
    controllerAs: "stayRenderer",
    controller: stayRendererCtrl,
    bindings: {
      "arrayOfChildFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@"
    }
});

function stayRendererCtrl()
{
}
