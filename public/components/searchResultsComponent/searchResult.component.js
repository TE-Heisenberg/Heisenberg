angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('hotelSearchResultsParentComponent', {
                template: "<hotel-search-results-parent-component search-results='searchResultComponent.searchResults' selected-data='searchResultComponent.selectedData(value)'></hotel-search-results-parent-component>"
            })
            .state('trainSearchResults', {
                template: "<train-search-results-component selected-data='searchResultComponent.selectedData(value)'></train-search-results-component>"
            })
            .state('flightSearchResults', {
                template: "<flight-search-results-parent-component search-results='searchResultComponent.searchResults' selected-data='searchResultComponent.selectedData(value)'></flight-search-results-parent-component>"
            })
            .state('localTravelSearchResults', {
                template: "<local-travel-parent-component search-results='searchResultComponent.searchResults'></local-travel-parent-component>"
            });
    })
    .component('searchResult', {
        controller: searchResultComponent,
        controllerAs: 'searchResultComponent',
        templateUrl: 'public/components/searchResultsComponent/searchResult.view.html',
        bindings: {
            $router: '<'
        },
        $canActivate: function (mainService, $nextInstruction) {
            var tid = decodeURIComponent($nextInstruction.params.id);
            console.log(tid);
            return mainService.getSearchPrerequisites(tid).then(function (data) {
                mainService.searchdata = data;
                mainService.nodeMaster = data[0].data;
                mainService.edgeMaster = data[1].data;
                mainService.travelPlanObject = data[2];
                mainService.flight_filter_type = data[3].data;
                mainService.hotel_filter_type = data[4].data;
                mainService.localTravel_filter_type = data[5].data;
                // mainService.getHotelFilters().then(function (data) {
                //     mainService.filter_type = data;
                // });
                // mainService.getNodeMaster().then(function (data) {
                //     mainService.filter_details = data;
                // });
                return true;
            });
        }
    });

function searchResultComponent(mainService, $state, _) {
    var searchResultComponent = this;
    var childServices;
    var service;
    // searchResultComponent.flight_filter_details=mainService.searchdata[1].data;
    // searchResultComponent.hotel_filter_details=mainService.searchdata[0].data;
    // searchResultComponent.flight_filter_type=mainService.searchdata[3];
    // searchResultComponent.hotel_filter_type=mainService.searchdata[4];


    //to-do: this travelPlanInitial uses the object which landing page and booking page uses
    // searchResultComponent.travelPlan = mainService.getTravelPlanObjectInitial();
    //to-do: this getTravelPlanObject gives a readymade object having all the services selected
    searchResultComponent.$onInit = function () {
        searchResultComponent.travelPlan = mainService.travelPlanObject.components;
        searchResultComponent.locationchildservices = mainService.nodeMaster.servicesDetails;
        searchResultComponent.transitchildservices = mainService.edgeMaster.servicesDetails;
        searchResultComponent.elementFields = {
            "location": mainService.nodeMaster,
            "transit": mainService.edgeMaster
        }
    };
    searchResultComponent.travelPlan = mainService.travelPlanObject.component;
    var sequence = mainService.getSequence();
    // _.map(searchResultComponent.travelPlan, function (travelPlan) {
    //     _.mapObject(travelPlan.childServices, function (val, key) {
    //         console.log("value", val);
    //         if (angular.isArray(val)) {
    //             console.log("Array");
    //             _.map(val, function (data) {
    //                 var childServiceInSequence = {};
    //                 childServiceInSequence.nodeType = travelPlan.type;
    //                 childServiceInSequence.childServicesType = key;
    //                 childServiceInSequence.data = data;
    //                 sequence.push(childServiceInSequence);
    //             });
    //         } else if (angular.isObject(val)) {
    //             var childServiceInSequence = {};
    //             childServiceInSequence.nodeType = travelPlan.type;
    //             childServiceInSequence.childServicesType = key;
    //             childServiceInSequence.data = val;
    //             sequence.push(childServiceInSequence);
    //         }
    //     });
    // });
    searchResultComponent.locationchildservices = mainService.nodeMaster.servicesDetails.coExistServices;
    console.log(searchResultComponent.locationchildservices);

    searchResultComponent.transitchildservices = mainService.edgeMaster.servicesDetails.coExistServices;
    console.log(searchResultComponent.transitchildservices);

    searchResultComponent.iterator = function* () {
        for (var i = 0; i < sequence.length; i++) {
            var prev = yield sequence[i];
            if (prev && i === 0) {
                console.log("Negating by 1");
                i = i - 1;
            }
            else if (prev) {
                console.log("Negating by 2");
                i = i - 2;
            }
        }
    }


    // console.log('sequence',sequence);
    // searchResultComponent.currentObjInSequence = searchResultComponent.next();
    var travelPlanIterator = searchResultComponent.iterator();
    searchResultComponent.onNext = function () {
        console.log('Inside onNext');
        searchResultComponent.currentObjInSequence = travelPlanIterator.next();
        console.log(searchResultComponent.currentObjInSequence);
        if (!searchResultComponent.currentObjInSequence.done) {
            mainService.getFromSearch(searchResultComponent.currentObjInSequence.value).then(function (searchResults) {
                searchResultComponent.searchResults = searchResults.results;
                console.log(searchResults);
                switch (mainService.getChildServiceTypeFromMap(searchResultComponent.currentObjInSequence.value)) {
                    case 'stay':
                        $state.go('hotelSearchResultsParentComponent', null, { reload: true });
                        break;
                    case 'flight':
                        $state.go('flightSearchResults', null, { reload: true });
                        break;
                    case 'localTravel':
                        $state.go('localTravelSearchResults', null, { reload: true });
                        break;
                }
            });
        }
        else {
            searchResultComponent.$router.navigate(['ItineraryComponent', { id: mainService.travelPlanObject._id }]);
        }

    };

    searchResultComponent.onPrev = function () {
        searchResultComponent.currentObjInSequence = travelPlanIterator.next(true);
        console.log("Current object in the sequence", searchResultComponent.currentObjInSequence);
        mainService.getFromSearch(searchResultComponent.currentObjInSequence.value).then(function (searchResults) {
            console.log(searchResults);
            switch (searchResultComponent.currentObjInSequence.value.childServicesType) {
                case 'stay':
                    $state.go('hotelSearchResultsParentComponent', null, { reload: true });
                    break;
                case 'flight':
                    $state.go('flightSearchResults', null, { reload: true });
                    break;
                case 'localTravel':
                    $state.go('localTravelSearchResults', null, { reload: true });
                    break;
            }
        });
    };
    searchResultComponent.selectedData=function(value){
      // console.log("in selectObject-------------");
      // console.log(value);
      // console.log("id-----------------");
      // var id=mainService.travelPlanObject._id;
      var tpo=mainService.travelPlanObject;
      // console.log(tpo);
      console.log("cuurent object----------");
      console.log(searchResultComponent.currentObjInSequence);
      var prev=searchResultComponent.currentObjInSequence.value.selected;
      for (key in value) {
        if(key==="imageUrl"){
            prev['image']=value[key];
        }
        else
          prev[key]=value[key];
      }
      searchResultComponent.currentObjInSequence.value.selected=prev;
      // console.log("updaated");
      // console.log(prev);
      // console.log(tpo.components[]);
      // console.log(mainService.travelPlanObject._id);
      // mainService.getTravelPlanObject(id);
      // mainService.UpdateTravelPlanObject()
      console.log(mainService.travelPlanObject);
    };

}
