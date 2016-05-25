angular.module('app')
    .component('childrenRenderer', {
       templateUrl: './public/components-rebuild/children-renderer/children-renderer.html',
       controller: childrenRendererController,
       controllerAs: "childrenRenderer",
       bindings: {
         chidrenFieldsData: "<",
         childrenFieldsMetaData: "<",
         selectedChildren: "<"
       }
    });
function childrenRendererController() {

}
