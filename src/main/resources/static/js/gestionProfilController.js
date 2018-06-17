/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller("gestionProfilController", function($scope,$http,$window,$cookies,$location) {

    $http.get("http://localhost:8080/api/membre/afficher/"+$cookies.get("id"))
    .then(function(response) {
        $scope.membre = response.data;
		
    });
    
    $scope.modifier = function(){
        console.log("MODIF");
        
        var dataSend ={
                            nom : $scope.nom,
                            prenom : $scope.prenom,
                            adresseMail : $scope.adresseMail,
                            login : $scope.login,
                            password : $scope.password,
                            niveauExpertise : ""+$scope.membre.niveauExpertise,
                            numLicence : $scope.membre.numLicence,
                            pays : $scope.pays,
                            ville : $scope.ville,
                           
                        }
                        console.log(dataSend);
        $http.put("http://localhost:8080/api/membre/modification/"+$cookies.get("id"),dataSend)
        .then(function(response) {
            $scope.membre = response.data;
		
        });
        $location.path("/consultation");
    }
    
});
