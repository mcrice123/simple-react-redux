import React, { Component } from 'react';

import UserInput from '../common/UserInput';

class Container extends Component {
	constructor() {
		super();

		this.state = { 
			input: ''
		};
		this.inputDidChange = this.inputDidChange.bind(this);
	}

	inputDidChange(e) {
		console.log(e.target.value);
		this.setState({input: e.target.value});
	}

	render() {
		return (
			<div style={{marginTop: '10px', padding: '10px', border: '1px solid green', width: '50%'}}>
				<label style={{marginRight: '10px', display: 'block'}}>This is a <strong>container</strong> ("smart component")</label>
				<label style={{marginRight: '10px'}}>Input from App State</label>
				<UserInput />
				<label style={{marginRight: '10px'}}>Input from Component State</label>
				<UserInput value={this.state.input} onChange={this.inputDidChange} />
			</div>
		);
	}
}

export default Container;