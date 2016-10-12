/**
 * Created by Mike Ligthart on 11-Oct-16.
 */
var myApp = angular.module('XoXoft_TU_Example', []);

myApp.controller("myControoler", function MyController($scope){

    $scope.author = {
        'name': 'Mike Ligthart',
        'company': 'Saxion'
    }

});