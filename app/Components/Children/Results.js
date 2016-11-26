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
					this.props.savedArticles.map(function(articles, index) {
						return (
							<div key={index}>
								<h2>{articles.title}</h2>
								<p>{articles.summary}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Results;