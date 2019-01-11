<template>
  <div id="HomePage">
    <nav-top/>
    <navigation-bar/>
    <slide-show/>
    <panel-our-service/>
    <panel-our-products/>
    <panel-contact/>
    <panel-content-about/>
    <founder-panel/>
    <panel-categories/>
    <panel-footer/>
  </div>
</template>

<script>
import NavTop from '../components/Homepage/navTop'
import NavigationBar from '../components/Homepage/navigationBar'
import SlideShow from '../components/Homepage/slideShow'
import PanelOurService from '../components/Homepage/panelOurService'
import PanelOurProducts from '../components/Homepage/panelOurProducts'
import PanelContact from '../components/Homepage/panelContact'
import PanelContentAbout from '../components/Homepage/panelContentAbout'
import FounderPanel from '../components/Homepage/founderPanel'
import PanelCategories from '../components/Homepage/panelCategories'
import PanelFooter from '../components/Homepage/panelFooter'

export default {
  name: 'app',
  components: { PanelFooter, PanelCategories, FounderPanel, PanelContentAbout, PanelContact, PanelOurProducts, PanelOurService, SlideShow, NavigationBar, NavTop }
}

</script>

<style lang="scss">

</style>
