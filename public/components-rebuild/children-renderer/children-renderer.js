angular.module('app')
    .component('childrenRenderer', {
       templateUrl: './public/components-rebuild/children-renderer/children-renderer.html',
       controller: childrenRendererController,
       controllerAs: "childrenRenderer",
       bindings: {
         childrenFieldsData: "<",
         childrenFieldsMetaData: "<",
         selectedChildren: "<",
         childrenLabels: "<"
       }
    });
function childrenRendererController() {
  var childrenRenderer = this;
  console.log("&*&*&*&* I am inside childrenRendererController");
  childrenRenderer.selectedChildren.forEach(function(childId)
   {
    if(childrenRenderer.childrenFieldsData[childId] === undefined){
      childrenRenderer.childrenFieldsData[childId] = {};
    }
  });


}
