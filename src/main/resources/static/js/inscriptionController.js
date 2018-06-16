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
                            adresseMail : $scope.mail,
                            login : $scope.login,
                            password : $scope.password,
                            dateDebutCertificat : $scope.dateCertificat,
                            aPaye : $scope.cotisationPayee,
                            niveauExpertise : ""+$scope.niveau,
                            numLicence : $scope.numLicence,
                            pays : $scope.pays,
                            ville : $scope.ville,
                            type : $scope.type
                        } ;console.log(dataSend);
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