<template>
  <div class="p-3 p-md-5 header">
    <div class="container">
      <h1 class="p-3 headerLabel">{{ headerLabel }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerLabel',
  props: {
    headerLabel: String
  }
}
</script>

<style scoped lang="sass">
  @import "./style.scss"
</style>
