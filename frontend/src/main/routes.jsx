import React from "react"

import { Switch, Route, Redirect } from "react-router"

import Home from "../components/home/home"
import Projects from "../components/projects/projects"
import RegisterProject from "../components/register-project/register-project"
import Contact from "../components/contact/contact"
import Documentation from "../components/documentation/documentation"
import Visitors from "../components/visitors/visitors"
import Statistics from "../components/statistics/statistics"
import Roadmap from "../components/roadmap/roadmap"

export default props => {
    return (
        <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/register" component={RegisterProject} />
            <Route path="/contact" component={Contact}/>
            <Route path="/documentation" component={Documentation}/>
            <Route path="/feedback" component={Visitors}/>
            <Route path="/statistics" component={Statistics}/>
            <Route path="/roadmap" component={Roadmap}/>
            <Redirect from="*" to="/" />
        </Switch>
    )
}