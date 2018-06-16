/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('app', ['ngRoute','ngResource','ngCookies']);

app.config(function($routeProvider){
    $routeProvider
        .when('/listeMembres',{
            templateUrl: 'views/listeMembres.html',
            controller: 'listeMembresController'
        })
        .when('/statistiques',{
            templateUrl: 'views/statistiques.html',
            controller: 'statistiquesController'
        })
        .when('/piscines',{
            templateUrl: 'views/piscines.html',
            controller: 'piscinesController'
        })
        .when('/login',{
            templateUrl: 'views/Inscription.html',
            controller: 'InscriptionController'
        })
        .when('/connexion',{
            templateUrl: 'views/connexion.html',
            controller: 'connexionController'
        })
        .when('/inscription',{
            templateUrl: 'views/Inscription.html',
            controller: 'inscriptionController'
        })
        .when('/deconnexion',{
            templateUrl: 'views/deconnexion.html',
            controller: 'deconnexionController'
        })
        .when('/consultation',{
            templateUrl: 'views/consultation.html',
            controller: 'consultationController'
        })
        .otherwise(
            { redirectTo: '/'}
        );
});