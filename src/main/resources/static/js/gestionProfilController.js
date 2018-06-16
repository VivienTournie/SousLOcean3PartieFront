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
                            nom : $scope.membre.nom,
                            prenom : $scope.membre.prenom,
                            adresseMail : $scope.membre.adresseMail,
                            login : $scope.membre.login,
                            password : $scope.membre.password,
                            dateDebutCertificat : ""+$scope.membre.dateDebutCertificat,
                            aPaye : ""+$scope.membre.apaye,
                            niveauExpertise : ""+$scope.membre.niveauExpertise,
                            numLicence : $scope.membre.numLicence,
                            pays : $scope.membre.adresse.pays,
                            ville : $scope.membre.adresse.ville,
                           
                        }
        $http.put("http://localhost:8080/api/membre/modification/"+$cookies.get("id"),dataSend)
        .then(function(response) {
            $scope.membre = response.data;
		
        });
    }
    
    /*$scope.modifier = function ()
                    {console.log("Modification");
                        
                        $http.put("http://localhost:8080/api/membre/afficher/"+$cookies.get("id"))
                        .then(function(response) {
                            $cookies.put("id",response.data.idMembre);
                            $http({
                                    url: "http://localhost:8080/api/membre/modification/"+response.data.idMembre,
                                    method: 'PUT',
                                    responseType: 'text',
                                    transformResponse: [function (data) {
                                        // Do whatever you want!
                                        return data;
                                     }]
                                }).then(function(res){
                                     
                                     $scope.membre = res.data;
                                    console.log($cookies.get("id"));
                                });
                        });
                        $location.path("/piscines");
                    }*/
    
});
