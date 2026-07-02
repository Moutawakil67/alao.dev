<script setup>
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>

<template>
  <section id="about" class="section">
    <span class="section__marker">01</span>
    <p class="eyebrow">{{ t.about.title }}</p>
    <p class="about__body">{{ t.about.body }}</p>
    <div class="about__grid">
      <div>
        <p class="about__label">{{ t.about.education }}</p>
        <p class="about__line">{{ t.about.edu1 }}</p>
        <p class="about__line">{{ t.about.edu2 }}</p>
      </div>
      <div>
        <p class="about__label">{{ t.about.languages }}</p>
        <p class="about__line">{{ t.about.langNote }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__body {
  font-size: 19px;
  max-width: 760px;
  color: var(--text-primary);
  margin-top: 18px;
  line-height: 1.7;
}
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 48px;
  max-width: 760px;
}
.about__label {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  margin: 0 0 8px;
}
.about__line {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0 0 4px;
}
@media (max-width: 640px) {
  .about__grid { grid-template-columns: 1fr; }
}
</style>
