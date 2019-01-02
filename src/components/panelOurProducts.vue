<template>
  <div class="panelExpertise">
    <header-component headerLabel="Out Products" class="colorSF"/>
    <div class="container d-md-block d-none">
      <section class="expertiseContent row no-gutter align-items-center">
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../assets/group-19-copy.png" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Agricultural
            Chemical Products </h3>
        </div>
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../assets/india1.jpg" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Indian Spicies</h3>
        </div>
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../assets/grain.jpg" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Grains</h3>
        </div>
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../assets/group-19-copy.png" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Agricultural
            Chemical Products </h3>
        </div>
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../assets/india1.jpg" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Agricultural
            Chemical Products</h3>
        </div>
        <div class="col col-md-4 text-center d-flex align-items-center product pb-md-5">
          <img class="img-fluid position-relative mx-auto" src="../assets/grain.jpg" alt="">
          <h3 class="position-absolute text-white mr-auto ml-auto h3CenterDiv">Agricultural
            Chemical Products</h3>
        </div>
      </section>
    </div>
    <panel-width-moble typePanel="sliderShowPanel"/>
  </div>
</template>

<script>
import PanelWidthMoble from './panelWidthMoble'
import HeaderComponent from './headerComponent'
export default {
  name: 'panelOurProducts',
  components: { HeaderComponent, PanelWidthMoble },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .panelExpertise {
    background-image: url("../assets/backgroundProduct.jpg");
  }
</style>
