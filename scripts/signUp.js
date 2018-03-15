

var signUp = angular.module('signUp',[]);

signUp.controller('signUpController',function($scope,$location,$http,user){

    $scope.submitNewUser = function(){
    
        
        var username = $scope.username;
        var password1 = $scope.password1;
        var password2 = $scope.password2;
        
        //console.log("submitting new user: " + username + password1 + password2);
        
        
        
        if(Object.keys(username).length < 5){
            console.log("Usernae must 5 len 5");
            $scope.userLogSignUp = "Username minumum length is 5";
            return;
        }
        
        if(password1 != password2){
            console.log("Passwords dont match, try again");
            $scope.userLogSignUp = "Passwords don't match";
            return;
        }
        else if(Object.keys(password1).length < 7){
                $scope.userLogSignUp = "Password minimum lenght is 7"  
            return;
                }
        //console.log("Proceed to database connection");
        
        
        
         $http({
            url: '../scripts/signUp.php',
            method: 'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data:
            'username=' +username+            
            '&password1=' +password1+
             '&password2=' +password2           
        }).then(function(response){                
             console.log("Status: " +response.data.status);
             
             if(response.data.status == null ){
                 $scope.userLogSignUp = "This name is already taken";
             }
             
         })
       
        
        
        
    }
    

})