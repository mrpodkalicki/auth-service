import React from "react";
import propTypes from 'prop-types';


import Header from './Header.component/Header.component';
import SignIn from './SignIn.component/SignIn.component'

import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';



const styles = (theme) => ({
    root:{
        display:'flex',
    },
    container:{

        position:"relative",
        width:'100%'
    },

    container__box:{
        position:"absolute",
        zIndex:'3',
        backgroundColor:'white',
        top:'11rem',
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