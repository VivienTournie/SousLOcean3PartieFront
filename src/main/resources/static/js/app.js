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
        .when('/gestionProfil',{
            templateUrl: 'views/gestionProfil.html',
            controller: 'gestionProfilController'
        })
        .when('/creationCours',{
            templateUrl: 'views/creationCours.html',
            controller: 'creationCoursController'
        })
<<<<<<< HEAD
        .when('/payerCotisation',{
            templateUrl: 'views/payerCotisation.html',
            controller: 'payerCotisationController'
        })
        .when('/validerCotisation',{
            templateUrl: 'views/validerCotisation.html',
            controller: 'validerCotisationController'
=======
        .when('/participerCours',{
            templateUrl: 'views/participerCours.html',
            controller: 'participerCoursController'
>>>>>>> 5f414ca1354286af38c27a031dc6fb35499b122a
        })
        .otherwise(
            { redirectTo: '/'}
        );
});