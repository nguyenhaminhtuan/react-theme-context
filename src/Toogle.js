import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

import { ReactComponent as Moon } from './assets/moon.svg';
import { ReactComponent as Sun } from './assets/sun.svg';

const Toogle = () => {
  const { theme, toogleTheme } = useContext(ThemeContext);

  return theme === 'light' ? (
    <Moon onClick={() => toogleTheme('dark')} />
  ) : (
    <Sun onClick={() => toogleTheme('light')} />
  );
};

export default Toogle;
