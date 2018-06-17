/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller("payerCotisationController", function($scope, $http, $cookies, $location) {
if ($cookies.get("id")===undefined){
     $location.path("/connexion");
 }

 $scope.payerCotisation = function ()
                    {
                        console.log("Cotisation");
                        var dataSend ={
                            IBAN : $scope.IBAN,
                            somme : $scope.somme+""
                        } ;
                        
                        console.log(dataSend);
                        $http.put("http://localhost:8080/api/membre/paiement/"+ $cookies.get("id"),dataSend)
                        .then(function(dataSend) {
                            $scope.PostDataResponse = dataSend;
                        },
                        function (dataSend) {
                            $scope.ResponseDetails = "Data: " + dataSend;
                        });
                        
                        $location.path("/piscines");
                    };

});