import React, { Component } from 'react'
import { Typography, Grid, Paper, Divider } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Icon from '@material-ui/core/Icon';
const styles = theme =>  ({
    AboutMeParagraph : {
       width: 'auto', 
       color: '#e8e8e8'
    },  
    AboutMeSideProfile : {
        height: '100%',
        [theme.breakpoints.up('md')] :{ 
            height: '100%',
            paddingRight: '5rem'
        } 
    },
    
    h1 : {
        width: '100%',
        color: '#e8e8e8',
        [theme.breakpoints.down('sm')] :{ 
           fontSize: '2rem'
        } 
    },
    AboutMeGrid : {
            height : '100%',
            [theme.breakpoints.up('md')]: {
                marginTop: '10%'
              },
              [theme.breakpoints.down('sm')] :{ 
                height: '100vh'
             } 
    },
    subHeaders : {
        color: '#e8e8e8',
        borderBottom: '2px solid #f05454',
        marginBottom: "1rem",
        paddingBottom: '1rem'
    },
    button : {
        backgroundColor: "#f05454",
        borderRadius: "0",
        float: 'left',
        color: '#e8e8e8',
        "&:hover" : {
            backgroundColor: "#f05454"
        },
        "& a" :{
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1.2rem'
        },
        "& svg" : {
            margin: '0 auto'
        }
    }
})

class AboutMe extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid className={classes.AboutMeGrid} container alignItems = 'center' justifyContent = 'start'>
                <Grid item xs={12} md={5}>
                <Typography variant="h2" component="h1" align= "left" className= {classes.h1}>
                    Tatiana Walton
                </Typography>
                <Typography variant = "h5" className= {classes.subHeaders} component = "h2" align="left">
                    Full Stack Developer and Shopify Partner
                </Typography>
                <Typography className={classes.AboutMeParagraph} align="left"  paragraph = {true} variant = "body1">
                   I'm Tatiana, a fullstack web developer, specializing in MongoDB, Express, React, and Node, with a newfound love of Python. I am also a certified Shopify Partner and have experience in creating Liquid templates with Theme Kit. I have a love of learning and a deep sense of curiosity and inquisitiveness. 
                </Typography>
                <Typography className={classes.AboutMeParagraph} align="left"  paragraph = {true} variant = "body1">
                I built a professional foundation in retail streetwear, and landed a position as the social media manager for a wellness startup founded by a Grammy nominated singer in Los Angeles. Shortly after, I became an IT Jr. Project Manager and gained significant experience in working with client partners in high stakes software and hardware endeavors.
                </Typography>
                <Button className = {classes.button} endIcon={<NavigateNextIcon/>}>
                        <Link exact to='projects'>
                            See My Work 
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        )
    }
}


export default withStyles(styles)(AboutMe)