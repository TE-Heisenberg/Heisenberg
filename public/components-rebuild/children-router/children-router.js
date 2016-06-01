angular.module('app')
    .component('childrenRouter', {
       templateUrl: './public/components-rebuild/children-router/children-router.html',
       controller: childrenRouterController,
       controllerAs: "childrenRouter",
       bindings: {
         arrayOfChildFieldsData: "<",
         metaDataOfChildFields: "<",
         cardHeading: "@",
         childId: "@"
       }
    });
function childrenRouterController() {
  var childrenRouter = this;
  console.log("Inside childrenRouterController");
  console.log(childrenRouter);

}
