<template>
  <div class="panelAboutUs paral">
    <img src="../../assets/pannelaboutus.jpg">
  </div>
</template>

<script>
export default {
  name: 'panelAbout'
}
</script>

<style scoped lang="scss">
  .panelAboutUs {
    @media (min-width: 992px) {
      background-attachment: fixed;
      background-size: cover;
      background-position: 50% 50%;
      height: 600px;
      img {
        display: none;
      }
    }
    background-image: url("../../assets/pannelaboutus.jpg");
    @media (max-width: 991px) {
      img {
        display: block;
        max-width: 100% !important;
        height: auto !important;
      }
    }
  }
</style>
