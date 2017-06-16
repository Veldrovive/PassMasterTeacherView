import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import NoExample from './components/NoExample';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/NoExample" component={NoExample}/>
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;