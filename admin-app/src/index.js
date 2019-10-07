import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import { AppContainer } from 'react-hot-loader'
import * as serviceWorker from './serviceWorker';

import  confStore  from './configureStore';

const container =document.getElementById('root') 
ReactDOM.render(
    <AppContainer>
       
        <App /> 
   
    </AppContainer>,
    container
    
 
    


);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
