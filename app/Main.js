import React from 'react';

import Form from './Components/Children/Form';
import Results from './Components/Children/Results';
import Saved from './Components/Children/Saved';

import helpers from './utils/helper';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Hello',
			searchTerm: '',
			results: [],
			saved: []
		}

		this.setSearchTerm = this.setSearchTerm.bind(this);
		this.saveArticle = this.saveArticle.bind(this);
		this.deleteArticle = this.deleteArticle.bind(this);
	}

	componentDidMount() {
		helpers.getArticles()
			.then(function(results) {
				if(results.data != this.state.saved) {
					this.setState({
						saved: results.data
					});
					console.log(results);
				}
			}.bind(this));
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(this.state.searchTerm);
		if (this.state.searchTerm != prevState.searchTerm) {
			helpers.searchNYTimes(this.state.searchTerm)
				.then(function(results) {
					console.log(results);
					this.setState({
						results: results.data.response.docs
					});
				}.bind(this));
		}
	}

	saveArticle(index) {
		var article = this.state.results[index];
		console.log('article to save', article);
		helpers.saveArticle(article.headline.main, article.leading_paragraph)
			.then(function(data) {
				helpers.getArticles()
					.then(function(results) {
						if(results.data != this.state.saved) {
							this.setState({
								saved: results.data
							});
						}
					}.bind(this));
			}.bind(this));
	}

	deleteArticle(index) {
		var article = this.state.saved[index];
		console.log('article to delete', article);
		helpers.deleteArticle(article._id)
			.then(function(data) {
				helpers.getArticles()
					.then(function(results) {
						if (results.data != this.state.saved) {
							this.setState({
								saved: results.data
							})
						}
					}.bind(this))
			}.bind(this))
	}

	setSearchTerm(term) {
		if (this.state.searchTerm != term) {
			this.setState({
				searchTerm: term
			});
		}
	}

	render() {
		return (
			<div className="container">
				<h1>{this.state.message}</h1>
				<Form setSearchTerm = {this.setSearchTerm}/>
				<Results resultArticles = {this.state.results}  saveArticle = {this.saveArticle}/>
				<Saved savedArticles={this.state.saved} deleteArticle={this.deleteArticle}/>
			</div>
		)
	}
}

export default Main;