import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
// import { UserContext } from "./providers/UserProvider";
// import UserProvider from "./Context/UserProvider";
// import ColorContext, { Information } from './Context/Information';

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
