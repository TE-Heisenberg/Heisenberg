angular.module('app')
			.controller('hotelSearchResultsController', function($scope){
				$scope.expanded=false;
				$scope.expand= function(){
					// console.log('called');
					$scope.expanded=true;
					// angular.element('#aaaa').animate({
					// 	height:'+=500px'
					// },200);
					// angular.element('#main-wrapper').animate({
					// 	height:'+=500px'
					// },200);
					angular.element('.results-card').animate({
						height: '400px'
					},200);
				};

				$scope.expandCard= function(){
					angular.element('.results-card').animate({
						height: '400px'
					},200);
				}

				$scope.collapse= function(){
					// console.log('called');
					$scope.expanded=false;
					// angular.element('#aaaa').animate({
					// 	height:'-=500px'
					// },200);
					// angular.element('#main-wrapper').animate({
					// 	height:'-=500px'
					// },200);
				};
			});
