angular.module("app")
    .controller('travelModeController', function ($rootScope,$timeout, $q, $scope) {
    $rootScope.currentEdgeIndex=0;
    $rootScope.edge =
          [
              {
                  mode: 'Flight',
                  date: '',
                  preference: 'Bla',
                  startNode: 0,
                  endNode: 1
              }
            ];

      $rootScope.node = [
          {

              city: {"value":"california","display":"Alaska"},
              accommodation: [
                  {
                      rootInfo: [],
                      address: "",
                      expense: {
                          value: 0,
                          currency: ""
                      },
                      name: "",
                      checkinDate: "",
                      checkoutDate: "",
                      checkinTime: "",
                      area: "",
                      options: {}

                  }
              ],
              localTravel: [
                  {
                      pickupPoint: "",
                      dropPoint: "",
                      date: "",
                      time: "",
                      companyName: "",
                      options: {}
                  }
              ]

          },
          {

              city: {"value":"california","display":"California"},
              accommodation: [
                  {
                      rootInfo: [],
                      address: "",
                      expense: {
                          value: 0,
                          currency: ""
                      },
                      name: "",
                      checkinDate: "",
                      checkoutDate: "",
                      checkinTime: "",
                      area: "",
                      options: {}

                  }
              ],
              localTravel: [
                  {
                      pickupPoint: "",
                      dropPoint: "",
                      date: "",
                      time: "",
                      companyName: "",
                      options: {}
                  }
              ]

          }

      ];

        // For AutoComplete
        var self = this;
        $rootScope.source = "Alabama";
        $rootScope.destination = "California";
        $rootScope.selectedMode='Flight';
        // list of `state` value/display objects
        self.states = loadAll();
        self.querySearch = querySearch;
        self.defau = "Alabama"
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */

        function querySearch(query) {
            console.log("Entered querySearch");
            var results = query ? self.states.filter(createFilterFor(
                query)) : self.states;
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        }

        /**
         * Build `states` list of key/value pairs
         */

        function loadAll() {
            console.log("Entered loadAll");
            var allStates =
                'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
      Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
      Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
      Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
      North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
      South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
      Wisconsin, Wyoming';

            return allStates.split(/, +/g).map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        /**
         * Create filter function for a query string
         */

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }

        //End AutoComplete
        $scope.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            firstName: '',
            lastName: '',
            source: 'BGL',
            destination: 'Pune',
            address: '1600 Amphitheatre Pkwy',
            city: 'Mountain View',
            state: 'CA',
            myDate: new Date(),
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode: '94043',
        };
        $scope.flightFilters = ['Economy', 'Business'];
        $scope.trainFilters = ['3A', '2A', 'SL'];
        $scope.busFilters = ['Sleeper', 'Semi Sleeper', "Seater"];
        $scope.getSelectedText = function () {
            console.log("getSelectedText has been called");
            if ($rootScope.edge[$rootScope.currentEdgeIndex].preference !== undefined) {
              console.log("getSelectedText in if");
              console.log($rootScope.edge[$rootScope.currentEdgeIndex].preference);
                return $rootScope.edge[$rootScope.currentEdgeIndex].preference;
            } else {
              console.log("getSelectedText else");
                return "Enter your Preference";
            }
        };
    }).config(function ($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default').primaryPalette(
        'yellow').dark();
});
