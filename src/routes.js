import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;