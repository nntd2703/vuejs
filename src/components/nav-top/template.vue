<template>
  <div class="topBar">
    <div class="container">
      <div class="row align-items-center">
        <information-item/>
        <div class="multiLanguage ml-auto">
          <div class="onoffswitch4">
            <input type="checkbox" name="onoffswitch4" class="onoffswitch4-checkbox" id="myonoffswitch4"
                   checked>
            <label class="onoffswitch4-label" for="myonoffswitch4">
              <span class="onoffswitch4-inner"></span>
              <span class="onoffswitch4-switch"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='sass'>
  @import '../nav-top/style.scss'
</style>
<script src="../nav-top/component.js"></script>
