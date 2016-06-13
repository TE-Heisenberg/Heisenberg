/**
 * Created by user on 12-05-2016.
 */

angular.module('app')
    .component('childServicesComponent',{
        templateUrl:'public/components/itineraryComponents/childServicesComponent/childServicesComponent.html',
        controllerAs:'childServicesComponent',
        bindings:{
            value:'<',
            getModePref:'&',
            getSeatPref:'&',
            getDisplayKeys :'&'
        },
        controller: childServicesController
    });

function childServicesController($scope){
      var childServicesComponent=this;
    //  childServicesComponent.getModePref(type);
      console.log("Inside child services component"+this);
      console.log(this,$scope);

      this.modePref = function(type) {
        console.log('type value: '+type);
        return this.getModePref({type:type});
      };

      this.seatPref=function(value){
         return this.getSeatPref({value:value});
      };

      this.displayKeys=function(parentKey){
        console.log("parent key is "+parentKey);
         return this.getDisplayKeys({parentKey:parentKey});
      };
}
