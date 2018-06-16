/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller("consultationController", function($scope,$http,$window,$cookies) {

    $http.get("http://localhost:8081/api/cours/afficher/"+$cookies.get("id"))
    .then(function(response) {
        $scope.membre = response.data;
		
    });
    
});


