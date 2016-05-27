var app = angular.module("app").component("essentialFieldsRenderer", {
    templateUrl: "./public/components-rebuild/essentialFieldsRenderer/child-renderer.html",
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
