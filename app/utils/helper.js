var axios = require('axios');

var helpers = {
	searchNYTimes: function(term) {
		var query = 'nytimes.com/api';
		return axios.get(query)
			.then(function(results) {
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
		return axios.post('/api', { title: title, description: description })
			.then(function(results) {
				return results;
			});
	}
}

module.exports = helpers;