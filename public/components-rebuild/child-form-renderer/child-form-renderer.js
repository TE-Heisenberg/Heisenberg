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
        console.log(childFormRenderer);
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
