<script setup>
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>

<template>
  <section id="skills" class="section">
    <span class="section__marker">02</span>
    <p class="eyebrow">{{ t.skills.title }}</p>
    <div class="skills__bento">
      <div
        v-for="(group, i) in t.skills.groups"
        :key="i"
        class="card card--interactive skills__group"
        :class="`skills__group--${i}`"
      >
        <p class="skills__label">{{ group.label }}</p>
        <div class="skills__tags">
          <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Bento asymétrique : le premier bloc (Frontend, cœur du profil) domine */
.skills__bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(120px, auto);
  gap: 14px;
  margin-top: 36px;
}
.skills__group {
  padding: 24px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.skills__group--0 { grid-column: span 2; grid-row: span 2; background: color-mix(in srgb, var(--accent) 6%, var(--bg-raised)); }
.skills__group--1 { grid-column: span 2; }
.skills__group--2 { grid-column: span 2; }
.skills__group--3 { grid-column: span 2; }
.skills__group--4 { grid-column: span 2; }
.skills__group--5 { grid-column: span 4; }
.skills__label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 14px;
}
.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
@media (max-width: 860px) {
  .skills__bento { grid-template-columns: repeat(2, 1fr); }
  .skills__group--0, .skills__group--5 { grid-column: span 2; }
  .skills__group--1, .skills__group--2, .skills__group--3, .skills__group--4 { grid-column: span 1; }
}
@media (max-width: 560px) {
  .skills__bento { grid-template-columns: 1fr; }
  .skills__group--0, .skills__group--1, .skills__group--2, .skills__group--3, .skills__group--4, .skills__group--5 {
    grid-column: span 1;
    grid-row: auto;
  }
}
</style>
