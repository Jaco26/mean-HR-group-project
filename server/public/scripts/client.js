console.log('hello from the client side')
const app = angular.module('myApp', ['ngRoute']);
console.log('angular')

app.config(function($routeProvider){
    console.log('whatever in the routing');
    $routeProvider.when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddController as ac'
    }).when('/reports', {
        templateUrl: 'views/reports.html',
        controller: 'ReportsController as rc'
    }).when('/track', {
        templateUrl: 'views/track.html',
        controller: 'TrackController as tc'
    }).otherwise('/', {
        templateUrl: 'view/home.html'
    });
});