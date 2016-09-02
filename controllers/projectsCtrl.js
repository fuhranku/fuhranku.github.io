var app = angular.module('myApp');

app.controller('ProjectController', ['$scope', '$http', function($scope, $http) {

  $scope.projects = [];

  $http({method: 'GET', url: 'json/projects.json'}).success(function(response) {
    $scope.projects = response.projects;
  });

  $scope.hello = "helloFam";
}]);