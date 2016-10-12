/**
 * Created by Mike on 12-10-2016.
 */
var myApp = angular.module('myApp', [
    'ngRoute',
    'patientControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).
    when('/details/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);