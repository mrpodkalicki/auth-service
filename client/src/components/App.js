import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import propTypes from 'prop-types';


import Start from './Start.view/Start.view';
import NavigationBar from './Start.view/NavigationBar';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root:{
        fontSize:"10px",
        boxSizing:"border-box",
        margin:"0px",
        padding:"0px",
        
    }
})

const App = (props) =>{
    const {classes} = props
    return (
        <div className = {classes.root}>
            <NavigationBar/>
            <BrowserRouter>
                <Route path="/"  exact components = {Start}  />
            </BrowserRouter>
            <Start/>
        </div>
    );
};


App.propTypes = {
    classes: propTypes.object.isRequired,
}

export default withStyles(styles)(App);