/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller("inscriptionController", function($scope, $http, $cookies, $location) {
if ($cookies.get("id")!=undefined){
     $location.path("/deconnexion");
 }

 $scope.inscription = function ()
                    {
                        console.log("inscription");
                        var dataSend ={
                            nom : $scope.nom,
                            prenom : $scope.prenom,
                            mail : $scope.mail,
                            login : $scope.login,
                            password : $scope.password,
                            dateCertificat : $scope.dateCertificat,
                            cotisationPayee : $scope.cotisationPayee,
                            niveau : $scope.niveau,
                            numLicence : $scope.numLicence,
                            pays : $scope.pays,
                            ville : $scope.ville,
                            type : $scope.type
                        }
                        $http.post("http://localhost:8080/api/membre/creation",dataSend)
                        .success(function(dataSend) {
                            $scope.PostDataResponse = dataSend;
                        })
                        .error(function (dataSend) {
                            $scope.ResponseDetails = "Data: " + dataSend
                        });
                        
                        $location.path("/piscines");
                    }

});