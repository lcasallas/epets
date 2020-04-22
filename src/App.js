import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

import ColorContext, { Information } from './Context/Information';

const App = () => {
  return (

    <BrowserRouter>

      <Switch>

        <ColorContext.Provider value={Information.data}>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />

        </ColorContext.Provider>

      </Switch>
    </BrowserRouter>

  );
};

export default App;
