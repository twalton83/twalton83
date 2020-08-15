import React, { Component } from 'react'
import { Typography, Grid, Paper, Divider } from '@material-ui/core'
import './styles/AboutMe.css'
export default class AboutMe extends Component {
    render() {
        return (
            <Grid className="AboutMe-grid" container justify="center" alignContent = 'center' alignItems = 'center'>
                <Grid item xs={12} md={6} className="AboutMe-sideProfile">
                <Grid container justify="center" alignContent = 'center' alignItems = 'center' className="sideProfile">
                <Typography variant="h2" component="h1">
                    Tatiana Walton
                </Typography>
                <Typography variant = "h6">
                    Web Developer | Jr. Project Manager | Social Media Consulting 
                </Typography>
                <img className="AboutMe-img" alt="Tatiana Walton" src = 'https://tatianacodes.s3-us-west-2.amazonaws.com/profile.jpg'/>
                </Grid>
                </Grid>

                <Grid className ="paper-container" item xs={12} md={6}>
                <Paper className="AboutMe-paper" elevation={4}>

                <Typography className="AboutMe-paragraph" align="center"  paragraph = {true} variant = "body1">
                    Hey! I'm Tatiana, a MERN stack web developer with a newfound love of Python, and have dabbled briefly in PHP. I am also a certified Shopify Partner and have experience in creating Liquid templates with Theme Kit. I've worn many hats in the last 6 years. I built a foundation in retail streetwear, and soon found myself as the social media manager for a wellness startup founded by a Grammy nominated singer in Hollywood. Shortly after, I became an IT Jr. Project Manager, and somehow came to fall in love with the programming aspect of the field. I take pride in being a jack of all trades with a lifetime learning mentality, and leverage my diverse experience in any role.
                </Typography>
                <Divider variant="middle"/>
                <Typography className="AboutMe-paragraph"  align="center"  paragraph = {true} variant = "body1">
                    I enjoy being able to holistically consult with my clients, drawing from those experiences in many fields. I address root causes, not symptoms, and believe that a strong foundation relies on interworking parts that perform at a high level. I uphold a rule for frequent communication, and love to involve even the least technical clients in the process.
                </Typography>
                <Divider variant="middle"/>
                <Typography className="AboutMe-paragraph"  align="center" paragraph = {true} variant = "body1">
                    In my free time, I collect sneakers and streetwear, as well as enjoy live music, and so I love to consult with clients in those industries. I live authentically in my professional life, and bring my whole self to the table. WYSIWYG, and WYG is a developer with an "ear to the streets" who thrives in a modern, inclusive, and forward-thinking environment. 
                </Typography>
                <Divider variant="middle"/>
                <Typography className="AboutMe-paragraph"  align="center" paragraph = {true} variant = "body1">
                   I am based in Orange County, California, but I am happy to travel if the project calls for it.

                   Let's chat about your project!
                </Typography>
                </Paper>
                </Grid>
               
                
            </Grid>
        )
    }
}
