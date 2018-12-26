<template>
  <div id="app">
    <navTop/>
  </div>
</template>

<script>
import navTop from './components/nav-top/template.vue'

export default {
  name: 'app',
  components: {
    navTop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
