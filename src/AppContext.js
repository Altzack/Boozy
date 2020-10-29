import React from 'react';

const AppContext = React.createContext({
  addDrink: () => {},
  deleteDrink: () => {},
  drinks: [],
  getDrinks: () => {},
});

export default AppContext;
