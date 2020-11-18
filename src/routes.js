import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/app';
import Home from './components/home';
import Quote from './components/quote';
import Navbar from './components/navbar';

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
