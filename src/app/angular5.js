(function() {
    'use strict'

    var app = angular.module('myblog', ['ENV']);

    app.controller('BlogController', ['$http', 'GOOGLE_KEY', function($http, googleKey){
        var blog = this;
        blog.posts = [];
        $http.get('https://www.googleapis.com/blogger/v3/blogs/33279377/posts?key=' + googleKey).success(function(data){
            blog.posts = data["items"];
        });
    }]);

})();