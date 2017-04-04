'use strict'

var movieApi = require('./movie.js');

var threeFavoriteMovies = ["Tarzan", "Logan", "Ted"];
threeFavoriteMovies.forEach(function(film){
	movieApi(film);
});