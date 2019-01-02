<template>
  <div class="itemMobile active text-center d-md-none d-block" v-if="typePanel === 'textPanel'">
    <h2>Lorem Ipsum is simply</h2>
    <p>Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s,
      when an unknown printer took a galley of type and scrambled it to make
      a
      type specimen book. It has survived not only five centuries, but also
      the
      leap into electronic typesetting, remaining essentially unchanged.</p>
    <button-component buttonLabel="Contact Us"/>
  </div>

  <div class="slideProduct d-md-none d-block" v-else-if="typePanel === 'sliderShowPanel'">
    <div class="slider owl-carousel owl-theme">
      <div class="product">
        <h3 class="text-white position-absolute mr-auto ml-auto h3CenterDiv widthCustom">Agricultural
          Chemical Products</h3>
        <img src="../assets/group-19-copy.png" alt="">
      </div>
      <div class="product">
        <h3 class="text-white position-absolute mr-auto ml-auto h3CenterDiv widthCustom">Agricultural
          Chemical Products</h3>
        <img src="../assets/group-19-copy.png" alt="">
      </div>
      <div class="product">
        <h3 class="text-white position-absolute mr-auto ml-auto h3CenterDiv widthCustom">Agricultural
          Chemical Products</h3>
        <img src="../assets/group-19-copy.png" alt="">
      </div>
      <div class="product">
        <h3 class="text-white position-absolute mr-auto ml-auto h3CenterDiv widthCustom">Agricultural
          Chemical Products</h3>
        <img src="../assets/group-19-copy.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './buttonComponent'
import 'owl.carousel'
export default {
  name: 'panelWidthMoble',
  props: {
    typePanel: String
  },
  components: {
    ButtonComponent
  }
}

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    navigation: true,
    center: true,
    lazyLoad: true,
    dotsSpeed: 1000,
    items: 1,
    lazyLoadEager: 1000,
    smartSpeed: 1000,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    scrollPerPage: true,
    autoPlay: 2500
  })
})
</script>

<style scoped lang="scss">
  .itemMobile {
    display: none;
    padding: 2rem 2rem 0;
    .btn-inner:hover {
      color: white;
    }
  }

</style>
