/**
 * Created by Mike Ligthart on 11-Oct-16.
 */
var patientControllers = angular.module('patientControllers', []);

patientControllers.controller("ListController", ['$scope', '$http', function($scope, $http){
    $http.get('js/data.json').success(function(data) {
        $scope.patients = data;
        $scope.patientOrder = 'id';
    });
}]);

patientControllers.controller("DetailsController", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('js/data.json').success(function(data) {
        $scope.patients = data;
        $scope.whichItem = $routeParams.itemId;

        if($routeParams.itemId > 0){
            $scope.prevItem = Number($routeParams.itemId)-1;
        } else {
            $scope.prevItem = $scope.patients.length-1;
        }

        if($routeParams.itemId < $scope.patients.length-1){
            $scope.nextItem = Number($routeParams.itemId)+1;
        } else {
            $scope.nextItem = 0;
        }
    });
}]);