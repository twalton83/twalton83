import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
const styles = (theme) => ({
  AboutMeParagraph: {
    width: "auto",
    color: "#e8e8e8",
  },
  AboutMeSideProfile: {
    height: "100%",
    [theme.breakpoints.up("md")]: {
      height: "100%",
      paddingRight: "5rem",
    },
  },

  h1: {
    width: "100%",
    color: "#e8e8e8",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  AboutMeGrid: {
    height: "100%",
    [theme.breakpoints.up("md")]: {
      marginTop: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
  },
  subHeaders: {
    color: "#e8e8e8",
    borderBottom: "2px solid #f05454",
    marginBottom: "1rem",
    paddingBottom: "1rem",
  },
  button: {
    backgroundColor: "#f05454",
    borderRadius: "0",
    float: "left",
    color: "#e8e8e8",
    "&:hover": {
      backgroundColor: "#f05454",
    },
    "& a": {
      color: "#FFFFFF",
      textDecoration: "none",
      fontWeight: 500,
      fontSize: "1.2rem",
    },
    "& svg": {
      margin: "0 auto",
    },
  },
});

class AboutMe extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        className={classes.AboutMeGrid}
        container
        alignItems="center"
        justifyContent="start"
      >
        <Grid item xs={12} md={5}>
          <Typography
            variant="h2"
            component="h1"
            align="left"
            className={classes.h1}
          >
            Tatiana Walton
          </Typography>
          <Typography
            variant="h5"
            className={classes.subHeaders}
            component="h2"
            align="left"
          >
            Software Engineer
          </Typography>
          <Typography
            className={classes.AboutMeParagraph}
            align="left"
            paragraph={true}
            variant="body1"
          >
            I'm Tatiana, a Software Engineer @ Lever with a speciality in
            MongoDB, Express, React, and Node. I serve as a Core Maintainer for
            The Odin Project, an open source web development bootcamp that
            garners hundreds of thousands of unique visitors yearly. I am also a
            certified Shopify Partner with experience in creating Liquid
            templates with Theme Kit. I am a life-long learner and eager to pick
            up new technologies just for the fun of it.
          </Typography>
          <Typography
            className={classes.AboutMeParagraph}
            align="left"
            paragraph={true}
            variant="body1"
          >
            During my time at both Lever and as a Maintainer for The Odin
            Project, I've worked in a agile development environment and gained
            ownership of particular features and projects. I have bashed bugs
            impacting some of our largest customers at work, and rolled out
            features impacting tens of thousands of users in The Odin Project
            community!
          </Typography>
          <Button className={classes.button} endIcon={<NavigateNextIcon />}>
            <Link exact to="projects">
              See My Work
            </Link>
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AboutMe);
