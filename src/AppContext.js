import React from 'react';

const AppContext = React.createContext({
  addDrink: () => {},
  deleteDrink: () => {},
  drinks: [],
  loading: true,
  getDrinks: () => {},
});

export default AppContext;
