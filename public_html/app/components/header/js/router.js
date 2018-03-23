
MR_ROBOT.config(['$stateProvider',
    function ($stateProvider) {

        var login = {
            name: 'header',
            parent: 'initial',
            templateUrl: "../app/components/header/partials/header.html",
            controller: 'headerCtrl',
        };

        $stateProvider.state(login);

    }]);