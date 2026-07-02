<script setup>
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>

<template>
  <section id="wordpress" class="section">
    <span class="section__marker">04</span>
    <p class="eyebrow">{{ t.wordpress.eyebrow }}</p>
    <h2 class="section__title">{{ t.wordpress.title }}</h2>
    <p class="wp__intro">{{ t.wordpress.intro }}</p>

    <div class="wp__bento">
      <a
        v-for="(item, i) in t.wordpress.items"
        :key="i"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="card card--interactive wp__card"
        :class="{ 'wp__card--wide': i === 0 || i === 4 }"
      >
        <div class="wp__card-header">
          <span class="line-ref">{{ String(i + 1).padStart(2, '0') }}</span>
          <svg class="wp__link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>
        <p class="wp__name">{{ item.name }}</p>
        <p class="wp__type">{{ item.type }}</p>
        <p class="wp__note">{{ item.note }}</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
.section__title { font-size: 28px; margin-top: 10px; }
.wp__intro {
  max-width: 640px;
  color: var(--text-secondary);
  margin-top: 16px;
}
.wp__bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 36px;
}
.wp__card {
  grid-column: span 2;
  padding: 22px;
  text-decoration: none;
  color: inherit;
}
.wp__card--wide { grid-column: span 4; }
.wp__card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wp__link-icon {
  color: var(--text-muted);
  opacity: 0.5;
  transition: transform 0.2s var(--ease), opacity 0.2s var(--ease), color 0.2s var(--ease);
}
.wp__card:hover .wp__link-icon {
  color: var(--accent);
  opacity: 1;
  transform: translate(1px, -1px);
}
.wp__name { font-family: var(--font-display); font-weight: 600; font-size: 16px; margin: 10px 0 2px; }
.wp__type {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent-text);
  margin: 0 0 10px;
}
.wp__note { font-size: 13px; color: var(--text-muted); margin: 0; }
@media (max-width: 860px) {
  .wp__bento { grid-template-columns: repeat(2, 1fr); }
  .wp__card, .wp__card--wide { grid-column: span 2; }
}
@media (max-width: 560px) {
  .wp__bento { grid-template-columns: 1fr; }
  .wp__card, .wp__card--wide { grid-column: span 1; }
}
</style>
