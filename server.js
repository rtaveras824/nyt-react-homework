var express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	Article = require('./models/Article'),
	PORT = process.env.PORT || 8080;

//Body parser need for POST and GET requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('./public'));

//mongoose.connect('mongodb://localhost/newyorktimes');
mongoose.connect('mongodb://heroku_vtc5g08t:i2l47or091bmmvd4idpgmn07ho@ds111718.mlab.com:11718/heroku_vtc5g08t');

var db = mongoose.connection;

db.on('error', function(err) {
	if (err) {
		console.log('Mongoose error: ', err);
	}
})

db.once('open', function() {
	console.log('Successful connection');
})

app.get('/api', function(req, res) {
	Article.find({}, function(err, docs) {
		if (err) {
			console.log('Error');
		} else {
			console.log(docs);
			res.send(docs);
		}
	});
});

app.post('/api', function(req, res) {
	Article.create({ 'title': req.body.title, 'summary': req.body.summary }, function(err) {
		if (err) {
			console.log(err);
		} else {
			res.send('Article Saved');
		}
	});
});

app.post('/delete/:id', function(req, res) {
	Article.remove({ _id: req.params.id }, function(err) {
		if (err) {
			console.log(err);
		} else {
			res.send('Article Deleted');
		}
	})
})

app.listen(PORT, function() {
	console.log('Server listening on port', PORT);
})