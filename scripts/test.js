var test = angular.module('test',[]);


test.config(function($routeProvider){
    $routeProvider
    
    .when('/',{
        templateUrl: 'testpage.html' //template and templateUrl cannot be used same time
    })
    
    .when('/anotherPage',{
        template: 'Welcome again'
    })
    .otherwise({
        redirectTo:'/'
        
    });
    
});

test.controller('testController', ['$scope', function($scope) {
  $scope.myFavLanguage = 'None';
    
    $scope.php=function(){
        $scope.myFavLanguage = 'PHP';
    };
    
    $scope.java=function(){
        $scope.myFavLanguage = 'java';
    };
    
    $scope.cpp=function(){
        $scope.myFavLanguage = 'cpp';
    };
    
}]);