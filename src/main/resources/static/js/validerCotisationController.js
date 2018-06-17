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
                    
$scope.validerCotisation = function ()
                    {
                        $http.get("http://localhost:8080/api/membre/listePaiement")
                            .then(function(response) {
                                $scope.content = response.data;
                                $scope.statuscode = response.status;
                                $scope.statustext = response.statusText; 
                            });
                        
                        console.log(dataSend);
                        
                        $http.put("http://localhost:8080/api/valider",dataSend)
                        .then(function(dataSend) {
                            $scope.PostDataResponse = dataSend;
                        },
                        function (dataSend) {
                            $scope.ResponseDetails = "Data: " + dataSend;
                        });
                        
                        $location.path("/piscines");
                    };

});