<template>
  <div id="app">
    <navTop/>
    <navigationBar/>
  </div>
</template>

<script>
import navTop from './components/nav-top/template.vue'
import navigationBar from './components/navigation-bar/template'

export default {
  name: 'app',
  components: {
    navTop,
    navigationBar
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
