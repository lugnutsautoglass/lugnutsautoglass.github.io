import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Products from './products';
import Contact from './contact';
import Cart from './cart';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />  
        <Route exact path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
    </Switch>
)

export default Main;