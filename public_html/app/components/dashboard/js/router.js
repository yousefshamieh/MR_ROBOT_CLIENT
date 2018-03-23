MR_ROBOT.config(['$stateProvider',
    function ($stateProvider) {
        var dashboard = {
            name: 'dashboard',
            url: '/dashboard',
            parent: 'initial',
            templateUrl: "../app/components/dashboard/partials/dashboard.html",
            controller: 'dashboardCtrl'
        };

        $stateProvider.state(dashboard);
    }]);