(function() {
    'use strict'

    var app = angular.module('myblog', ['ENV']);

    app.controller('BlogController', function($scope, BlogService){
        var blog = this;
        blog.posts = [];
        BlogService.fetch().then(function(result){
            console.log(result);
            blog.posts = result.items;
        }, function(reason){
            console.log('ERROR', reason);
        });;

        console.log($scope.posts);
    });

    app.factory('BlogService', ['$http', 'GOOGLE_KEY', '$q', function($http, googleKey, $q){
        var baseUrl = 'https://www.googleapis.com/blogger/v3/blogs/33279377/posts?key=';
        var key = googleKey;

        var fetch = function (board_id) {
            var deferred = $q.defer();
            var url = baseUrl + key;

            $http.get(url).success(deferred.resolve).error(deferred.reject)

            return deferred.promise;
        };

        return {
            fetch: fetch
        }
    }]);

})();