var app = angular.module("app").component("childCardRenderer", {
    templateUrl: "./public/components-rebuild/child-card-renderer/child-card-renderer.html",
    controllerAs: "childCardRenderer",
    controller: childCardRendererCtrl,
    bindings: {
      "arrayOfChildFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@"
    }
});

function childCardRendererCtrl()
{



  var childCardRenderer = this;
  console.log("Inside childCardRenderer");
  console.log(childCardRenderer);


  childCardRenderer.fieldsData = {
    "area": "Hari Nagar",
    "preferences": "ac",
    "checkinDate": "6/30/2016",
    "checkoutDate": "7/01/2016"
  };

  childCardRenderer.fieldsMetaData = {
     "area": {
        "mandatory": true,
        "displayName": "Area",
        "id": "area",
        "type": "autoComplete",
        "data": "areaLocationUrl"

      },
      "checkindate":{
        "mandatory": true,
        "displayName": "Check-in Date",
        "id": "checkindate",
        "type": "date"
      },
      "checkoutdate":{
        "mandatory": true,
        "displayName": "Check-out Date",
        "id": "checkoutdate",
        "type": "date"
      }
      ,
      "preferences":{
        "mandatory": false,
        "displayName": "Preferences",
        "id": "preferences",
        "type": "singleSelect",
        "specificAttr":{
          "domainList":["ac","non-ac"]
        }
      }
  };

  console.log(childCardRenderer);

  childCardRenderer.onAdd = function() {
    console.log("Adding something");
  };

  childCardRenderer.onDelete = function(index) {
    console.log("Deleting index",index);
  };
}
