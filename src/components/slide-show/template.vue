<template>
  <div class="slideShow">
    <div id="touchSlider" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#touchSlider" data-slide-to="0" class="active"></li>
        <li data-target="#touchSlider" data-slide-to="1"></li>
        <li data-target="#touchSlider" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../image/group-18.jpg" alt="First slide">
          <div class="carousel-caption d-none d-md-block mr-auto ml-auto blockCenterdiv">
            <h2>Lorem Ipsum is simply</h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s,
              when an unknown printer took a galley of type and scrambled it to make
              a
              type specimen book. It has survived not only five centuries, but also
              the
              leap into electronic typesetting, remaining essentially unchanged.</p>
            <a href="#" class="btn">
              <span class="btn-inner">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#touchSlider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#touchSlider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script src="../navigation-bar/component.js"></script>
<style lang="sass" scoped>
  @import '../navigation-bar/style.scss'
</style>
