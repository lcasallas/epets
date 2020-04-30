import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Toys from './pages/Toys';
import Food from './pages/Food';
import Clothes from './pages/Clothes';
import Esthethic from './pages/Esthethic';
import Medic from './pages/Medic';


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
          <Route exact path="/toys" component={Toys} /> 
          <Route exact path="/food" component={Food} />
          <Route exact path="/clothes" component={Clothes} />
          <Route exact path="/esthethic" component={Esthethic} />
          <Route exact path="/medic" component={Medic} />

          

        </ColorContext.Provider>

      </Switch>
    </BrowserRouter>

  );
};

export default App;
