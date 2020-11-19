
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin: "1rem",
    boxShadow: '0px 7px 10px rgba(0,0,0,0.5)'
  
  },
  media: {
    height: 50,
    marginTop: '20px',
    paddingTop: '56.25%', // 16:9
    backgroundSize : "contain"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  link : {
    textDecoration: 'none',
    color: '#FFFFFF',
    "&:visited": {
      color: '#FFFFFF'
    } 
  },
  button : {
    backgroundColor: '#30475e',
    "&:hover" :{
      backgroundColor: '#30475e'
    }
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardHeader
    
        title={props.name}
        subheader={props.stack}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.name}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p" paragraph>
          {props.desc}
        </Typography>
        {props.link ? 
        <Typography variant="h6">
          <Button className={classes.button}>
            <a className = {classes.link} href={props.link} aria-label="link" target="_blank" rel = "noopener noreferrer"> View Project
            </a>
          </Button>
        </Typography>
          : 
       <p>Please Inquire To View Code/Project</p>
      }
      </CardContent>
    </Card>
  );
}