var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/barfmouth' ,{
      templateUrl: '/views/templates/barfmouth.html',
      controller: 'BarfmouthController',
      controllerAs: 'barfmouth'
    })
    .when('/ladyfingernails' ,{
      templateUrl: '/views/templates/ladyfingernails.html',
      controller: 'LadyfingernailsController',
      controllerAs: 'ladyfingernails'
    })
    .when('/boxzor' ,{
      templateUrl: '/views/templates/boxzor.html',
      controller: 'boxzorController',
      controllerAs: 'boxzor'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('BarfmouthController', function() {
  console.log('barfmouth controller running');
  var self = this;
  self.message = "barfmouth controller is the best!";

});

app.controller('LadyfingernailsController', function() {
  console.log('LadyfingernailsController controller running');
  var self = this;
  self.message = "LadyfingernailsController controller is the best!";

});

app.controller('boxzorController', function() {
  console.log('boxzorController controller running');
  var self = this;
  self.message = "boxzorController controller is the best!";

});
