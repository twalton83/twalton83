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

                <Grid item xs={12} md={6}>
                <Paper className="AboutMe-paper" elevation={4}>

                <Typography className="AboutMe-paragraph" align="center"  paragraph = {true} variant = "body1">
                    I've worn many hats in the last 6 years. Adidas Originals team captain while in college, to social media manager for a celebrity-founded health and wellness startup, to an IT Jr. project manager, to an independent Shopify store owner, to MERN stack web developer. Needless to say, I take pride in being a jack of all trades with a lifetime learning mentality. Being a multifaceted individual keeps it light and fun for me, and gives me a perspective not many have to offer.  
                </Typography>
                <Divider variant="middle"/>
                <Typography className="AboutMe-paragraph"  align="center"  paragraph = {true} variant = "body1">
                    Due to my diverse professional experience, I enjoy being able to holistically consult with my clients. I address root causes, not symptoms, and believe that a strong foundation relies on interworking parts that perform at a high level. 
                </Typography>
                <Divider variant="middle"/>
                <Typography className="AboutMe-paragraph"  align="center" paragraph = {true} variant = "body1">
                    In my free time, I collect sneakers and streetwear, as well as enjoy live music, and so I love to consult with businesses and folks in those industries. I live authentically in my professional life, and bring my whole self to the table. WYSIWYG.
                </Typography>
                <Divider variant="middle"/>
                <Typography className="AboutMe-paragraph"  align="center" paragraph = {true} variant = "body1">
                   I am based in Orange County, California, but I am happy to travel.

                   Let's chat!
                </Typography>
                </Paper>
                </Grid>
               
                
            </Grid>
        )
    }
}
