import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInput from '../common/UserInput';
import NotRedux from '../NotRedux';
import Container from '../Container';
import { inputChanged, countChanged } from '../actions.js';

export class App extends Component {
  constructor() {
  	super();

  	this.state = { 
      count: 0,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onClickAddOne() {
  	console.log("clicked");
  	const new_count = this.props.count + 1;
  	//this.setState({ count: new_count });
    this.props.countChanged(new_count);
  }

  onInputChange(e) {
    this.props.inputChanged(e.target.value);
  }

  render() {
    return (
      <div style={{marginLeft: '20px', marginRight: '20px'}}>
      	<h1 style={{marginTop: '30px'}}>My awesome app with Redux</h1>

        <div id="app-component" style={{border: '1px solid red', padding: '10px', width: '100%'}}>
      	  <button onClick={this.onClickAddOne.bind(this)} style={{marginBottom: '10px', marginTop: '50px'}}>Add One</button>

          <UserInput placeholder="App Input" value={this.props.value} onChange={this.onInputChange} style={{display: 'block', backgroundColor: 'yellow'}} />

          <div>
            <h2 style={{marginTop: '50px'}}>What is in the App state?</h2>
            <p style={{backgroundColor: 'yellow', width: '25%'}}>Current Count: <span style={{color: 'red'}}>{this.props.count}</span></p>
            <p style={{backgroundColor: 'yellow', width: '25%'}}>Input Box 1: <span style={{color: 'red'}}>{this.props.value}</span></p>
          </div>

          <div style={{display: 'inline', width: '100%'}}>
            <NotRedux value={this.props.value} onChange={this.onInputChange} />

            <Container />
          </div>
        
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    value: state.InputState.value,
    count: state.InputState.count,
  };
}

const mapDispatchToProps = {
  inputChanged,
  countChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
