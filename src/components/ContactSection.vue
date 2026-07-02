<script setup>
import { useI18n } from "../i18n";
const { t } = useI18n();

// Remplace ces valeurs par tes vraies coordonnées avant mise en ligne.
const links = {
  email: "mailto:alaomoutawakil@gmail.com",
  linkedin: "https://www.linkedin.com/in/alao-bouraima/",
  github: "https://github.com/Moutawakil67",
  phone: "tel:+229 0167 217 812",
};
</script>

<template>
  <section id="contact" class="section section--contact">
    <span class="section__marker">07</span>
    <p class="eyebrow">{{ t.contact.title }}</p>
    <h2 class="contact__lead">{{ t.contact.lead }}</h2>

    <div class="contact__grid">
      <a :href="links.email" class="card card--interactive contact__item">
        <span class="line-ref">{{ t.contact.email }}</span>
        <span>alaomoutawakil@gmail.com</span>
      </a>
      <!-- <a :href="links.linkedin" class="card card--interactive contact__item" target="_blank" rel="noopener">
        <span class="line-ref">{{ t.contact.linkedin }}</span>
        <span>https://www.linkedin.com/in/alao-bouraima/</span>
      </a>
      <a :href="links.github" class="card card--interactive contact__item" target="_blank" rel="noopener">
        <span class="line-ref">{{ t.contact.github }}</span>
        <span>https://github.com/Moutawakil67</span>
      </a> -->
      <a :href="links.phone" class="card card--interactive contact__item">
        <span class="line-ref">{{ t.contact.phone }}</span>
        <span>+229 0167 217 812</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.section--contact {
  padding-bottom: 64px;
}
.contact__lead {
  font-size: clamp(24px, 3.5vw, 36px);
  max-width: 640px;
  margin-top: 16px;
  font-weight: 500;
}
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 44px;
}
.contact__item {
  padding: 22px 24px;
  text-decoration: none;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.contact__item span:last-child {
  font-family: var(--font-mono);
  font-size: 14px;
}
@media (max-width: 640px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
</style>
