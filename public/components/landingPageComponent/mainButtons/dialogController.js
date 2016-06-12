angular.module("app").controller('dialogController',function($scope,$location,$mdDialog, $mdMedia,mainService) {
  console.log("im in controller");

  dialog=this;
  $scope.typeOfTravel = 0;
  var id;
//   var events = (function(){
//   var topics = {};
//   var hOP = topics.hasOwnProperty;
//
//   return {
//     subscribe: function(topic, listener) {
//       // Create the topic's object if not yet created
//       if(!hOP.call(topics, topic)) topics[topic] = [];
//
//       // Add the listener to queue
//       var index = topics[topic].push(listener) -1;
//
//       // Provide handle back for removal of topic
//       return {
//         remove: function() {
//           delete topics[topic][index];
//         }
//       };
//     },
//     publish: function(topic, info) {
//       // If the topic doesn't exist, or there's no listeners in queue, just leave
//       if(!hOP.call(topics, topic)) return;
//
//       // Cycle through topics queue, fire!
//       topics[topic].forEach(function(item) {
//       		item(info != undefined ? info : {});
//       });
//     }
//   };
// })();
//   var subscribe = events.subscribe('travelID', function(obj){id = obj.id;});
//   subscribe.remove();
  $scope.go = function () {
      console.log("i am inside go of landing page");
    //  console.log($scope);

      mainService.travelPlanInitializer($scope.typeOfTravel).then(function(data) {
        console.log(data);
       $location.path('/travelBooking/'+ data);
      });




      // console.log('/travelBooking/' + id+ '/travelBooking/' + id+ '/travelBooking/' + id);
      $mdDialog.hide();
  };

  $scope.cancel = function () {

      $mdDialog.hide();
  };

});
