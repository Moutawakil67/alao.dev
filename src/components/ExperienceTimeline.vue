<script setup>
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>

<template>
  <section id="experience" class="section">
    <span class="section__marker">05</span>
    <p class="eyebrow">{{ t.experience.title }}</p>
    <ol class="timeline">
      <li v-for="(item, i) in t.experience.items" :key="i" class="timeline__item">
        <span class="line-ref">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="timeline__period">{{ item.period }}</span>
        <span class="timeline__org">{{ item.org }}</span>
        <span class="timeline__role">{{ item.role }}</span>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  padding: 0;
  margin: 32px 0 0;
  border-top: 1px solid var(--border);
}
.timeline__item {
  display: grid;
  grid-template-columns: 32px 160px 1fr auto;
  align-items: center;
  gap: 20px;
  padding: 16px 12px;
  margin: 0 -12px;
  border-bottom: 1px solid var(--border);
  border-radius: var(--radius);
  transition: background 0.2s var(--ease), padding-left 0.2s var(--ease);
}
.timeline__item:hover {
  background: var(--bg-raised);
  padding-left: 18px;
}
.timeline__period {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
}
.timeline__org {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 16px;
}
.timeline__role {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent-text);
}
@media (max-width: 640px) {
  .timeline__item { grid-template-columns: 24px 1fr; grid-template-areas: "n org" ". period" ". role"; row-gap: 4px; }
  .timeline__org { grid-area: org; }
  .timeline__period { grid-area: period; }
  .timeline__role { grid-area: role; }
}
</style>
