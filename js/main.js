(function() {
console.log("main.js")

  angular.module('portfolio', ['ngRoute'], function($httpProvider, $routeProvider){
      $routeProvider
        .when('/',{
          templateUrl: 'partials/landing.html',
          controller: 'MainController'
        })

  }) //end angular.module

  .controller('MainController', function(){
    console.log("MainController")
  }) // end MainController

})(); //end IIFE
