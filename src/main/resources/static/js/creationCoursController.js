/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller("creationCoursController", function($scope, $http,$window,$cookies,$location) {
    
if ($cookies.get("type")!="Enseignant"){
      $window.alert("Vous n'avez pas les droits :(")
     $location.path("/piscines");
 }
 $http.get("http://localhost:8081/api/cours/afficherPiscines")
    .then(function(response) {
        $scope.piscine = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText; 
    });
    
     $scope.creation = function ()
                    {
                        console.log("création cours");
                        var dataSend ={
                            nomCours : $scope.nomCours,
                            niveauCible : $scope.niveauCible+"",
                            dateDebut : $scope.dateDebut+"",
                            duree : $scope.duree+"",
                            enseignant : $cookies.get("id")+"",
                            piscine : $scope.id,
                        };
                        console.log(dataSend);
                        $http.post("http://localhost:8081/api/cours/creation",dataSend)
                        .then(function(dataSend) {
                            $scope.PostDataResponse = dataSend;
                        },
                        function (dataSend) {
                            $scope.ResponseDetails = "Data: " + dataSend;
                        });
                        
                        $location.path("/piscines");
                    };

});

