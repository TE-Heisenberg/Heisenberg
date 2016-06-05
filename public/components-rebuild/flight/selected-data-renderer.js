var app = angular.module("app").component("flightSelectedDataRenderer", {
    templateUrl: "./public/components-rebuild/flight/flight-selected-data-renderer.html",
    controllerAs: "flightSelectedDataRenderer",
    controller: flightSelectedDataRendererCtrl,
    bindings: {
      "selectedMetaData": "<"
    }
});

function flightSelectedDataRendererCtrl()
{
  var flightSelectedDataRenderer=this;

  flightSelectedDataRenderer.serviceLogo=flightSelectedDataRenderer.selectedMetaData.image;
  flightSelectedDataRenderer.serviceDetails=
  {
    "heading":flightSelectedDataRenderer.selectedMetaData.companyName,
    "description":
    {
      "flightID": flightSelectedDataRenderer.selectedMetaData.flightID,
      "seatNumber": flightSelectedDataRenderer.selectedMetaData.seatNumber
    }
  }

  flightSelectedDataRenderer.beginDateTime=
  {
    "startTime": flightSelectedDataRenderer.selectedMetaData.travelStartTime,
    "startDate": flightSelectedDataRenderer.selectedMetaData.travelStartDate,
    "description":""

  }
  flightSelectedDataRenderer.endDateTime=
 {
   "endTime":flightSelectedDataRenderer.selectedMetaData.checkoutTime,
   "endDate":flightSelectedDataRenderer.selectedMetaData.checkoutDate,
    "description":"",
 }

 flightSelectedDataRenderer.price=
{
  "price": flightSelectedDataRenderer.selectedMetaData.price
}

}
