import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

const App = () => {
  return (

    < UserProvider >
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />

        </Switch>
      </BrowserRouter>
    </UserProvider >
  );
};

export default App;
