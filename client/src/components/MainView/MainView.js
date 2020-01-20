import React from "react";
import propTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
    root:{
        display:'flex',
       
    },

    container__img:{
        width:"10rem",
        height:"10rem",
    }
});



class MainView extends React.Component{
    
    render(){
        const {
            classes
          } = this.props;

         
        return(
                <Container className ={classes.root}>
                    <Box className = {classes.container__img}>
                        IMG
                    </Box>
                    <Typography>
                        Welcome on me Side
                    </Typography>
                </Container>  
        )
    }
}


MainView.propTypes = {
    classes: propTypes.object.isRequired,
};

export default withStyles(styles)(MainView)