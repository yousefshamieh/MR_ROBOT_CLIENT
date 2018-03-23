MR_ROBOT.config(['$stateProvider',
    function ($stateProvider) {
         
         var  shop={
             name:'shop',
             url:'/shop',
             parent:'header',
             controller:'shopCtrl',
             templateUrl:'../app/components/shop/partials/shop.html'
         };
         
         $stateProvider.state(shop);
 }]);