<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppFeaturesSection from './components/AppFeaturesSection.vue';
import AppInstallSection from './components/AppInstallSection.vue';
import Wave from './components/Wave.vue';
import AppToolsSection from './components/AppToolsSection.vue';
import AppPlansSection from './components/AppPlansSection.vue';
export default {
  name : "App",
  components : { AppHeader, AppJumbotron, AppFeaturesSection, Wave, AppInstallSection,AppToolsSection,AppPlansSection}
}
</script>

<template>
  <header>
    <AppHeader />
    <AppJumbotron />
  </header>
  <Wave />
  <main>
    <AppFeaturesSection />
    <AppInstallSection />
    <AppToolsSection />
    <AppPlansSection />
  </main>

</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;

</style>
