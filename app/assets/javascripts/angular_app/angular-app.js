var contactsApp = angular.module('contactApp', [
  'ngRoute',
  'templates', //support for cached angular templates
  'contactComponent',
]);

//ash not being used right now
contactsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'contact-list.html',
        controller: 'contactIndexController'
      }).
      when('/new', {
        templateUrl: 'new.html',
        controller: 'contactIndexController'
      }).
      when('/show/:contactId', {
        templateUrl: 'show.html',
        controller: 'contactProfileController'
      }).
      when('/edit/:contactId', {
        templateUrl: 'edit.html',
        controller: 'contactProfileController'
      }).
      otherwise({
        redirectTo: '/index'
      })
  }
]);