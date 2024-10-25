import React, { createContext, useState } from 'react';

// Create Context
export const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {

  const [value, setValue] = useState(false);

  return (
    <AppContext.Provider value={{ value, setValue }}>
      {children}
    </AppContext.Provider>
  );
};
