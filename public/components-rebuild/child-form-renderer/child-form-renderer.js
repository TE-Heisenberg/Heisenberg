angular.module('app')
    .component('childFormRenderer', {
       templateUrl: './public/components-rebuild/child-form-renderer/child-form-renderer.html',
       controller: childFormRendererController,
       controllerAs: "childFormRenderer",
       bindings: {
           fieldsData: '<',
           fieldsMetaData: '<'
       }
    });

function childFormRendererController() {
    var childFormRenderer = this;
    console.log("Inside child form renderer");
    console.log(childFormRenderer);
    var numberOfFields = Object.keys(childFormRenderer.fieldsMetaData).length;
    childFormRenderer.zero = 0;
    switch (numberOfFields) {
      case 1:
        childFormRenderer.flex = 60;
        childFormRenderer.flexOffset = 20;
        console.log("Case 1");
        break;
      case 2:
        childFormRenderer.flex = 40;
        childFormRenderer.flexOffset = 20;
        console.log("Case 2");
        break;
      case 3:
        childFormRenderer.flex = 30;
        childFormRenderer.flexOffset = 5;
        console.log("Case 3");
        break;
      default:
        childFormRenderer.flex = 20;
        childFormRenderer.flexOffset = 5;
        console.log("Case default");

    }
    // Reflecting the value changed in the custom input box
    childFormRenderer.onReflect = function(keyString,value,id) {
        console.log("Inside on reflect of childCardRenderer");
        console.log(value);
        childFormRenderer.fieldsData[id] = value;
    };

};
