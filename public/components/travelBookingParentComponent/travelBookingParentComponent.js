angular.module('app')
.component('travelBookingParentComponent',{
  templateUrl: "public/components/travelBookingParentComponent/travelBookingParentComponent.html",
  controller: travelBookingParentCtrl,
  controllerAs: "travelBookingParentCtrl"
});


function travelBookingParentCtrl () {
  var travelBookingParentCtrl = this;

  travelBookingParentCtrl.currentnodeedgebooking = function (value2) {
    if(value2.type=='location'){
      travelBookingParentCtrl.currentObject=travelBookingParentCtrl.travelPlanObject[value2.index];
    }else if(value2.type=='stay'){
      travelBookingParentCtrl.currentObject=travelBookingParentCtrl.travelPlanObject[value2.index].childServices.stay;
    }else if(value2.type=='localtravel'){
      travelBookingParentCtrl.currentObject=travelBookingParentCtrl.travelPlanObject[value2.index].childServices.localTravel;
    }else if(value2.type=='transit'){
      travelBookingParentCtrl.currentObject=travelBookingParentCtrl.travelPlanObject[value2.index];
    }
    console.log(travelBookingParentCtrl.currentObject);

  };


  travelBookingParentCtrl.travelPlanObject = [
    { type:"location",
    cityName:"Bangalore",
    childServices:{
      stay:[],
      localTravel:[]
    }
  },
  {
    type:"transit",
    childServices:
    {
      booking:{
        requested:{mode:"flight"}
      }
    }
  },
  {
    type:"location",
    cityName:"Delhi",
    childServices:{
      stay:[],
      localTravel:[]
    }
  }
];





//PG: 19th May- It is checked before hand if the Travel Plan exists or not
travelBookingParentCtrl.$onInit = function () {

  //travelBookingParentCtrl.travelPlanExists = dataUpdateHelper.travelPlanExists();

};


if(travelBookingParentCtrl.travelPlanExists)
{
  //PG: 19th May- Getting all the fields data needed to render the forms
  // var elementFields = {
  //   "node": dataUpdateHelper.getNodes(),
  //   "edge": dataUpdateHelper.getEdges()
  // }

};

//PG: 19th May- This function will be called when there will be a change in the travel-plan state.
travelBookingParentCtrl.updateCurrentState = function(elementId,elementType, childState) {
  travelBookingParentCtrl.state = "travelPlanForm";
  travelBookingParentCtrl.currentElement = elementType;
  travelBookingParentCtrl.currentElementId = elementId;
  if(childState != undefined) {
    travelBookingParentCtrl.childState = childState;
    travelBookingParentCtrl.state = "child";
  }

  travelBookingParentCtrl.currentFormData = dataUpdateHelper.getElementData(travelBookingParentCtrl.currentElement,travelBookingParentCtrl.currentElementId);

  travelBookingParentCtrl.currentFormFieldsData =  elementFields[travelBookingParentCtrl.currentElement];

};


travelBookingParentCtrl.essentialFieldsUpdate = function(fieldId, essentialFieldsValues ) {
  // dataUpdateHelper.essentialFieldsUpdate(travelBookingParentCtrl.currentElement, travelBookingParentCtrl.currentElementId, fieldId, essentialFieldsValues);
};
travelBookingParentCtrl.childServicesFormUpdate = function(childServicesFormValues, childServiceId, fieldId) {
  //dataUpdateHelper.childServicesFormUpdate(travelBookingParentCtrl.currentElement, travelBookingParentCtrl.currentElementId, childServiceId, fieldId, childServicesFormValues);
};


}
