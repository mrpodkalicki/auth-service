import React from "react";
import propTypes from 'prop-types';


import Header from './Header/Header';
import Offer from './Offer/Offer';

import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';


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
            <div>
                <Header/>
                <Offer/>
            </div>
              
               
        )
    }
}


MainView.propTypes = {
    classes: propTypes.object.isRequired,
};

export default withStyles(styles)(MainView)