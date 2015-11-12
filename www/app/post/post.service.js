(function () {
    'use strict';

    angular
        .module('lifelessonbook')
        .factory('PostService', PostService);

    PostService.$inject = [ '$http', 'API', 'LocalStorage' ];
    function PostService($http, API, LocalStorage) {

        return {
            getPost: getPost
        };

        function getPost (id) {
            return $http({
                method: 'GET',
                url: API + 'get_post/?' + id,
            }).then(returnData).catch(showError);
        }

        function returnData (response) {
            return response;
        }

        function showError (error) {
            console.log(error);
        }
    }
})();
