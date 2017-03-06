
var myApp = angular.module('myApp', ['ngMessages', 'ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');
    
    $routeProvider

    .when('/', {
        templateUrl: 'sub_pages/first.html',
        controller:  'myFirstController'
    })

    .when('/second', {
        templateUrl: 'sub_pages/second.html',
        controller:  'secondPaneController'
    }) ;

});

function myRandomFunc(thisThing, thatThing, theOtherThing) {

}

myApp.controller('myFirstController', function($scope, $log) {
        $log.info("first controller instantiated...scope is:")
        $log.info($scope);
        $log.info(angular.injector().annotate(myRandomFunc));
});

myApp.controller('secondPaneController', function($scope, $log) {
        $log.info("second pane instantiated...scope is:")
});
