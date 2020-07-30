import React, { Component } from 'react'
import skills from './Skills.json'
import './styles/Skillset.css'
export default class Skillset extends Component {
       
    render() {
        const skillList = Object.entries(skills).map((e) => ( e[1]));
        const skillElements = skillList.map(skill =>(
            <div className ="Skillset-skill">
                <img alt ={skill.name} src={`https://icongr.am/devicon/${skill.image}.svg?size=164&color=currentColor`}></img>
            </div>
           
        ))
        return (
            <div className="Skillset">
                {skillElements}
            </div>
        )
    }
}
