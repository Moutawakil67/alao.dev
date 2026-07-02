<script setup>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsCarousel from './components/ProjectsCarousel.vue'
import WordpressSection from './components/WordpressSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import ExpertiseTags from './components/ExpertiseTags.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsCarousel />
    <WordpressSection />
    <ExperienceTimeline />
    <ExpertiseTags />
    <ContactSection />
  </main>
  <TheFooter />
</template>
