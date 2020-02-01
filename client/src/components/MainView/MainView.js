import React from "react";
import propTypes from 'prop-types';


import Header from './Header/Header';
import SignIn from './SignIn.component'



import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Redirect } from "react-router-dom";

const styles = (theme) => ({
    root:{
        display:'flex',
        // position:'relative',
   
       
    },
    container:{

        position:"relative",
        width:'100%'
    },

    
    container__box:{
        position:"absolute",
        zIndex:'3',
        backgroundColor:'white',
        top:'5rem',
        left:'40vw'
    },

    container__sign_in_box:{
        position:"absolute",
        border:'solid red'
    },

    container__img:{
        width:"10rem",
        height:"10rem",
    }
});



class MainView extends React.Component{
    
    render(){
        const { classes } = this.props;
        return(
               <Box className = {classes.container}>
                   <Box className = { classes.container__box }>
                        <SignIn className={classes.container__sign_in_box}/>
                   </Box>
                   
                   <Header/>
                   
               </Box>
        )
    }
}


MainView.propTypes = {
    classes: propTypes.object.isRequired,
};

export default withStyles(styles)(MainView)