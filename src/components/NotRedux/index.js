import React, { Component } from 'react';

import UserInput from '../common/UserInput';

class NotRedux extends Component {
	constructor() {
		super();

		this.state = { input: '' };
		this.onComponentInputChange = this.onComponentInputChange.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.input !== this.props.input) {
			this.setState({ input: this.props.input });
		}
	}

	onComponentInputChange(e) {
    this.setState({ input: e.target.value });
  } 

	render() {
		return (
			<div style={{padding: '10px', border: '1px solid blue', width: '50%'}}>
				<label style={{display: 'block'}}>This component does NOT have Redux</label>
				<div>
					<label style={{marginRight: '10px'}}>Input from App State</label>
					<UserInput value={this.props.input} onChange={this.onComponentInputChange} />
				</div>
				<div>
					<label style={{marginRight: '10px'}}>Input from Component State</label>
					<UserInput value={this.state.input} onChange={this.onComponentInputChange} />
				</div>
			</div>
		);
	}
};

export default NotRedux;