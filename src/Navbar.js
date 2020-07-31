import React from 'react'
import {NavLink} from 'react-router-dom'
import './styles/Navbar.css'
import { Typography, IconButton, AppBar, Toolbar, Button, Hidden} from '@material-ui/core'
import { makeStyles, withStyles, useTheme} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import "@material-ui/core"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    Navbar_link:{
        flexGrow: 1
    },
    hide: {
        display: 'none',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
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
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
    <AppBar position="sticky">
        <Toolbar>
        <Hidden mdUp>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
      <MenuIcon />
    </IconButton>
    </Hidden>
        <Typography edge = "start" className= "title" variant = "h4" component = "h1"> 
            <NavLink exact to="/" className="Navbar-title" >
            Tatiana.Codes
            </NavLink>  
        </Typography>

        <Hidden smDown>
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
        </Hidden>
    </Toolbar>
    </AppBar>
    <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <IconButton  onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon  /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  {[{name: 'Skills', route : '/skills'} , { name: 'Projects', route: '/projects'}, {name: 'Contact Me', route:'/contact'}].map((text, index) => (
                    <NavLink  key={text.name} exact to={text.route} onClick={handleDrawerClose}>
                    <ListItem button >
                    <ListItemText className="Navbar-drawerLink" primary={text.name} />
                    </ListItem>
                    </NavLink>
                  ))}
                </List>
                <Divider />
               
              </Drawer>
              </div>
        )

    }
