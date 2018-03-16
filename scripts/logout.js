var logout = angular.module('logout',[
    
]);


logout.controller('logOutController',function($scope,$location,$window,$rootScope,$http,user){
    $scope.logout = function(){  
    console.log("implement log out");
        user.userLoggedOut();
        console.log(user.isUserLoggedIn());
        $location.path('/index');
        
    }
    });
