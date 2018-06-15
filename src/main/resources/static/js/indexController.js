/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller("indexController", function($scope,$http,$cookies) {
 $scope.login = function ()
                    {
                        console.log("hello")
                        if(cookie.get("id")!= undefined){
                            $state.go("/connexion");
                        }else{
                            $state.go("/login");
                        }
                        
                    }


});