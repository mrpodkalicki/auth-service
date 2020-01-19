import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';

class NavigationBar extends React.Component {
   
   
    
    classesFun = () =>{
         const useStyles = makeStyles(theme => ({
             root: {
                 flexGrow: 1,
                 
             },
             menuButton: {
                 marginRight: theme.spacing(2),
             },
             title: {
                 flexGrow: 1,
             },
         }));

        const classes = useStyles()
        return classes ;
    }

    render(){
         
        return (
            <div>
                <div className={this.classesFun.root}>
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton edge="start" className={this.classesFun.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        );
    }
        
};

export default NavigationBar;