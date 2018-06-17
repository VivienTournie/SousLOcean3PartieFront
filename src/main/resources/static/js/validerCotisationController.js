/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller("validerCotisationController", function($scope, $http, $window, $cookies, $location) {
if ($cookies.get("type")!="Secretaire"){
        $window.alert("Vous n'avez pas les droits :(");
        $location.path("/deconnexion");
 }
                         $http.get("http://localhost:8080/api/membre/listePaiement")
                            .then(function(response) {
                                $scope.content = response.data;
                            });                   
$scope.validerCotisation = function ()
                    {

                        
                        
                        
                        $http.put("http://localhost:8080/api/membre/valider/"+$scope.id)
                        .then(function(data) {
                            console.log(data);
                        },
                        function () {
                                $location.path("/listeMembres");
                        });
                        
                    };

});