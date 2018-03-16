//first  declared ng-app is bootstrapped
//declare other modules in the array to include them as dependencies

//remember to inject in submodules to use them!
//x.controller('myctrl',function())
var logbook = angular.module('logbook',['ngRoute','test','logIn','signUp','logout'
    
]);



logbook.config(function($routeProvider){
   $routeProvider
   .when('/',{
       
       templateUrl: 'login.html',
       controller:'logInController'
       
   })
    
    .when('/FrontPage',{     
           templateUrl:'login.html',
            
       
   })
    
    .when('/indexSecure',{               
                //templateUrl: 'indexSecure.html'  
       resolve: {
			check: function($location, user) {
                console.log(user.isUserLoggedIn());
				if(!user.isUserLoggedIn()) {
					$location.path('/login');
				}
			},
		},
		templateUrl: 'indexSecure.html'
		
	})

    
    .when('/signUp',{               
                templateUrl: 'signUp.html'            
   })
          
    .otherwise({      
       redirectTo: '/',
       controller:'logInController'
   });
    
});

logbook.service('user',function(){
    var username;
    var loggedin = false;
    var id;
    
    this.setName = function(name){
        username = name;
    };
    
    this.getName = function(){
        return username;
    };
    
    this.setID = function(userID){
        id = userID;
    };
    
    this.getID = function(){
        return id;
    };
    
    this.isUserLoggedIn = function(){
        return loggedin;
    };
    
    this.userLoggedOut = function(){
        username = null;
        id = null;
        loggedin = false;
        console.log("Logged out");
    };
    
    this.userLoggedIn = function(){
        loggedin = true;
    }
});

logbook.controller('logbookController',function($scope,user){
    $scope.user = user.getName();
    
})

