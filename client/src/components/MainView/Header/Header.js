import React from "react";
import propTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import {images} from '../MainView.jsx'






const styles = (theme) => ({
    color_box:{
        height:"20rem",
        background:"#0ADEB7",
        display:"flex",
        
        padding:"0.2rem 5rem",
        position:"relative",
    },

    color_box___text:{  
        fontFamily:"Merienda One, cursive",
        maxWidth:"68%",   
    },
    color_box___text___smaller:{  
        fontFamily:"Vibur, cursive",
        fontSize:"2rem"     
    },

    color_box__regis_box:{
        border:"solid red",
        position:"absolute",
        bottom:"0px",
        right:"0px",
    },

    color_box__arrow:{
        
    },

    color_box__triangle:{},

    color_box__person_icon:{}

})




class Header extends React.Component {
    

    render(){
        console.log(images)
        const {classes} = this.props;
        return(
            <Box className={classes.color_box} justifyContent="center"  alignItems="center">
                <Typography  variant ="h2"   className = {classes.color_box___text}>
                    Do you want in a simple and fast way to manage your resources?
                </Typography>
                <Box className = {classes.color_box__regis_box}>
                    <Typography variant = "body1" className = {classes.color_box___text___smaller}>
                        REGISTER
                    </Typography>
                    <img className = {classes.color_box__arrow}>
                        
                    </img>
                    <img className = {classes.color_box__person_icon}>

                    </img>
                    <img className = {classes.color_box__triangle}>

                    </img>

                </Box>
               
            </Box>
        )
    }
}

Header.propTypes = {
    classes: propTypes.object.isRequired,
}



export default withStyles(styles)(Header)