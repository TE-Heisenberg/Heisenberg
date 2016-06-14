angular.module('app').component("localTravelParentComponent", {
    templateUrl: 'public/components/localSearchResultsParentComponent/localTravelResultsParentComponent.html',
    controllerAs: "localTravelParent",
    controller: localTravelParentController,
    bindings: {
        searchResults: '<'
    }
});

function localTravelParentController($http, $rootScope,mainService) {
    var localTravelParent = this;
    localTravelParent.filter_type = mainService.localTravel_filter_type;
    console.log(localTravelParent.filter_type);
  	localTravelParent.filter_details=mainService.nodeMaster.services.localTravel;
    localTravelParent.currentnodeedge = function (id, type) {
        console.log(id);
        console.log(type);
    };
}
