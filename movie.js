'use strict'

// console.log(process.argv);
var request = require('request');
var getMovie = function(movieTitle){
	var link = "http://www.omdbapi.com/?t=" + movieTitle;
	request(link, function(error, response, body) {
		var movieInfo = JSON.parse(body);
		console.log(movieInfo.Title + ", Metascore: " +movieInfo.Metascore);
})
};

module.exports = getMovie;