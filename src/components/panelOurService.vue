<template>
  <div class="container panelServies">
    <header-component headerLabel="Our Service" class="colorSFour"/>
    <div class="row align-items-center">
      <div class="col-4">
        <img src="../assets/artboard-1-copy.png" alt="" class="img-fluid"/>
        <h3>Import</h3>
      </div>
      <div class="col-4">
        <img src="../assets/export.png" alt="" class="img-fluid"/>
        <h3>Export</h3>
      </div>
      <div class="col-4">
        <img src="../assets/processing.png" alt="" class="img-fluid"/>
        <h3>Processing</h3>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './headerComponent'

export default {
  name: 'panelOurService',
  components: { HeaderComponent }
}
</script>

<style scoped lang="scss">
  .panelServies {
    text-align: center;
    .title {
      width: 100%;
    }
    .col {
      text-align: center;
    }
  }

</style>
