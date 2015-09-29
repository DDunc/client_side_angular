//angular has lots of sub libraries, telling it to specifically grab angular.js
//its not modern web standard, just go with it
//ng means it's angular core
require('angular/angular');

//names for these saying what they are can help a lot

//array is for global level app dependencies, even if it's empty this creates a new module
//if you dont include an array, it will look for the module to be defined elsewhere
notesApp = angular.module('notesApp', []);

//this is the master angular pattern
notesApp.controller('notesController', ['$scope', function($scope) {
  //protection from minifiers to make sure it can find its scope later
  //this is the js side two way binding;
  $scope.greeting = 'My REST API tracks what browser you used the last time you visted the page';
}]);

//injector error means there's a typo on the HTML side
//case sensitive html