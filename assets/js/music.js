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

    var media = new Audio();

    $scope.songs = Music.songs;

    Music.getNextSongs()
        .success(function (data) {
        for (var i = 0; i < data.resultCount; i++) {
            $scope.songs.push(data.results[i].previewUrl)
        }
    });

    $scope.playSong = function () {
        media.pause();
        media = new Audio($scope.songs[randomSong()]);
        media.play();
    }

     $scope.stopSong = function () {
        media.pause();
    }

    randomSong = function(){
    	return Math.round(Math.random() * ($scope.songs.length - 1));
    }

}]);

