import React from 'react';

import Form from './Components/Children/Form';
import Results from './Components/Children/Results';

import helpers from './utils/helper';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Hello',
			searchTerm: '',
			saved: []
		}

		this.setSearchTerm = this.setSearchTerm.bind(this);
	}

	componentDidMount() {
		helpers.getArticles()
			.then(function(results) {
				if(results.data != this.state.saved) {
					this.setState({
						saved: results.data
					});
				}
			}.bind(this));
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(this.state.searchTerm);
		if (this.state.searchTerm != prevState.searchTerm) {
			helpers.runQuery(this.state.searchTerm)
				.then(function(data) {

				});
		}
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
				<Results savedArticles = {this.state.saved}/>
			</div>
		)
	}
}

export default Main;