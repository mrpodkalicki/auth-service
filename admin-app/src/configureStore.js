import { createStore, applyMiddeleware, compose } from 'redux';
import reducer from './reducer';
import createLogger from 'redux-logger';

 const configureStore = ( initialState ={} ) => {
    const logger = createLogger();

    return createStore(reducer, initialState, applyMiddeleware(logger));


    
}
    
export default configureStore