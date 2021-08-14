import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  Contact: {
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  form: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
    },
    margin: "0 auto",
    fontSize: "24px",

    color: "white",
    "& label": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",

      "& input": {
        width: "100%",
        fontSize: "18px",
        backgroundColor: "transparent",
        color: "white",
        border: "none",
        borderBottom: "3px solid #F05554",
      },
    },

    "& textarea": {
      color: "white",
      width: "100%",
      minHeight: "150px",
      backgroundColor: "transparent",
      border: "3px solid #F05554",

      fontFamily: "'Roboto', sans-serif;",
      fontSize: "18px",
    },

    "& button": {
      width: "64px",
      height: "48px",
      fontSize: "24px",
      marginLeft: "91%",
      color: theme.palette.getContrastText("#f05454"),
      backgroundColor: "#f05454",
      borderRadius: "0",
      border: "none",
      boxShadow: "5px 5px rgba(0,0,0,.3);",
      "&:hover": {
        backgroundColor: "#f05454",
      },

      [theme.breakpoints.down("sm")]: {
        marginLeft: "85%",
      },
    },
  },
});

class Contact extends Component {
  render() {
    function handleClick(e) {
      e.preventDefault();
    }
    const { classes } = this.props;

    return (
      <Grid
        className={classes.Contact}
        container
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <form className={classes.form} name="contact" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Your Name: <input type="text" name="name" required />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" required />
              </label>
            </p>
            <p>
              <label>
                Company: <input type="company" name="company" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" required></textarea>
              </label>
            </p>
            <p>
              <button onClick={handleClick} type="submit">
                Send
              </button>
            </p>
          </form>
        </Grid>
        <Grid item xs={12} md={4}>
          <a href="https://www.linkedin.com/in/tatianadwalton/">
            <img
              alt="LinkedIn Logo"
              src="https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor"
            ></img>
          </a>
        </Grid>
        <Grid item xs={12} md={4}>
          <a href="https://github.com/twalton83">
            <img
              alt="Github Logo"
              src="https://icongr.am/devicon/github-original.svg?size=128&color=currentColor"
            ></img>
          </a>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Contact);
