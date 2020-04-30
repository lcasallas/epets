import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Section from './pages/Section';

import ColorContext, { Information } from './Context/Information';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <ColorContext.Provider value={Information.data}>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/section/:name/:pet" component={Section} />
          </ColorContext.Provider>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
