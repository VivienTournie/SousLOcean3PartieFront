/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller("gestionProfilController", function($scope,$http,$window,$cookies) {

    $http.get("http://localhost:8080/api/membre/modification/"+$cookies.get("id"))
    .then(function(response) {
        $scope.membre = response.data;
		
    });
    
});
