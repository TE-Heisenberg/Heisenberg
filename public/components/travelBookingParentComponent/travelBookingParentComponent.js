angular.module('app')
  .component('travelBookingParentComponent',{
    templateUrl: "public/components/travelBookingParentComponent/travelBookingParentComponent.html",
    controller: travelBookingParentCtrl,
    controllerAs: "travelBookingParentCtrl"
  });


function travelBookingParentCtrl () {
  var travelBookingParentCtrl = this;
  travelBookingParentCtrl.travelPlanObject = [
                          { type:"location",
                             cityName:"Bangalore"
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
                             cityName:"Delhi"
                          }
                         ];




                             travelBookingParentCtrl.currentnodeedge = function (id, type) {
                               console.log(id);
                               console.log(type);

                             };
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
