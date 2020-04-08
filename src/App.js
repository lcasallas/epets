import React from 'react'
import Home from './pages/Home';
import ColorContext, {Colors} from '../src/Context/Colors';

const App = () => {
  return (
    <ColorContext.Provider value={Colors.data}>
      <Home />
    </ColorContext.Provider>
  )
}


export default App;
