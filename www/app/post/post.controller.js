(function () {
    'use strict';

    angular
        .module('lifelessonbook')
        .controller('Post', Post);

    Post.$inject = [ '$stateParams', 'PostService' ];
    function Post ($stateParams, PostService) {
        var vm = this;
        vm.postId = $stateParams.id

        PostService.getPost(vm.postId)
          .then(function(result) {
            vm.lesson = result.data.post;
          })
    }
})();
