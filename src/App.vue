<script>
import AppHeader from './components/AppHeader.vue'
import AppJumbotron from './components/AppJumbotron.vue';

export default {
  name : "App",
  components : { AppHeader, AppJumbotron }
}
</script>

<template>
  <header>
    <AppHeader />
    <AppJumbotron />
  </header>

</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;

</style>
