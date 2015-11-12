(function () {
    'use strict';

    angular
        .module('lifelessonbook')
        .factory('FeedService', FeedService);

    FeedService.$inject = [ '$http', 'API', 'LocalStorage' ];
    function FeedService($http, API, LocalStorage) {

        return {
            getPosts: getPosts
        };

        function getPosts () {
            return $http({
                method: 'GET',
                url: API + 'get_recent_posts/',
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
