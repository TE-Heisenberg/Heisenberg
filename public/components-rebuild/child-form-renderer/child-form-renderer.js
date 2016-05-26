angular.module('app')
    .component('childFormRenderer', {
       templateUrl: './public/components-rebuild/child-form-renderer/child-form-renderer.html',
       controller: childFormRendererController,
       controllerAs: "childFormRenderer",
       bindings: {
           fieldsData: '<',
           fieldsMetaData: '<',
           onAdd: '&',
           onDelete: '&',
           index: '@'
       }
    });

    function childFormRendererController() {
        var childFormRenderer = this;
        console.log("Inside child form renderer");
        console.log(childFormRenderer);
        var numberOfFields = Object.keys(childFormRenderer.fieldsMetaData).length;
        switch (numberOfFields) {
          case 1:
            childFormRenderer.flex = 60;
            childFormRenderer.flexOffset = 20;
            break;
          case 2:
            childFormRenderer.flex = 40;
            childFormRenderer.flexOffset = 20;
            break;
          case 3:
            childFormRenderer.flex = 30;
            childFormRenderer.flexOffset = 5;
          default:
            childFormRenderer.flex = 20;
            childFormRenderer.flexOffset = 5;

        }
        childFormRenderer.flex
        // Reflecting the value changed in the custom input box
        childFormRenderer.onReflect = function(keyString,value,id) {
            console.log("Inside on reflect of childCardRenderer");
            console.log(value);
            childFormRenderer.fieldsData[id] = value;
        };

        //Triggering the parent to add a new child-form-renderer
        childFormRenderer.add = function() {
            childFormRenderer.onAdd();
        };

        // Triggering the parent to delete the current component, passing the index
        childFormRenderer.delete = function() {
            childFormRenderer.onDelete({'index': childFormRenderer.index});
        };
    };
