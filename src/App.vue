<template>
  <div id="app">
    <nav-top/>
    <navigation-bar/>
    <slide-show/>
    <panel-our-service/>
    <panel-our-products/>
  </div>
</template>

<script>

import NavTop from './components/navTop'
import NavigationBar from './components/navigationBar'
import SlideShow from './components/slideShow'
import PanelOurService from './components/panelOurService'
import PanelOurProducts from './components/panelOurProducts'
export default {
  name: 'app',
  components: { PanelOurProducts, PanelOurService, SlideShow, NavigationBar, NavTop }
}

</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
