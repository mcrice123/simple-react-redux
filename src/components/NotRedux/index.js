import React, { Component } from 'react';

import UserInput from '../common/UserInput';

class NotRedux extends Component {
	constructor() {
		super();

		this.state = { value: '' };
		this.onComponentInputChange = this.onComponentInputChange.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.value !== this.props.value) {
			this.setState({ value: this.props.value });
		}
	}

	onComponentInputChange(e) {
    this.setState({ value: e.target.value });
  } 

	render() {
		return (
			<div style={{padding: '10px', border: '1px solid blue', width: '50%'}}>
				<label style={{display: 'block'}}>This component does NOT have Redux</label>
				<div>
					<label style={{marginRight: '10px'}}>Input from App State</label>
					<UserInput value={this.props.value} onChange={this.props.onChange} style={{backgroundColor: 'yellow', color: 'blue'}} />
				</div>
				<div>
					<label style={{marginRight: '10px'}}>Input from Component State</label>
					<UserInput value={this.state.value} onChange={this.onComponentInputChange} />
				</div>
			</div>
		);
	}
};

export default NotRedux;