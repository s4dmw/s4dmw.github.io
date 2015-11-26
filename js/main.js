(function() {
console.log("main.js")

  angular.module('portfolio', ['ngRoute'], function($httpProvider, $routeProvider){
      $routeProvider
        .when('/',{
          templateUrl: 'partials/landing.html',
          controller: 'MainController'
        })
        .when('/about', {
          templateUrl: 'partials/about.html',
          controller: 'MainController'
        })
        .when('/portfolio', {
          templateUrl: 'partials/projects.html',
          controller: 'MainController'
        })
        .when('/resume', {
          templateUrl: 'partials/resume.html',
          controller: 'MainController'
        })
        .when('/contact', {
          templateUrl: 'partials/contact.html',
          controller: 'MainController'
        })

  }) //end angular.module

  .controller('MainController', function(){
    console.log("MainController")
  }) // end MainController

})(); //end IIFE
