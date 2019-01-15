<template>
  <div class="home">
    <nav-top></nav-top>
    <navigation-bar></navigation-bar>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
    <panel-footer></panel-footer>
  </div>
</template>

<script>
import NavTop from '../components/Homepage/navTop'
import NavigationBar from '../components/Homepage/navigationBar'
import PanelFooter from '../components/Homepage/panelFooter'
export default {
  name: 'home',
  components: { PanelFooter, NavigationBar, NavTop }
}
</script>

<style scoped>

</style>
