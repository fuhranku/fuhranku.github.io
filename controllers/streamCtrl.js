var app = angular.module('myApp');

app.controller('StreamController', ['$scope', '$http', function($scope, $http) {
  $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];
  $scope.rowSize = 2;
  $scope.last = 8;

  $scope.loadMore = function() {
    for(var i = 0; i < 4; i++) {
      $scope.images.push($scope.last + 1);
      $scope.last++;
    }
  }

  $scope.food = $http({method: 'GET', url: 'json/food.json'}).success(function(response) {
    console.log(response);
    return response.data;
  });

  $scope.test = function() {
    console.log("working");
  }

  $scope.hover = function(index) {
    console.log(index);
  }
}]);