<template>
  <div class="home">
    <nav-top></nav-top>
    <navigation-bar></navigation-bar>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
    <panel-categories/>
    <panel-footer></panel-footer>
  </div>
</template>

<script>
import NavTop from '../components/Homepage/navTop'
import NavigationBar from '../components/Homepage/navigationBar'
import PanelFooter from '../components/Homepage/panelFooter'
import PanelCategories from '../components/Homepage/panelCategories'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'owl.carousel'
export default {
  name: 'home',
  components: { PanelCategories, PanelFooter, NavigationBar, NavTop }
}
</script>

<style scoped>

</style>
