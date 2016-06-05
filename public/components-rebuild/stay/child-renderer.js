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

  var stayRenderer = this;
  // stayRenderer.$onInit = function() {
  //   console.log("I am in stay renderer onit");
  //   console.log(stayRenderer.arrayOfChildFieldsData);
  //   if(stayRenderer.arrayOfChildFieldsData.length == 0) {
  //     console.log("I am inside if of stayRenderer");
  //     stayRenderer.arrayOfChildFieldsData.push({});
  //   }
  //   console.log(stayRenderer.arrayOfChildFieldsData);
  //   console.log("end of oninit stay");
  // }
  console.log("Stay renderer");
  console.log(stayRenderer);
  stayRenderer.onDelete = function(index) {
    stayRenderer.arrayOfChildFieldsData.splice(index,1);
  }

  stayRenderer.onAdd = function(index) {
    stayRenderer.arrayOfChildFieldsData.push({"state":"initial"});
  }


  stayRenderer.onEdit = function(index) {
    stayRenderer.arrayOfChildFieldsData[index].state = "request";
  }
}
