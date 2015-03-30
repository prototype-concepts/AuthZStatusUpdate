/*ignore jslint start*/
app.controller('notifyController', ['$scope', 'notifyService',
    function notifyController($scope, notifyService) {
        /*ignore jslint end*/
        'use strict';
        $scope.notification = notifyService;

    }]);