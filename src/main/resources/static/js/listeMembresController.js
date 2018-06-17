/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller("listeMembresController", function($scope, $http,$window,$cookies,$location) {
    
if ($cookies.get("type")!="Secretaire"){
      $window.alert("Vous n'avez pas les droits :(")
     $location.path("/piscines");
 }
    $http.get("http://localhost:8080/api/membre/consultation")
    .then(function(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText; 
    });
});