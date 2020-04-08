import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Layout from './Layout';
import Welcome from './pages/Welcome';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Welcome} />
        </Layout>
      </Switch>
      {/* <Header />
      <Welcome />
      <div className="App__content">
        <Cube />
        <MovesPanel />
        <MovesList />
      </div>
      <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
