<template>
  <div id="app">
    <navTop/>
    <navigationBar/>
    <slideShow/>
    <panel-our-service/>
    <panel-our-product/>
  </div>
</template>

<script>
import navTop from './components/nav-top/template.vue'
import navigationBar from './components/navigation-bar/template'
import slideShow from './components/slide-show/template'
import PanelOurService from './components/panel-our-service/template'
import PanelOurProduct from './components/panel-our-products/template'

export default {
  name: 'app',
  components: {
    PanelOurProduct,
    PanelOurService,
    navTop,
    navigationBar,
    slideShow
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
