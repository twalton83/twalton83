import React, { Component } from 'react'
import { Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
    Contact : {
        height: "100vh"
    }
})



class Contact extends Component {
    render() {
        const {classes} = this.props
        return (
                <Grid className={classes.Contact} container justify="center" alignContent = 'center' alignItems = 'center'>
                    <Grid item xs ={12} md={4}>
                    <a href="https://www.linkedin.com/in/tatianadwalton/">
                    <img alt ="LinkedIn Logo" src="https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor"></img>
                    </a>
                    </Grid>
                   <Grid item xs = {12} md={4}>
                    <a href ="https://github.com/twalton83">
                   <img alt ="Github Logo" src="https://icongr.am/devicon/github-original.svg?size=128&color=currentColor"></img>
                   </a>
                   </Grid>
                   <Grid item xs = {12} md={4}>
                    <a href="mailto:hello@tatianacodes.com">
                   <img src="https://tatianacodes.s3-us-west-2.amazonaws.com/emailIcon.png" style = {{"height" : "136px"}}alt="Email Me"/>
                   </a>
                   </Grid>
                   
                </Grid>
        )
    }
}

export default withStyles(styles)(Contact)