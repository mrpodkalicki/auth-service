import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import propTypes from 'prop-types';


import MainView from './MainView/MainView';
import NavigationBar from './NavigationBar';

import { makeStyles, withStyles } from '@material-ui/core/styles';

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
                <Route path="/"  exact components = {MainView}  />
            </BrowserRouter>
            <MainView/>
        </div>
    );
};


App.propTypes = {
    classes: propTypes.object.isRequired,
}

export default withStyles(styles)(App);