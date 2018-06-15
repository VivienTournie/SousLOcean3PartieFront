/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller("deconnexionController", function($scope,$http,$cookies,$location) {

 $scope.confirmation = function (){
      $cookies.remove("id");
      $cookies.remove("type");
     $location.path("/connexion");
 };
});
