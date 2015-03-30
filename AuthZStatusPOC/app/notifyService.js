/*ignore jslint start*/
app.factory('notifyService',
    ['$http', '$rootScope', '$location', 'Hub','$log', 
    function ($http, $rootScope, $location, Hub, $log) {
        /*ignore jslint end*/
        'use strict';
        var notifications = this, hub;
        notifications.mostRecent = 'Not Received';
        notifications.hasNotifications = false;

        hub = new Hub('notificationHub', {
            listeners: {
                'addNewNotification': function (message) {
                    notifications.all.push(message);
                    notifications.mostRecent = message;
                    notifications.hasNotifications = true;
                    $rootScope.$apply();
                }
            },
            errorHandler: function (error) {
                $log.error(error);
            },
            hubDisconnected: function () {
                if (hub.connection.lastError) {
                    hub.connection.start();
                }
            },
            transport: 'webSockets',
            logging: false
        });
        notifications.all = [];
        return notifications;
    }]);