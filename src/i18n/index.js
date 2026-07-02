import { ref, computed } from 'vue'
import fr from './fr.js'
import en from './en.js'

const dictionaries = { fr, en }
const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null
const locale = ref(stored || 'fr')

function setLocale(next) {
  locale.value = next
  if (typeof localStorage !== 'undefined') localStorage.setItem('lang', next)
  if (typeof document !== 'undefined') document.documentElement.lang = next
}

const t = computed(() => dictionaries[locale.value])

export function useI18n() {
  return { locale, setLocale, t }
}
