/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller("piscinesController", function($scope,$cookies,$http) {
     $scope.login = function ()
                    {
                        console.log("hello");
                      /*  if($cookies.get("id")!= undefined){
                            $state.go("/connexion");
                        }else{
                            $state.go("/login");
                        }*/
                        
                    }
                    
    $http.get("http://localhost:8081/api/cours/afficherPiscines")
    .then(function(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText; 
    });





});
