<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '../i18n'
import ConnectionGraph from './ConnectionGraph.vue'

const { t } = useI18n()
const typed = ref('')
const full = '~/alao $ whoami'

onMounted(() => {
  let i = 0
  const timer = setInterval(() => {
    typed.value = full.slice(0, i + 1)
    i++
    if (i >= full.length) clearInterval(timer)
  }, 55)
})
</script>

<template>
  <section id="top" class="hero">
    <ConnectionGraph />
    <div class="hero__content">
      <span class="status-chip">
        <span class="status-chip__dot" aria-hidden="true"></span>
        {{ t.hero.status }}
      </span>
      <p class="hero__terminal">{{ typed }}<span class="hero__cursor">▌</span></p>
      <p class="eyebrow">{{ t.hero.eyebrow }}</p>
      <h1 class="hero__name">{{ t.hero.name }}</h1>
      <h2 class="hero__role">{{ t.hero.role }}</h2>
      <p class="hero__lead">{{ t.hero.lead }}</p>
      <div class="hero__ctas">
        <a href="#projects" class="btn btn--solid">{{ t.hero.ctaProjects }}</a>
        <a href="#contact" class="btn">{{ t.hero.ctaContact }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding: 0 var(--gutter);
  overflow: hidden;
}
.hero__content {
  position: relative;
  z-index: 1;
  max-width: 640px;
  padding: 32px;
  border-radius: var(--radius-card);
  background: color-mix(in srgb, var(--bg) 46%, transparent);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border);
}
.hero__terminal {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent-text);
  margin: 20px 0 20px;
  height: 16px;
}
.hero__cursor {
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }
.hero__name {
  font-size: clamp(40px, 6vw, 64px);
  margin-top: 10px;
  line-height: 1.02;
}
.hero__role {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: clamp(18px, 2.4vw, 24px);
  color: var(--text-secondary);
  margin-top: 14px;
  max-width: 520px;
}
.hero__lead {
  color: var(--text-muted);
  max-width: 480px;
  margin-top: 20px;
}
.hero__ctas {
  display: flex;
  gap: 14px;
  margin-top: 36px;
}
@media (max-width: 860px) {
  .hero { min-height: 80vh; }
}
</style>
