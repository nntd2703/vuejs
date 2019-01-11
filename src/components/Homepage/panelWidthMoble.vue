<template>
  <div class="itemMobile active text-center d-md-none d-block" v-if="typePanel === 'textPanel'">
    <h2>{{headerPanel}}</h2>
    <p>{{contentPanel}}</p>
    <button-component v-bind:button-label="buttonLabel"/>
  </div>
</template>

<script>
import ButtonComponent from './buttonComponent'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'owl.carousel'

export default {
  name: 'panelWidthMoble',
  props: {
    typePanel: String,
    headerPanel: String,
    contentPanel: String,
    buttonLabel: String
  },
  components: {
    ButtonComponent
  },
  mounted () {
  }
}

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
