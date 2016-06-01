angular.module('app')
    .component('travelBooking', {
       templateUrl: './public/components-rebuild/travel-booking/travel-booking.html',
       controller: travelBookingCtrl,
       controllerAs: "travelBooking",
       bindings: {
         "currentSelectedObj": "<",
         "metaDataOfObj": "<",
         "currentSelectedChildren": "<"
       }
});

function travelBookingCtrl() {
  var travelBooking = this;
  console.log("Inside travelBookingCtrl################");
  console.log(travelBooking);

  travelBooking.arrayUnique = function(array) {
      var a = array.concat();
      for(var i=0; i<a.length; ++i) {
          for(var j=i+1; j<a.length; ++j) {
              if(a[i] === a[j])
                  a.splice(j--, 1);
          }
      }

      return a;
  }



  //Essential Fiellds
  travelBooking.metaDataOfEssentialFields = travelBooking.metaDataOfObj.essential;
  travelBooking.essentialFieldsData = travelBooking.currentSelectedObj.essential;
  // travelBooking.arrayOfSelectedChildren = [];
  travelBooking.reflectSelectedChildren = function(arrayOfSelectedChildren) {
    travelBooking.currentSelectedChildren = arrayOfSelectedChildren;

  }

  travelBooking.childrenLabels = {};
  for(var mode in travelBooking.metaDataOfEssentialFields.modesToSelectTheServices)
  {
    var modeData = travelBooking.metaDataOfEssentialFields.modesToSelectTheServices[mode];
    Object.assign(travelBooking.childrenLabels,modeData.specificAttr.domainList)

  };

  travelBooking.metaDataOfChildren = travelBooking.metaDataOfObj.services;

  travelBooking.childrenData = travelBooking.currentSelectedObj.childServices;


}
