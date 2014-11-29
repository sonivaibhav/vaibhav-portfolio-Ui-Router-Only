'use strict';


  var vaibhavPortfolioApp = angular.module('vaibhavPortfolioApp', [
  'ngResource',
  'ngSanitize',
  'ui.router'
]);
vaibhavPortfolioApp.config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      }).state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller:'AboutCtrl'
        }).state('portfolio', {
            url: '/portfolio',
            templateUrl: 'views/portfolio.html',
            controller:'PortfolioCtrl'
        }).state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html'
            /*controller:'ContactCtrl'*/
        }).state('aboutPortfolio', {
            url: '/aboutPortfolio',
            templateUrl: 'views/aboutPortfolio.html',
            controller:'AboutPortfolioCtrl'
        })
  });




