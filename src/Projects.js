import React, { Component } from 'react'
import {Grid} from '@material-ui/core'

import ProjectCard from './ProjectCard'
import projects from './Projects.json'
export default class Projects extends Component {
    render() {
        const projectList = Object.entries(projects).map((e) => ( e[1]));
        const projectCards = projectList.map(project =>(
            <Grid item xs={12} md={8} key = {project.name} className ="Projects-card">
                <ProjectCard
                name={project.name} 
                stack={project.stack}
                link={project.link}
                desc = {project.description}
                image = {project.image}
                />
            </Grid>
           
        ))
        return (
            <Grid container justify = "center">
                {projectCards}
            </Grid>
        )
    }
}
