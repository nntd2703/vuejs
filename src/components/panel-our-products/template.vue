<template>
  <div class="panelExpertise">
    <header-label headerLabel="Out Products" class="colorSF"/>
    <div class="container">
      <section class="expertiseContent row no-gutter align-items-center">
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../../assets/group-19-copy.png" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Agricultural
            Chemical Products </h3>
        </div>
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../../assets/india1.jpg" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Indian Spicies</h3>
        </div>
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../../assets/grain.jpg" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Grains</h3>
        </div>
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../../assets/group-19-copy.png" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Agricultural
            Chemical Products </h3>
        </div>
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../../assets/india1.jpg" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Agricultural
            Chemical Products</h3>
        </div>
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../../assets/grain.jpg" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Agricultural
            Chemical Products</h3>
        </div>
      </section>
    </div>
    <panel-show-mobile/>
  </div>
</template>

<script>
import HeaderLabel from '../header/template'
import PanelShowMobile from '../panel-show-moble/template'

export default {
  name: 'panelOurProduct',
  components: {
    PanelShowMobile,
    HeaderLabel
  },
  data () {
    return {
      panelSliderShow: 'true'
    }
  }
}
</script>

<style scoped lang="sass">
  @import './style.scss'
</style>
