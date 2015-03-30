

var app = angular.module('signalRNotificationApp', ['ngRoute', 'SignalR']);

app.config(
    ['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        'use strict';
        $routeProvider
            .when('/ngNotify', {
                templateUrl: 'app/notifyTemplate.html',
                controller: 'notifyController'
            })
            .otherwise({
                redirectTo: '/ngNotify'
            });

        $locationProvider.html5Mode(true);
    }]);