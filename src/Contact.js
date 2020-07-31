import React, { Component } from 'react'
import EmailIcon from '@material-ui/icons/Email';

import {IconButton, Typography, Grid} from '@material-ui/core'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Typography variant = "h2">
                    Let's Chat!
                </Typography>
                <Grid>
                    <img alt ="LinkedIn Logo" src="https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor"></img>
                    <img alt ="Github Logo" src="https://icongr.am/devicon/github-original.svg?size=128&color=currentColor"></img>
                    <IconButton aria-label="email" color="primary" size="large">
                       <a href="mailto:hello@tatianacodes.com">
                            <EmailIcon size="medium"/>
                       </a>
                   </IconButton>
                </Grid>
                  
                  
            </div>
        )
    }
}
