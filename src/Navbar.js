import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './styles/Navbar.css'
import { Typography } from '@material-ui/core'
import { makeStyles, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    Navbar_link:{
        flexGrow: 1
    }
  }));

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#5e91f2"),
      backgroundColor: "#5e91f2",
      '&:hover': {
        backgroundColor: "#5e91f2",
      },
    },
  }))(Button);

export default function Navbar(props){

    const classes = useStyles();
    return (
    <AppBar position="sticky">
        <Toolbar>

        <Typography edge = "start" variant = "h4" component = "h1"> 
            <NavLink exact to="/" className="Navbar-title" >
            Tatiana.Codes
            </NavLink>  
        </Typography>
        <Typography variant="h6" className={classes.Navbar_link}>
            <NavLink exact to="/" activeClassName ="active-link" >
                About
            </NavLink>
        </Typography>
        <Typography variant="h6" className = {classes.Navbar_link}>
            <NavLink exact to="skills" activeClassName ="active-link" >
            Skills
            </NavLink>
        </Typography>
        <Typography variant="h6" className = {classes.Navbar_link}>
            <NavLink exact to="projects" activeClassName ="active-link" >
            Projects
            </NavLink>
        </Typography>
        
        <ColorButton>
            <NavLink exact to="contact" activeClassName ="active-link" >
                Contact Me
            </NavLink>
        </ColorButton>
    </Toolbar>
    </AppBar>
          
        )

    }
