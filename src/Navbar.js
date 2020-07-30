import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import './styles/Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <header className = "Navbar">
                <h1>
                    Tatiana Walton
                </h1>
                <nav className = "Navbar-nav">
                    <Link 
                        className = "Navbar-link"
                        component = {NavLink}
                        to="/">
                            About
                    </Link>

                    <Link 
                        className = "Navbar-link"
                        component = {NavLink}
                        to="/projects">
                            Projects
                    </Link>

                    <Link 
                        className = "Navbar-link"
                        component = {NavLink}
                        to="/skills">
                            Skills
                    </Link>

                    <Link 
                        className = "Navbar-link"
                        component = {NavLink}
                        to="/contact">
                            Contact
                    </Link>
              
                </nav>
           
            </header>
        )
    }
}
