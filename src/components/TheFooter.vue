<script setup>
import { useI18n } from "../i18n";
const { t } = useI18n();
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <span class="line-ref">ALAO BOURAIMA — © {{ year }}. {{ t.footer.rights }}</span>
    <a href="#top" class="footer__top">↑ top</a>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px var(--gutter);
  border-top: 1px solid var(--border);
  max-width: 1180px;
  margin: 0 auto;
}
.footer__top {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  text-decoration: none;
}
</style>
