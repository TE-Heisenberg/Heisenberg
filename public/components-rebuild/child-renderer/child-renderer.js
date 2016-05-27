var app = angular.module("app").component("childRender", {
    templateUrl: "./public/components-rebuild/child-renderer/child-renderer.html",
    controllerAs: "childRender",
    controller: childRenderCtrl,
    bindings: {
      "arrayOfChildFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@"
    }
});

function childRenderCtrl()
{



  var childRender = this;
  console.log("Inside childRender");
  console.log(childRender);


  childRender.fieldsData = {
    "area": "Hari Nagar",
    "preferences": "ac",
    "checkinDate": "6/30/2016",
    "checkoutDate": "7/01/2016"
  };

  childRender.fieldsMetaData = {
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

  console.log(childRender);

  childRender.onAdd = function() {
    console.log("Adding something");
  };

  childRender.onDelete = function(index) {
    console.log("Deleting index",index);
  };
}
