angular.module("app").component("childIconRouterComponent", {

  templateUrl: "public/components/travelplancomponent/nodeComponent/child-icon-router-component/child-icon-router-component.html",
  controllerAs: "childIconRouterComponent",
  controller: childIconRouterComponent,
  bindings: {
    childId:"<",
    childDetails:"<",
    reflectChildSelect: "&"
  }
});

function childIconRouterComponent() {

  var childIconRouterComponent = this;

  

}
