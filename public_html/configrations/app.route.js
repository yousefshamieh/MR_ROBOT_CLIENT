
MR_ROBOT.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        var initial = {
            name: 'initial',
            abstract: true,
            template: '<ui-view/>'
        };

        $stateProvider.state(initial);

    }]);