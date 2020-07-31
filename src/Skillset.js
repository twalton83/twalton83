import React, { Component } from 'react'
import skills from './Skills.json'
import './styles/Skillset.css'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';
export default class Skillset extends Component {
       
    render() {
        const skillList = Object.entries(skills).map((e) => ( e[1]));
        const skillElements = skillList.map(skill =>(
            <Grid item xs={6} sm={3} key = {skill.name} className ="Skillset-skill">
                <img alt ={skill.name} src={`https://icongr.am/devicon/${skill.image}.svg?size=148&color=currentColor`}></img>
            </Grid>
           
        ))
        return (
            <Grid container className="Skillset">
                {skillElements}
            </Grid>
        )
    }
}
