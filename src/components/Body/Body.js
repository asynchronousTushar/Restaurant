import React from 'react';
import Home from '../representional/Home';
import Gallery from '../representional/Gallery';
import Blog from '../representional/Blog';
import Contact from '../representional/Contact';
import Recipe from '../representional/Recipe';
import About from '../representional/About';
import { Route, Redirect, Switch } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/recipe" exact component={Recipe} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/about" exact component={About} />
                <Redirect from="/home" to="/" exact />
            </Switch>
        </div>
    );
}

export default Body;