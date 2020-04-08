import React from 'react';

export const Colors = {
  data:{
    blueT: "#03619c",
    yellowT: "#8c8f03",
    redT: "#9c0312"
  }
};

const ColorContext = React.createContext(Colors.data);

export default ColorContext;