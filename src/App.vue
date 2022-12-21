<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name : "App",
  components : { AppHeader }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>

</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;

</style>
