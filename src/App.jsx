import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Welcome from './pages/Welcome';
import Game from './pages/Game';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/game" component={Game} />
        <Route exact path="/" component={Welcome} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
