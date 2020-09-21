import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: '',
  toogleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme: (t) => setTheme(t) }}>
      <div className={`theme-wrapper ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
