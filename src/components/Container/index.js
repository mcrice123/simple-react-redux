import React, { Component } from 'react';

class Container extends Component {
	render() {
		return (
			<div style={{marginTop: '10px', padding: '10px', border: '1px solid green', width: '50%'}}>
				<label>This is a container ("smart component")</label>
			</div>
		);
	}
}

export default Container;