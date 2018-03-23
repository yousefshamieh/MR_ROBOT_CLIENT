MR_ROBOT.controller('loginCtrl', ['$scope', '$state', function ($scope, $state) {


        $scope.fields = {
            username: null,
            password: null
        };

        $scope.login = function () {
            $state.go('shop');
        };
    }]);