import React from 'react';

class Results extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div>
				<p>This is the results</p>
				{
					this.props.resultArticles.map(function(articles, index) {
						return (
							<div key={index}>
								<h2>{articles.headline.main}</h2>
								<p>{articles.lead_paragraph}</p>
								<button type="button" onClick={this.props.saveArticle.bind(this, index)}>
									
								</button>
							</div>
						)
					}.bind(this))
				}
			</div>
		)
	}
}

export default Results;