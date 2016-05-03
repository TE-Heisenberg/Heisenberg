/**
 * Created by user on 02-05-2016.
 */
angular.module('app').controller("itineraryController",function($scope) {
    var node1={
        final:{
            city:{
                name:"bangalore"
            },
            local:[
                {
                    logo:"public/assets/images/uber.png",
                    type:"taxi",
                    source:"koramangala",
                    destination:"bangalore airport",
                    pickUpDate:"10-05-2016",
                    pickUpTime:"10:00",
                    dropDate:"10-05-2016",
                    dropTime:"14:00",
                    price:"1000"
                }
            ]
        }
    }
    var edge1={
        final: {
            flight: [
                {
                    logo: "public/assets/images/indigo.png",
                    name: "indigo",
                    source: "bangalore",
                    destination: "delhi",
                    startDate: "10-05-2016",
                    endDate: "10-05-2016",
                    startTime: "16:00",
                    endTime: "20:00",
                    sourceAirport: "bangalore airport",
                    destinationAirport: "delhi airport",
                    class: "economic",
                    noOfStop:"3h travelling time (0 stop)",
                    preference: [
                        {
                            meal: "veg",
                            baggage: "15 kg/person"
                        }
                    ],
                    price: 37000
                }
            ]
        }
    }
    var node2={
        final:{
            city:{
                name:"delhi"
            },
            local:[
                {
                    logo:"public/assets/images/uber.png",
                    type:"taxi",
                    source:"airport",
                    destination:"hotel taj",
                    pickUpDate:"10-05-2016",
                    pickUpTime:"20:30",
                    dropDate:"10-05-2016",
                    dropTime:"23:00",
                    price:1200
                },
                {
                    logo:"public/assets/images/ola.png",
                    type:"taxi",
                    source:"airport",
                    destination:"hotel taj",
                    pickUpDate:"10-05-2016",
                    pickUpTime:"20:30",
                    dropDate:"10-05-2016",
                    dropTime:"23:00",
                    price:1200
                },
                {
                    logo:"public/assets/images/uber.png",
                    type:"taxi",
                    source:"airport",
                    destination:"hotel taj",
                    pickUpDate:"10-05-2016",
                    pickUpTime:"20:30",
                    dropDate:"10-05-2016",
                    dropTime:"23:00",
                    price:1200
                },
                {
                    logo:"public/assets/images/uber.png",
                    type:"taxi",
                    source:"airport",
                    destination:"hotel taj",
                    pickUpDate:"10-05-2016",
                    pickUpTime:"20:30",
                    dropDate:"10-05-2016",
                    dropTime:"23:00",
                    price:1200
                }
            ],
            accommodation:[
                {
                    logo:"public/assets/images/taj.png",
                    name:"hotel taj",
                    rating:"*****",
                    location:"nehru nagar",
                    roomType:"AC room",
                    checkInDate:"10-05-2016",
                    checkInTime:"23:00",
                    checkOutDate:"12-05-2016",
                    checkOutTime:"16:00",
                    price:8000
                },
                {
                    logo:"public/assets/images/taj.png",
                    name:"hotel taj",
                    rating:"*****",
                    location:"nehru nagar",
                    roomType:"AC room",
                    checkInDate:"10-05-2016",
                    checkInTime:"23:00",
                    checkOutDate:"12-05-2016",
                    checkOutTime:"16:00",
                    price:8000
                }
            ]
        }
    }

    var array=[];
    array.push(node1);
    array.push(edge1);
    array.push(node2);
    $scope.finalArray=array;


});
