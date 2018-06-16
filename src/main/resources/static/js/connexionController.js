/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller("connexionController", function($scope,$http,$cookies,$location) {
    
 if ($cookies.get("id")!=undefined){
     $location.path("/deconnexion");
 }
 $scope.entrez = function ()
                    {console.log("connexion");
                        var dataSend ={
                            login : $scope.login,
                            password : $scope.password
                        }
                        $http.put("http://localhost:8080/api/membre/connexion",dataSend)
                        .then(function(response) {
                            $cookies.put("id",response.data.idMembre);
                            $http({
                                    url: "http://localhost:8080/api/membre/type/"+response.data.idMembre,
                                    method: 'GET',
                                    responseType: 'text',
                                    transformResponse: [function (data) {
                                        // Do whatever you want!
                                        return data;
                                     }]
                                }).then(function(res){
                                     
                                     $scope.type = res.data;
                                     $cookies.put("type",res.data);
                                    console.log($cookies.get("type"));
                                });
                        });
                        $location.path("/piscines");
                    }

});