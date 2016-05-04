/**
 * Created by lenovo on 25-04-2016.
 */
angular.module("app")
    .controller("nodestructurecontroller", function ($location, $scope, $rootScope, $timeout, $q) {


        $rootScope.go = function (path) {
            $location.path(path);
        }

        $rootScope.edges =
            [
                {
                    mode: 'flight',
                    date: '',
                    preference: 'Bla',
                    startNode: 0,
                    endNode: 1
                }
            ];

        $rootScope.nodes = [
            {
                city: {"value": "alaska", "display": "Alaska"},
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

                city: {"value": "california", "display": "California"},
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


        $rootScope.add = function () {
            var newNode = {
                city: {"value": "", "display": ""},
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

            };

            var newEdge = {
                mode: 'Flight',
                date: '',
                preference: 'Bla',
                startNode: 0,
                endNode: 1
            };

            $scope.nodes.push(newNode);
            $scope.edges.push(newEdge);

        }

        $rootScope.sub = function () {

            $rootScope.nodes.splice(-1, 1);

        };
        $rootScope.travel_mode = "flight";
        $rootScope.change_travel_mode = function (index, icon) {
            console.log(index);
            $rootScope.edges[index].mode = icon;
        };

        $rootScope.node_md_action_default_show = function () {
            if ($rootScope.node_0_show == false) {
                $rootScope.node_0_show = true;
                $rootScope.node_0_hide = false;
            } else {
                $rootScope.node_0_show = false;
                $rootScope.node_0_hide = true;
            }

        };

        $rootScope.node_0_show = false;
        $rootScope.node_md_action_show = function (x) {
            if (x.show == false) {
                x.show = true;
            } else {
                x.show = false;
            }

        };

        $rootScope.Flight_buttion_Action = function (x) {
            if (x.flightShow == false) {
                x.flightShow = true;
            } else {
                x.flightShow = false;
            }
        }


        //Auto Complete Start
        var self = this;
        // $rootScope.source = "Alabama";
        // $rootScope.destination = "California";
        // $rootScope.selectedMode='Flight';
        // list of `state` value/display objects
        self.states = loadAll();
        self.searchText = [];
        self.querySearch = querySearch;
        // self.defau = "Alabama"
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */

        function querySearch(query) {
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


        //Auto Complete End

    });
