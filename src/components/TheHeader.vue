<script setup>
import { useI18n } from '../i18n'
import { useTheme } from '../composables/useTheme'

const { t, locale, setLocale } = useI18n()
const { theme, toggleTheme } = useTheme()

function toggleLang() {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}
</script>

<template>
  <header class="header">
    <a href="#top" class="header__mark">AB<span>.</span></a>
    <nav class="header__nav">
      <a href="#about">{{ t.nav.about }}</a>
      <a href="#projects">{{ t.nav.projects }}</a>
      <a href="#wordpress">{{ t.nav.wordpress }}</a>
      <a href="#experience">{{ t.nav.experience }}</a>
    </nav>
    <div class="header__controls">
      <button class="header__pill" @click="toggleLang" :aria-label="'Switch language'">
        {{ locale === 'fr' ? 'FR' : 'EN' }}
      </button>
      <button class="header__icon" @click="toggleTheme" aria-label="Toggle theme">
        <svg v-if="theme === 'dark'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      </button>
      <a href="#contact" class="btn">{{ t.nav.contact }}</a>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px var(--gutter);
  backdrop-filter: blur(10px);
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  border-bottom: 1px solid var(--border);
}
.header__mark {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: var(--text-primary);
}
.header__mark span { color: var(--accent); }
.header__nav {
  display: flex;
  gap: 28px;
}
.header__nav a {
  font-family: var(--font-mono);
  font-size: 13px;
  text-decoration: none;
  color: var(--text-secondary);
  transition: color 0.2s ease;
}
.header__nav a:hover { color: var(--text-primary); }
.header__controls {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header__pill, .header__icon {
  font-family: var(--font-mono);
  font-size: 12px;
  height: 34px;
  min-width: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0 10px;
}
.header__pill:hover, .header__icon:hover { color: var(--accent-text); border-color: var(--accent); }
@media (max-width: 860px) {
  .header__nav { display: none; }
}
</style>
