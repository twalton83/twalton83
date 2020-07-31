import React, { Component } from 'react'
import { Typography, Grid } from '@material-ui/core'
export default class AboutMe extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} md={6} >
                <Typography variant="h2" component="h1">
                    About
                </Typography>
                   <Typography variant = "subtitle-1">
                    Web Developer, JR. Project Manager, Social Media Manager
                </Typography>
                <Typography variant = "body1">

                </Typography>
                </Grid>
                <Grid item xs>

                </Grid>
                
            </Grid>
        )
    }
}
