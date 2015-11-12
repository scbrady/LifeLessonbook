(function () {
    'use strict';

    angular
        .module('lifelessonbook')
        .config(config);

    config.$inject = [ '$stateProvider', '$urlRouterProvider' ];
    function config ($stateProvider, $urlRouterProvider) {
      $stateProvider.state('post', {
        url: '/post/:id',
        templateUrl: 'app/post/post.html',
        controller: 'Post as vm'
      })
    }
})();
