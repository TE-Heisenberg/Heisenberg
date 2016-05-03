/**
 * Created by lenovo on 25-04-2016.
 */
angular.module("app")
    .controller("nodestructurecontroller", function ($rootScope) {


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

            if ($rootScope.node_0_show == false) {
                $rootScope.node_0_show = true;
            } else {
                $rootScope.node_0_show = false;
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


    });
