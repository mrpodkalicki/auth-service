import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'

// import { UserTable } from './components/components';
// import thunk from 'redux-thunk';
//import rootReducer from './reducers/index';

//const store = createStore(rootReducer, applyMiddleware(thunk));
import App from './components/App';


ReactDOM.render(
    <Provider store = {createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
