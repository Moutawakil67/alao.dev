<script setup>
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>

<template>
  <section id="expertise" class="section">
    <span class="section__marker">06</span>
    <p class="eyebrow">{{ t.expertise.title }}</p>
    <div class="expertise__list">
      <span v-for="(item, i) in t.expertise.items" :key="i" class="tag">{{ item }}</span>
    </div>
  </section>
</template>

<style scoped>
.expertise__list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}
</style>
