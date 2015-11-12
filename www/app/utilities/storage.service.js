(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name LocalStorage
     *
     * @description
     * The module declaration for this service object.
     */
    angular
        .module('lifelessonbook')
        .factory('LocalStorage', LocalStorageService);

    /**
     * @name LocalStorageService
     * @description
     * This service will act as an access layer between the local storage,
     *  and the phone/web browser.
     *
     * @param {!angular.$window} $window
     *
     * @example
     *
     * // Set a value -- string
     * LocalStorage.set('myKey', 'myValue');
     *
     * // Set a value -- object
     * LocalStorage.set('myKey', { id: 'myValue' });
     *
     * // Get a value
     * LocalStorage.get('myKey');
     */
    LocalStorageService.$inject = [ '$window' ];
    function LocalStorageService ($window) {
        // Expose the service object
        return {
            set: set,
            get: get
        };

        /**
         * @name set
         * @description
         * Set a key value pair into the local storage for persistence.
         *
         * @param {string} key - the index at which the value will be set
         * @param {mixed} value - the value to set at the given index
         */
        function set (key, value) {
            // If we are trying to set an object in here then we need
            //  to make sure it is a string, so we json encode it.
            if (angular.isArray(value) || angular.isObject(value)) {
                value = JSON.stringify(value);
            }

            $window.localStorage.setItem(key, value);
        }

        /**
         * @name get
         * @description
         * Return a value in local storage at a specific key.
         *
         * @param {string} key - the index at which to return the stored value in
         *                       in local storage
         *
         * @return {mixed} - the value stored at the given key in local storage
         */
        function get (key) {
            // If we have a null at the index then we want to return
            //  the null value, otherwise we JSON.parse the return value
            //  to handle all other types (strings, numbers, objects, arrays)
            return $window.localStorage.getItem(key) === null ?
                null : $window.localStorage.getItem(key);
        }
    }
})();
