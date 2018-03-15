var logIn = angular.module('logIn',[
    
]);


logIn.controller('logInController',function($scope,$location,$window,$rootScope,$http,user){
    $scope.submit = function(){      
        
        
        var username = $scope.username;
        var password = $scope.password;
        //console.log("passing values" + username + password);
        
        $http({
            url: '../scripts/login.php',
            method: 'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data:
            'username=' +username+            
            '&password=' +password
            
        }).then(function(response){     
           
            console.log("User: "+response.data.user);
            console.log("Status: " + response.data.status);
            //console.log("connection "+response.data.dbconnection);
                                        
           if(response.data.status =='loggedin'){      
               user.userLoggedIn();
               user.setName(response.data.username); 
               $scope.username = response.data.user;
               $rootScope.username = $scope.username;
               $location.path('/indexSecure');
               
               
           }
            else{
            $scope.userLog = "invalid credentials";
                
            }
        })                       
        
    };
});


