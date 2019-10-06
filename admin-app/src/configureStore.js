import { createStore, applyMiddeleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'
export default   configureStore = ( initialState ={} ) => {
  
    return  createStore( reducer, compose( applyMiddeleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() :f => f
    ));


    
}
    
