import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	handleChange(e) {
		var newState = {};
		newState[e.target.id] = e.target.value;
		this.setState(newState);
	}

	handleClick() {
		this.props.setSearchTerm(this.state.term);
	}

	render() {
		return (
			<div>
				<p>This is the Form</p>
				<input type="text" id="term" name="searchTerm" onChange={this.handleChange.bind(this)}/>
				<button type="button" onClick={this.handleClick.bind(this)}>Submit</button>
			</div>
		)
	}
}

export default Form;