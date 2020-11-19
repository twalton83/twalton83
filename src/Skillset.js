import React, { Component } from 'react'
import skills from './Skills.json'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
    Skillset :{
        width: '100%',
        height: 'auto',
    
        [theme.breakpoints.up('md')] : {
            "&hover:" : {
                transform: 'scale(1.1)',
                marginTop: '1rem',
            }
        } ,
        [theme.breakpoints.down('sm')] : {
            paddingBottom: '3rem',
        } 
    },
    SkillsetSkill : {
        margin: '1rem'
    }
   
})


class Skillset extends Component {
       
    render() {
        const {classes} = this.props
        const skillList = Object.entries(skills).map((e) => ( e[1]));
        const skillElements = skillList.map(skill =>(
            <Grid item xs={4} sm={2} key = {skill.name} className ={classes.SkillsetSkill}>
                <img alt ={skill.name} src={`https://icongr.am/devicon/${skill.image}.svg?size=148&color=currentColor`}></img>
            </Grid>
           
        ))

        return (
            <Grid container className={classes.Skillset}>
                {skillElements}
            </Grid>
        )
    }
}

export default withStyles(styles)(Skillset)