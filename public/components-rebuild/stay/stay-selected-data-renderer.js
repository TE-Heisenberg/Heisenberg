var app = angular.module("app").component("staySelectedDataRenderer", {
    templateUrl: "./public/components-rebuild/stay/stay-selected-data-renderer.html",
    controllerAs: "staySelectedDataRenderer",
    controller: staySelectedDataRendererCtrl,
    bindings: {
      "selectedMetaData": "<",
      "deleteSelectedStayChild":"&",
      "editSelectedStayChild":"&",
      "index":"@"
    }
});

function staySelectedDataRendererCtrl()
{
  var staySelectedDataRenderer=this;
  console.log('I am isnide staySelectedDataRenderer');
  console.log(this);
staySelectedDataRenderer.deleteStayChild=function()
{
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log("inside deleteStayChild");
  console.log(staySelectedDataRenderer.index);
  staySelectedDataRenderer.deleteSelectedStayChild({index:staySelectedDataRenderer.index})
}
staySelectedDataRenderer.editStayChild=function()
{
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log("inside edit StayChild");
  console.log(staySelectedDataRenderer.index);
  staySelectedDataRenderer.editSelectedStayChild({index:staySelectedDataRenderer.index})
}
  staySelectedDataRenderer.serviceLogo=staySelectedDataRenderer.selectedMetaData.image;
  staySelectedDataRenderer.serviceDetails=
  {
    "heading":staySelectedDataRenderer.selectedMetaData.name,
    "description":
    {
      "roomType": staySelectedDataRenderer.selectedMetaData.roomType,
      "location": staySelectedDataRenderer.selectedMetaData.location
    }
  }

  staySelectedDataRenderer.beginDateTime=
  {
    "startTime": staySelectedDataRenderer.selectedMetaData.checkinDate,
    "startDate": staySelectedDataRenderer.selectedMetaData.checkinTime,
    "description":""

  }
  staySelectedDataRenderer.endDateTime=
 {
   "endTime":staySelectedDataRenderer.selectedMetaData.checkoutTime,
   "endDate":staySelectedDataRenderer.selectedMetaData.checkoutDate,
    "description":"",
 }

 staySelectedDataRenderer.price=
{
  "price": staySelectedDataRenderer.selectedMetaData.price
}

}
