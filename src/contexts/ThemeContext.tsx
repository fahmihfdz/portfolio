import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeContext = createContext<{
  theme: 'dark' | 'light';
  toggle: () => void;
}>({ theme: 'dark', toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, toggle } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);