import React from 'react';
import Home from '../representional/Home';
import Gallery from '../representional/Gallery';
import Blog from '../representional/Blog';
import Contact from '../representional/Contact';
import Recipe from '../representional/Recipe';
import About from '../representional/About';
import { Route, Redirect } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Route path="/" exact component={ Home } />
            <Route path="/blog" exact component={ Gallery } />
            <Route path="/gallery" exact component={ Blog } />
            <Route path="/recipe" exact component={ Contact } />
            <Route path="/contact" exact component={ Recipe } />
            <Route path="/about" exact component={ About } />
            <Redirect from="/about" to="/" />
        </div>
    );
}

export default Body;