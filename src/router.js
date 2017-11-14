import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
    </Switch>
)