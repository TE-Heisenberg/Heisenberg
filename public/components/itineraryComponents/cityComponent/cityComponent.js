/**
 * Created by user on 12-05-2016.
 */

angular.module('app')
    .component('cityComponent',{
        templateUrl:'public/components/itineraryComponents/cityComponent/cityComponent.html',
        controllerAs:'cityComponentCtrl',
        bindings:{
            value:'<',
            getDisplayKeys:'&'
        },
        controller: cityController
    });

function cityController(){
    var cityComponentCtrl=this;
    cityComponentCtrl.data='hello';
    cityComponentCtrl.displayKeyObject=cityComponentCtrl.getDisplayKeys({parentKey:'location'});
    console.log("city component...................");
    console.log(cityComponentCtrl.displayKeyObject);
}
