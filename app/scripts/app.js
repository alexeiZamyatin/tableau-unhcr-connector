'use strict';

/**
 * @ngdoc overview
 * @name tableauUnhcrConnectorApp
 * @description
 * # tableauUnhcrConnectorApp
 *
 * Main module of the application.
 */
angular
  .module('tableauUnhcrConnectorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/unhcr-connector.html',
        controller: 'ConnectorController',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
