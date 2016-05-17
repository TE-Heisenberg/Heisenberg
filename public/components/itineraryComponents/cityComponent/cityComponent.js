/**
 * Created by user on 12-05-2016.
 */

angular.module('myApp')
    .component('cityComponent',{
        templateUrl:'public/components/itineraryComponents/cityComponent/cityComponent.html',
        controllerAs:'model',
        bindings:{
            value:'<'
        },
        controller: cityController
    });

function cityController(){
    var model=this;
    model.data='hello';
}
