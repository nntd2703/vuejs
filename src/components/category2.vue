<template>
  <div class="categoryPanel">
    <panel-about/>
    <h2 class="text-uppercase text-center w-100 pt-5 pb-5 header">beans</h2>
    <div class="categoryDescription">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 productDetails pb-5">
            <img src="../assets/product1.png"/>
            <p class="pt-2">Pulses</p>
          </div>
          <div class="col-12 col-md-3 productDetails pb-5">
            <img src="../assets/product2.png"/>
            <p class="pt-2">Lentils</p>
          </div>
          <div class="col-12 col-md-3 productDetails pb-5">
            <img src="../assets/product2.png"/>
            <p class="pt-2">Lentils</p>
          </div>
        </div>
      </div>
    </div>
    <div class="slideProduct pr-5 pl-5">
      <div class="slider owl-carousel owl-theme">
        <div class="product">
          <img src="../assets/product1.png"/>
          <p class="pt-2">Pulses</p>
        </div>
        <div class="product">
          <img src="../assets/product2.png"/>
          <p class="pt-2">Lentils</p>
        </div>
        <div class="product">
          <img src="../assets/product2.png"/>
          <p class="pt-2">Lentils</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeIndex from '../view/home'
import PanelAbout from './Homepage/panelAbout'
export default {
  name: 'category2',
  components: { PanelAbout },
  created () {
    this.$emit(`update:layout`, HomeIndex)
  }
}
</script>

<style scoped lang="scss">
  .categoryPanel {
    .header {
      font-family: Roboto;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #444444;
      font-size: 3rem;
    }
    .slideProduct {
      display: none;
    }
    @media (max-width: 767px) {
      .slideProduct {
        display: block;
        p{
          font-size: 1.5rem;
        }
      }
      .categoryDescription {
        display: none;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #222222;
    }
  }
</style>
