angular.module('app')
    .component('childrenRenderer', {
       templateUrl: './public/components-rebuild/child-form-renderer/child-form-renderer.html',
       controller: childrenRendererController,
       controllerAs: "childrenRenderer",
       bindings: {
           fieldsData: '<',
           fieldsMetaData: '<',
           onAdd: '&',
           onDelete: '&',
           index: '@'
       }
    });
