import React from 'react'
import Home from './pages/Home';
import ColorContext, {Information} from './Context/Information';

const App = () => {
  return (
    <ColorContext.Provider value={Information.data}>
      <Home />
    </ColorContext.Provider>
  )
}


export default App;
