import React, { useState, useEffect, useContext } from 'react'

const ThemeContext = React.createContext('light')

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(global.window?.__theme || 'light')
  //const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    window.__setPreferredTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    global.window.__onThemeChange = setTheme
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
