import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducer.js';
import App from './components/App';

let store = createStore(reducers);

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('root'));

