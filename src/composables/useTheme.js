import { ref } from 'vue'

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null
const preferred = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const theme = ref(stored || preferred)

function apply() {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme.value)
  }
}
apply()

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  if (typeof localStorage !== 'undefined') localStorage.setItem('theme', theme.value)
  apply()
}

export function useTheme() {
  return { theme, toggleTheme }
}
