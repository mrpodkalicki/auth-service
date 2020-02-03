import React from 'react';
import propTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
    offers_box:{
        border:"solid red",
        width:"100%",
        height:"30rem"
    },
     offers_box__header_text:{
        git 
     },

    offers_box__mange_workers:{
         border: "solid black",
    },
    offers_box__mange_vehicles:{
         border: "solid green",
    },
})



class Offer extends React.Component{
    constructor(){
        super()
    }

    render(){
        const {classes} = this.props;

        return(
            <Box className = { classes.offers_box }>
                <Typography className = {classes.offers_box__header_text }>Offers</Typography>
                <Box className = { classes.offers_box__mange_workers }> 
                    <CardHeader>
                        <Typography>manage workers</Typography>
                    </CardHeader>
                    <CardMedia>

                    </CardMedia>
                </Box>
                <Box className = { classes.offers_box__mange_vehicles }>
                    <CardHeader>
                        <Typography>manage vehicles</Typography>
                    </CardHeader>
                    <CardMedia>
                        
                    </CardMedia>
                </Box>
            </Box>
        )
    }
}

Offer.propTypes = {
    classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Offer);