/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller("inscriptionController", function($scope, $http) {
if ($cookies.get("id")!=undefined){
     $location.path("/deconnexion");
 }
    $http.put("http://localhost:8080/api/membre/creation")
//    .then(function(response) {
//        $scope.content = response.data;
//        $scope.statuscode = response.status;
//        $scope.statustext = response.statusText; 
//    }); A ADAPTER POUR CREER UN MEMBRE
});