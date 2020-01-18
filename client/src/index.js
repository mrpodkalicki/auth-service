import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { UserTable } from './components/components';
//import thunk from 'redux-thunk';
//import rootReducer from './reducers/index';

//const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<UserTable />, document.querySelector('#root'));
