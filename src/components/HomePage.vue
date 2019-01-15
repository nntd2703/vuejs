<template>
  <div id="HomePage">
    <slide-show/>
    <panel-our-service/>
    <panel-our-products/>
    <panel-contact/>
    <panel-content-about/>
    <founder-panel/>
    <panel-categories/>
  </div>
</template>

<script>
import SlideShow from '../components/Homepage/slideShow'
import PanelOurService from '../components/Homepage/panelOurService'
import PanelOurProducts from '../components/Homepage/panelOurProducts'
import PanelContact from '../components/Homepage/panelContact'
import PanelContentAbout from '../components/Homepage/panelContentAbout'
import FounderPanel from '../components/Homepage/founderPanel'
import PanelCategories from '../components/Homepage/panelCategories'
import HomeIndex from '../view/home'

export default {
  name: 'app',
  components: { PanelCategories, FounderPanel, PanelContentAbout, PanelContact, PanelOurProducts, PanelOurService, SlideShow },
  created () {
    this.$emit(`update:layout`, HomeIndex)
  }
}

</script>

<style lang="scss">

</style>
