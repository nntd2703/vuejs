<template>
  <div class="itemMobile active text-center" v-if="panelText">
    <h2>Lorem Ipsum is simply</h2>
    <p>Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s,
      when an unknown printer took a galley of type and scrambled it to make
      a
      type specimen book. It has survived not only five centuries, but also
      the
      leap into electronic typesetting, remaining essentially unchanged.</p>
    <buttonNormal buttonLabel="Contact Us"/>
  </div>

  <div class="slideProduct" v-else-if="panelSliderShow">
    <div class="slider owl-carousel owl-theme">
      <div class="product">
        <h3 class="text-white position-absolute mr-auto ml-auto h3CenterDiv widthCustom">Agricultural
          Chemical Products</h3>
        <img src="../../assets/group-19-copy.png" alt="">
      </div>
      <div class="product">
        <h3 class="text-white position-absolute mr-auto ml-auto h3CenterDiv widthCustom">Agricultural
          Chemical Products</h3>
        <img src="../../assets/group-19-copy.png" alt="">
      </div>
      <div class="product">
        <h3 class="text-white position-absolute mr-auto ml-auto h3CenterDiv widthCustom">Agricultural
          Chemical Products</h3>
        <img src="../../assets/group-19-copy.png" alt="">
      </div>
      <div class="product">
        <h3 class="text-white position-absolute mr-auto ml-auto h3CenterDiv widthCustom">Agricultural
          Chemical Products</h3>
        <img src="../../assets/group-19-copy.png" alt="">
      </div>
    </div>
  </div>
</template>
<script src="../panel-show-moble/component.js">
</script>
<style lang="sass" scoped>
  @import '../panel-show-moble/style.scss'
</style>
