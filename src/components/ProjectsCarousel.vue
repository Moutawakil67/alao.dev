<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n'

const { t } = useI18n()
const active = ref(0)

const items = computed(() => t.value.projects.items)

function next() { active.value = (active.value + 1) % items.value.length }
function prev() { active.value = (active.value - 1 + items.value.length) % items.value.length }
</script>

<template>
  <section id="projects" class="section">
    <span class="section__marker">03</span>
    <p class="eyebrow">{{ t.projects.eyebrow }}</p>
    <h2 class="section__title">{{ t.projects.title }}</h2>

    <div class="carousel">
      <button class="carousel__arrow" @click="prev" aria-label="Previous project">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      <div class="card carousel__card">
        <div class="carousel__meta">
          <span class="line-ref">{{ String(active + 1).padStart(2, '0') }} / {{ String(items.length).padStart(2, '0') }}</span>
          <span class="tag">{{ items[active].period }}</span>
        </div>
        <h3 class="carousel__title">{{ items[active].title }}</h3>
        <p class="carousel__client">{{ items[active].client }}</p>
        <p class="carousel__text"><strong>{{ items[active].context }}</strong></p>
        <p class="carousel__text">{{ items[active].role }}</p>
        <div class="carousel__stack">
          <span v-for="s in items[active].stack" :key="s" class="tag">{{ s }}</span>
        </div>
      </div>

      <button class="carousel__arrow" @click="next" aria-label="Next project">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>

    <div class="carousel__dots">
      <button
        v-for="(item, i) in items"
        :key="i"
        class="carousel__dot"
        :class="{ 'is-active': i === active }"
        @click="active = i"
        :aria-label="`Go to project ${i + 1}`"
      />
    </div>
  </section>
</template>

<style scoped>
.section__title { font-size: 28px; margin-top: 10px; }
.carousel {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}
.carousel__arrow {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  background: var(--bg-raised);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s var(--ease), color 0.2s var(--ease), box-shadow 0.2s var(--ease), transform 0.15s var(--ease);
}
.carousel__arrow:hover { border-color: var(--accent); color: var(--accent-text); box-shadow: var(--shadow-sm); transform: translateY(-1px); }
.carousel__arrow:active { transform: translateY(0) scale(0.94); }
.carousel__card {
  flex: 1;
  padding: 36px 40px;
  min-height: 260px;
  transition: box-shadow 0.25s var(--ease), transform 0.25s var(--ease);
}
.carousel__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
.carousel__title { font-size: 24px; margin: 0 0 4px; }
.carousel__client {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent-text);
  margin: 0 0 20px;
}
.carousel__text {
  color: var(--text-secondary);
  margin: 0 0 10px;
  max-width: 620px;
}
.carousel__stack {
  display: flex;
  gap: 8px;
  margin-top: 18px;
  flex-wrap: wrap;
}
.carousel__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}
.carousel__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  background: var(--border-strong);
  cursor: pointer;
  padding: 0;
}
.carousel__dot.is-active { background: var(--accent); width: 18px; border-radius: 3px; }
@media (max-width: 640px) {
  .carousel__card { padding: 24px; }
  .carousel__arrow { display: none; }
}
</style>
