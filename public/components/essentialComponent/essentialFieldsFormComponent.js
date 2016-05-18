angular.module('app')
.component("essentialFieldsFormComponent",{
templateUrl:"public/components/essentialFieldsFormComponent/essentialFieldsFormComponent.html",
controllerAs:"essentialFieldsFormComponentCtrl",
controller:["$rootScope","$http",essentialFieldsFormComponentCtrl],
