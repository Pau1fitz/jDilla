var myApp = angular.module('jDillaApp', [])

.factory('Music', function ($http) {

    var o = {
        songs: []
    };

    o.getNextSongs = function () {
        return $http.jsonp('https://itunes.apple.com/search?term=j+dilla&limit=25?format=jsonp&callback=JSON_CALLBACK')
    }
    return o
})


myApp.controller('jDillaCtrl', ['$scope', '$http', 'Music', function ($scope, $http, Music) {

    Music.getNextSongs()
        .success(function (data) {
        for (var i = 0; i < data.resultCount; i++) {
            $scope.songs.push(data.results[i].previewUrl)
        }
    });

    $scope.songs = Music.songs;
    var media = new Audio();

    $scope.playSong = function () {
        media.pause();
        media = new Audio($scope.songs[randomSong()]);
        media.play();
    }

    randomSong = function(){
    	return Math.round(Math.random() * ($scope.songs.length - 1));
    }

}]);

