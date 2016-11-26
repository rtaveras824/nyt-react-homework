import React from 'react';

class Saved extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>This is the saved articles</p>
				{
					this.props.savedArticles.map(function(articles, index) {
						return (
							<div key={index}>
								<h2>{articles.title}</h2>
								<p>{articles.summary}</p>
								<button type="button" onClick={this.props.deleteArticle.bind(this, index)}>Delete</button>
							</div>
						)
					}.bind(this))
				}
			</div>
		)
	}
}

export default Saved;