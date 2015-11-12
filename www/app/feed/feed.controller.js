(function () {
    'use strict';

    angular
        .module('lifelessonbook')
        .controller('Feed', Feed);

    Feed.$inject = [ '$stateParams', 'FeedService' ];
    function Feed ($stateParams, FeedService) {
        var vm = this;

        FeedService.getPosts()
          .then(function(result) {
            vm.lessons = result.data.posts;

            angular.forEach(vm.lessons, function(value, key){
              var tagIndex = value.content.indexOf('<img');
              var tagIndex2 = value.content.indexOf('</p>', tagIndex);
              value.featured_image = value.content.substring(tagIndex, tagIndex2);
             });
          })
    }
})();
