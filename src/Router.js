import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import AboutMe from './AboutMe';
import Skillset from './Skillset';
import Projects from './Projects'
import Contact from './Contact';
import AllPosts from './AllPosts';
import SinglePost from './SinglePost';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
    Router : {
        width: '100%',
        height: '90vh',
    }
})

class Router extends Component {
    render() {
        return (
          <div>
            <Switch>
              <Route exact path="/" render={() => <AboutMe />} />
              <Route exact path="/projects" render={() => <Projects />} />
              <Route exact path="/skills" render={() => <Skillset />} />
              <Route exact path="/contact" render={() => <Contact />} />
              <Route component={AllPosts} path="/blog" exact />
              <Route component={SinglePost} path="/blog/:slug" />
            </Switch>
          </div>
        );
    }
}

export default withStyles(styles)(Router)