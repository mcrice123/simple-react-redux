import React, { Component } from 'react';

import UserInput from '../common/UserInput';

export default class App extends Component {
  constructor() {
  	super();

  	this.state = { count: 0 };
  }

  onClickAddOne() {
  	console.log("clicked");
  	const new_count = this.state.count + 1;
  	this.setState({ count: new_count });
  }

  render() {
    return (
      <div style={{marginLeft: '20px'}}>
      	<h1 style={{marginTop: '30px'}}>My awesome app with Redux</h1>

        <div id="app-component" style={{border: '1px solid red', padding: '10px', width: '50%'}}>
      	  <button onClick={this.onClickAddOne.bind(this)} style={{marginBottom: '10px', marginTop: '50px'}}>Add One</button>

          <UserInput placeholder="Input Box 1" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value})} style={{display: 'block'}} />

          <h2 style={{marginTop: '50px'}}>What's in the App state?</h2>
          <p>Current Count: <span style={{color: 'red'}}>{this.state.count}</span></p>
          <p>Input Box 1: <span style={{color: 'red'}}>{this.state.value}</span></p>
        </div>


      </div>
    );
  }
}
