import { createContext, ReactNode, useContext, useState } from 'react'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import themes from 'config/themes'

type Props = {
  children: ReactNode
}

type ThemeContextProps = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: Props) {
  const [name, setName] = useState<'dark' | 'light'>('dark')

  const theme = themes[name]

  function handleToggleTheme() {
    setName((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{ theme: name, toggleTheme: handleToggleTheme }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  )
}

export const useTheme = () => useContext(ThemeContext)
