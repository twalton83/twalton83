import React, { Component } from 'react'
import { Typography, Grid, Paper, Divider } from '@material-ui/core'
import './styles/AboutMe.css'
export default class AboutMe extends Component {
    render() {
        return (
            <Grid className="AboutMe-grid" container justify="center" alignContent = 'center' alignItems = 'center'>
                <Grid item xs={12} md={6} >
                <Typography variant="h2" component="h1">
                    Tatiana Walton
                </Typography>
                <Typography variant = "h6">
                    Web Developer | Jr. Project Manager | Social Media Consulting 
                </Typography>
                <img className="AboutMe-img" alt="Tatiana Walton" src = 'https://tatianacodes.s3-us-west-2.amazonaws.com/profile.jpg'/>
                </Grid>

                <Grid item xs={12} md={6}>
                <Paper className="AboutMe-paper" elevation={4}>

                <Typography className="AboutMe-paragraph" align="center"  paragraph = {true} variant = "body1">
                    I'm a former high performing adidas Originals team captain turned high organic growth social media manager for a celebrity-headed startup, turned six-figure portfolio Jr. project manager. turned Shopify webstore owner and digital marketer, turned web developer. Needless to say, I have always been a bit of a jack of all trades with a high level of interest in many different fields. Being a multifaceted individual keeps it light and fun for me, and gives me a perspective not many have to offer. I consider myself a lifelong learner and find satisfaction in simply attaining knowledge. 
                </Typography>
                <Divider variant="middle"/>
                <Typography className="AboutMe-paragraph"  align="center"  paragraph = {true} variant = "body1">
                    Having experience in multiple areas of tech, I enjoy being able to consult for my clients with a holistic mindset. A strong digital strategy is made up of many parts to create a whole, and all parts must work together!
                </Typography>
                <Divider variant="middle"/>
                <Typography className="AboutMe-paragraph"  align="center" paragraph = {true} variant = "body1">
                    In my free time, I collect sneakers and streetwear, as well as enjoy live music, and I love to consult with businesses and folks in those industries. I am based in Orange County, California.
                </Typography>
                </Paper>
                </Grid>
               
                
            </Grid>
        )
    }
}
