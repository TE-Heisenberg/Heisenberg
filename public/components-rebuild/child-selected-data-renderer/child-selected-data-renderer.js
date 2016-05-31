/**
 * Created by user on 12-05-2016.
 */

angular.module('app')
    .component('childSelectedDataRendererComponent',{
        templateUrl:'./public/components-rebuild/child-selected-data-renderer/childSelectedDataRendererComponent/childSelectedDataRendererComponent.html',
        controllerAs:'childSelectedDataRendererComponent',
        bindings:{
            value:'<',
            getModePref:'&',
            getSeatPref:'&'
        },
        controller: childSelectedDataRendererController
    });

function childSelectedDataRendererController($scope){
      var childSelectedDataRendererComponent=this;
    //  childSelectedDataRendererComponent.getModePref(type);
      console.log("Inside child services component"+this);
      console.log(this,$scope);

      this.modePref = function(type) {
        console.log('type value: '+type);
        return this.getModePref({type:type});
      };

      this.seatPref=function(value){
         return this.getSeatPref({value:value});
      }
}
