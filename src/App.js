import React from 'react';
import './styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';
import Product from './components/Product';

export const App = () => (
  <div>
    <Route component={Home} path="/" />
    <Switch>
      <Route component={Results} exact path="/items" />
      <Route component={Product} path="/items/:id" />
    </Switch>
  </div>
);

export default App;
