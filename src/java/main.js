import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './reducers/index.js';
import initialState from './../../initialState.js';

const middleware = applyMiddleware(createLogger());
const store = createStore(reducer, middleware);

const app = document.getElementById('app');

ReactDOM.render((
	<Provider store={store}>
	    <Router >
	   		<App/>
	    </Router>
    </Provider>
), app);

