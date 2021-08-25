import React from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  Hidden,
} from "@material-ui/core";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Navbar_link: {
    fontSize: "1.5rem",
    fontWeight: "300",
    textDecoration: "none",
  },
  NavLink: {
    fontSize: "1.5rem",
    fontWeight: "300",
    textDecoration: "inherit",
    color: "#e8e8e8",
    "& a": {
      color: "#e8e8e8",
    },
    "&active": {
      borderBottom: "2px solid #f05454",
    },
    "&:visited": {
      color: "white",
    },
    "&:hover": {
      borderBottom: "2px solid #f05454",
    },
  },
  hide: {
    display: "none",
  },
  toolBar: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#30475e",
    boxShadow: "none",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
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
    backgroundColor: "#30475e",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#30475e",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    backgroundColor: "#f05454",
  },
  drawerLink: {
    color: "#e8e8e8",
    textDecoration: "none",
  },
  navLinks: {
    color: "#e8e8e8",
    "& a:": {
      color: "#e8e8e8",
    },
    textDecoration: "none",
    "&:visited": {
      textDecoration: "none",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    backgroundColor: "#30475e",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  ActiveNavLink: {
    fontWeight: 500,
    borderBottom: "2px solid #f05454",
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#f05454"),
    backgroundColor: "#f05454",
    borderRadius: "0",
    boxShadow: "5px 5px rgba(0,0,0,.3);",
    "&:hover": {
      backgroundColor: "#f05454",
    },
    "& a": {
      color: theme.palette.getContrastText("#f05454"),
      textDecoration: "none",
      fontSize: "1.5rem",
      fontWeight: "500",
    },
    "&.NavLink": {
      "&:hover": {
        borderBottom: "none",
      },
    },
  },
}))(Button);

export default function Navbar(props) {
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
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar className={classes.toolBar}>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Typography variant="h6" className={classes.Navbar_link}>
              <NavLink
                exact
                to="/"
                className={classes.NavLink}
                activeClassName={classes.ActiveNavLink}
              >
                About
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.Navbar_link}>
              <NavLink
                className={classes.NavLink}
                exact
                to="/skills"
                activeClassName={classes.ActiveNavLink}
              >
                Skills
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.Navbar_link}>
              <NavLink
                className={classes.NavLink}
                exact
                to="/projects"
                activeClassName={classes.ActiveNavLink}
              >
                Projects
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.Navbar_link}>
              <NavLink
                className={classes.NavLink}
                exact
                to="/blog"
                activeClassName={classes.ActiveNavLink}
              >
                Blog
              </NavLink>
            </Typography>

            <ColorButton>
              <NavLink exact to="/contact">
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
          <IconButton
            className={classes.drawerLink}
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            { name: "About", route: "/" },
            { name: "Skills", route: "/skills" },
            { name: "Projects", route: "/projects" },
            { name: "Contact Me", route: "/contact" },
            { name: "Blog", route: "/blog" },
          ].map((text, index) => (
            <NavLink
              className={classes.navLinks}
              key={text.name}
              exact
              to={text.route}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemText
                  className={classes.drawerLink}
                  primary={text.name}
                />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
