import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInput from '../common/UserInput';
import { inputChanged } from '../actions.js';

export class Container extends Component {
	constructor() {
		super();

		this.state = { 
			input: ''
		};
		this.inputDidChange = this.inputDidChange.bind(this);
		this.appInputDidChange = this.appInputDidChange.bind(this);
	}

	inputDidChange(e) {
		console.log(e.target.value);
		this.setState({input: e.target.value});
	}

	appInputDidChange(e) {
		this.props.inputChanged(e.target.value);
	}

	render() {
		return (
			<div style={{marginTop: '10px', padding: '10px', border: '1px solid green', width: '50%'}}>
				<label style={{marginRight: '10px', display: 'block'}}>This is a <strong>container</strong> ("smart component")</label>
				<label style={{marginRight: '10px'}}>Input from App State</label>
				<UserInput style={{backgroundColor: 'yellow', color: 'green'}} value={this.props.value} onChange={this.appInputDidChange} />
				<label style={{marginRight: '10px'}}>Input from Component State</label>
				<UserInput value={this.state.input} onChange={this.inputDidChange} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		all: state,
		value: state.InputState.value,
	};
};
const mapDispatchToProps = {
	inputChanged,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);