<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppFeaturesSection from './components/AppFeaturesSection.vue';
import AppInstallSection from './components/AppInstallSection.vue';
import Wave from './components/Wave.vue';
export default {
  name : "App",
  components : { AppHeader, AppJumbotron, AppFeaturesSection, Wave, AppInstallSection }
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
    
  </main>

</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;

</style>
