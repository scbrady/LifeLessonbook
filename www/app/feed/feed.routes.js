(function () {
    'use strict';

    angular
        .module('lifelessonbook')
        .config(config);

    config.$inject = [ '$stateProvider', '$urlRouterProvider' ];
    function config ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/')

      $stateProvider.state('feed', {
        url: '/',
        templateUrl: 'app/feed/feed.html',
        controller: 'Feed as vm'
      })
    }
})();
