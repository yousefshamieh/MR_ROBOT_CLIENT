
MR_ROBOT.config(['$stateProvider',
    function ($stateProvider) {

        var login = {
            name: 'login',
            url: '/login',
            parent: 'initial',
            templateUrl: "../app/components/login/partials/login.html",
            controller: 'loginCtrl'
        };

        $stateProvider.state(login);

    }]);