const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
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
    })
});