export interface ThemeContextType {
  toggleTheme: () => void
  theme: 'dark' | 'light'
  isDarkMode: boolean
}
