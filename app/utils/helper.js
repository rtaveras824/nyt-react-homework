var axios = require('axios');

var helpers = {
	searchNYTimes: function(term) {
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
		var apiKey = 'api-key=d370723c9bb54a41b59192c8de8add73';
		var searchTerm = 'q=' + term;
		var query = url + apiKey + '&' + searchTerm;
		return axios.get(query)
			.then(function(results) {
				console.log('Not Working');
				return results;
			});
	},

	getArticles: function() {
		return axios.get('/api')
			.then(function(results) {
				return results;
			});
	},

	saveArticle: function(title, description) {
		return axios.post('/api', { title: title, summary: description })
			.then(function(results) {
				return results;
			});
	},

	deleteArticle: function(id) {
		return axios.post('/delete/' + id)
			.then(function(results) {
				return results;
			});
	}
}

module.exports = helpers;