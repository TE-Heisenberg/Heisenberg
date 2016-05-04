/**
 * Created by lenovo on 25-04-2016.
 */
angular.module("app")
    .controller("nodestructurecontroller", function ($location, $scope, $rootScope, $timeout, $q) {


        $rootScope.go = function (path) {
            console.log("hello");
            $location.path(path);
        }

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

                city: {"value": "california", "display": "Alaska"},
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


        var edgeCount = 1;
        var nodeCount = 2;
        var node_md_action = 2;

        $rootScope.node_add_repeat = [
            {
                edge: "edge_0",
                node: "node_1",
                show: false,
                flightShow: false,
            }
        ];

        $rootScope.add = function () {
            var node_add_temp = {
                edge: "edge_" + edgeCount++,
                node: "node_" + nodeCount++,
            };

            $rootScope.node_add_repeat.push(node_add_temp);

        }

        $rootScope.sub = function () {

            $rootScope.node_add_repeat.splice(-1, 1);

        };

        $rootScope.node_md_action_default_show = function () {
            console.log("Show the box");
            if ($rootScope.node_0_show == false) {
                $rootScope.node_0_show = true;
                $rootScope.node_0_hide = false;
            } else {
                $rootScope.node_0_show = false;
                $rootScope.node_0_hide = true;
            }
            console.log($rootScope.node_0_show);

        };
        //
        // $rootScope.hideBox = function(x) {
        //
        //   console.log("Entered into HideBox");
        //   var firstNode=false;
        //   if (x==undefined)
        //     {
        //       console.log("Inide if og HideBox");
        //       x={};
        //       x.show=$rootScope.node_0_show;
        //       x.hide=$rootScope.node_0_hide;
        //       firstNode=true;
        //
        //     }
        //   if(x.show == true && $rootScope.node_0_hide==true)
        //   {
        //     if(firstNode == true){
        //       $rootScope.node_0_show=false
        //     }
        //     else
        //       x.show=false;
        //
        //     console.log("inside second if of HideBox");
        //     console.log($rootScope.node_0_show);
        //   }
        // };

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


        //Auto Complete End

    });
