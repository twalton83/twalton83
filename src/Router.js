import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import AboutMe from './AboutMe';
import Skillset from './Skillset';
import Projects from './Projects'
import Contact from './Contact';
import './styles/Router.css'

export default class Router extends Component {
    render() {
        return (
            <div className = 'Router'>
                <Switch>
                    <Route exact path = "/" render= {() => <AboutMe/>}/>
                    <Route exact path = "/projects" render= {()=><Projects/>}/>
                    <Route exact path = "/skills" render= {()=><Skillset/>}/>
                    <Route exact path = "/contact" render= {()=><Contact/>}/>
                </Switch>
            </div>
        )
    }
}
