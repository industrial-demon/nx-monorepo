import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

type Theme = 'dark' | 'light'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: (theme: Theme) => void
}

const defaultValue: ThemeContextValue = {
  theme: 'light',
  toggleTheme: () => null,
}
const ThemeContext = createContext<ThemeContextValue>(defaultValue)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const persistedTheme: Theme | null = localStorage.getItem('theme') as Theme
  const [theme, setTheme] = useState<Theme>(persistedTheme || 'light')

  const toggleTheme = useCallback((newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }, [])

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  return useContext(ThemeContext)
}

export default ThemeProvider
export { useTheme }
