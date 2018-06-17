/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller("participerCoursController", function($scope, $http,$window,$cookies,$location) {
    

 $http.get("http://localhost:8081/api/cours/afficherCours")
    .then(function(response) {
        $scope.cours = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText; 
    });
 
    $scope.participer = function ()
                    {
                        console.log("participer cours");
                        var dataSend ={
                            idCours : $scope.idCours,
                        };
                        console.log(dataSend);
                        $http.post("http://localhost:8081/api/cours/participation/"+$cookies.get("id"),dataSend)
                        .then(function(dataSend) {
                            $scope.PostDataResponse = dataSend;
                        },
                        function (dataSend) {
                            $scope.ResponseDetails = "Data: " + dataSend;
                        });
                        
                        $location.path("/piscines");
                    };
 });    
