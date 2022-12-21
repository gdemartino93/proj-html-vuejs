<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppFeatures from './components/AppFeatures.vue';
import Wave from './components/Wave.vue';
export default {
  name : "App",
  components : { AppHeader, AppJumbotron, AppFeatures, Wave }
}
</script>

<template>
  <header>
    <AppHeader />
    <AppJumbotron />
  </header>
  <Wave />
  <main>
    <AppFeatures />
  </main>

</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;

</style>
