var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		unique: true,
		required: true
	},
	summary: {
		type: String
	},
	date: {
		type: Date
	}
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;