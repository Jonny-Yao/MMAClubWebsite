import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {Switch, Route} from 'react-router-dom';
{/* main is used as the routing component*/}
const Main = ()=>(
    <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/MMA-Club-Website/" component = {Home}/>
        <Route path="/about" component = {About} />
        <Route path="/contact" component = {Contact} />
    </Switch>
)

export default Main;