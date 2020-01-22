import React from "react";
import propTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';


import {images} from '../MainView.jsx'

const {arrow, person, triangle, trucksHeader} = images;

const styles = (theme) => ({
    color_box:{
        height:"25rem",
        background:"#0ADEB7",
        display:"flex",
        flexDirection:"column",
        padding:"0.2rem 5rem",
        position:"relative",
        // width:"100%"
        
    },

    color_box___text:{  
        fontFamily:"Merienda One, cursive",
        maxWidth:"68%",   
    },

    color_box__regis_cont:{
        // border:"solid red",
        position:"absolute",
        right:"0px",
        bottom:"0px",
        minWidth:"15%"
    },



    color_box__regis_box:{
        // border:"solid red",
        position:"relative",
    },

    color_box___text___smaller:{  
        fontFamily:"Vibur, cursive",
        fontSize:"2rem",
        position:"absolute",
        bottom:"7rem",

    },

    color_box__arrow:{
        position:"absolute",
        bottom:"2rem",
        left:"6.5rem"
    },

    color_box__triangle:{
        position:"absolute",
        bottom:"-4.3rem",
        right:"0px"

    },

    color_box__person_icon:{
        zIndex:"1",
        position:"absolute",
        bottom:"1rem",
        right:"0.8rem"
    },

    
    image_box:{
        display:"flex",
        justifyContent:"flex-end",
        position:"relative"

    },

    
    image_box__text:{
        fontSize:"5rem",
        // position:"absolute",
        right:"0px",
        zIndex:"2",
        fontFamily:"Rye",
        color:"white"
    },

    image_box__img:{
        backgroundImage:`${trucksHeader.src}`,
        width:"100%",
        height:"53vh",
        position:"absolute"

    },
})

class Header extends React.Component {
    constructor(prosp){
        super()
        this.preventDefault=() => {
            console.log("siema")
        }
    }

    

    render(){
        
        
        const {classes} = this.props;
        return(
            <Box >
                <Box className={classes.color_box} justifyContent="center"  alignItems="center">
                    <Typography  variant ="h2"   className = {classes.color_box___text}>
                        Do you want in a simple and fast way to manage your resources?
                    </Typography>
                    <Box className = { classes.color_box__regis_cont }>
                        <Box className = { classes.color_box__regis_box }>
                            <Typography variant = "body1" className = { classes.color_box___text___smaller }>
                                REGISTER
                            </Typography>
                            <img src = { arrow.src } alt = { arrow.alt }   className = { classes.color_box__arrow }></img>
                            <Link href="#"  onClick={this.preventDefault} >
                                <img  src = { person.src } alt = { person.alt }  className = {classes.color_box__person_icon}></img>
                            <img  src = { triangle.src } alt = { triangle.alt } className = {classes.color_box__triangle}></img>
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Box className = { classes.image_box }> 
                    <Typography className = { classes.image_box__text }>
                        Register and check for free !!!
                    </Typography>
                    <CardMedia image = { trucksHeader.src } title = { trucksHeader.alt } className = { classes.image_box__img }></CardMedia>
                </Box>
            </Box>
            
            
               
        )
    }
}

Header.propTypes = {
    classes: propTypes.object.isRequired,
}



export default withStyles(styles)(Header)