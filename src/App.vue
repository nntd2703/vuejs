<template>
  <div id="app">
    <nav-top/>
    <navigation-bar/>
    <slide-show/>
    <panel-our-service/>
    <panel-our-products/>
    <panel-contact/>
    <panel-content-about/>
    <founder-panel/>
    <panel-categories/>
    <panel-footer/>
  </div>
</template>

<script>

import NavTop from './components/navTop'
import NavigationBar from './components/navigationBar'
import SlideShow from './components/slideShow'
import PanelOurService from './components/panelOurService'
import PanelOurProducts from './components/panelOurProducts'
import PanelContact from './components/panelContact'
import PanelContentAbout from './components/panelContentAbout'
import FounderPanel from './components/founderPanel'
import PanelCategories from './components/panelCategories'
import PanelFooter from './components/panelFooter'

export default {
  name: 'app',
  components: { PanelFooter, PanelCategories, FounderPanel, PanelContentAbout, PanelContact, PanelOurProducts, PanelOurService, SlideShow, NavigationBar, NavTop }
}

</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900);

  .paral {
    min-height: 400px;
    background-attachment: fixed;
    background-size: cover;
    background-position: 50% 50%;
  }
  h1 {
    font-family: Roboto;
    font-size: 2.5rem;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #444444;
    text-transform: uppercase;
  }

  html {
    @media (max-width: 1200px) {
      font-size: 95% !important;
    }
    @media (max-width: 768px) {
      font-size: 85% !important;
    }
    @media (max-width: 480px) {
      font-size: 80% !important;
    }
  }

  body {
    margin: 0;
    overflow-x: hidden;
    text-size-adjust: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
  }

  .col-md-twenty {
    position: relative;
    min-height: 3rem;
    padding-right: 15px;
    padding-left: 15px;
    float: left;
    width: 20%;
    @media (max-width: 991px) {
      width: 33.333333%;
    }
    @media (max-width: 767px) {
      width: auto;
    }
  }

  .btn {
    background-color: #f7890b;
    color: white;
    font-weight: 500;
    @media (max-width: 480px) {
      padding: .2rem .8rem;
      font-size: .8rem;
    }
  }

  h1 {
    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a {
    font-family: Roboto !important;
  }

  .jumbotron {
    background: transparent !important;
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    a {
      font-family: Roboto !important;
    }
    h1,
    h2,
    h3,
    h4,
    h4 {
      font-weight: 300;
    }
  }

  h2 {
    font-size: 2.5rem !important;
    font-weight: 300;
    text-transform: uppercase;
  }

  .blockCenterdiv {
    right: 0;
    left: 0;
    min-height: 10em;
    bottom: 10em;
  }

  img {
    max-width: 100% !important;
    height: auto !important;
  }

  a,
  p {
    font-weight: 300;
    font-size: .7rem;
    font-family: Roboto !important;
    margin-bottom: 0;
  }

  ul {
    li {
      display: inline;
      list-style: none;
    }
  }

  .slideShowProduct {
    .carousel-wrap {
      width: 100%;
      margin: auto;
      position: relative;
      .owl-theme {
        .owl-nav {
          overflow: hidden;
          height: 0;
        }
        .item {
          text-align: center;
          img, span {
            @media (max-width: 767px) {
              width: 70%;
              margin-left: auto;
              margin-right: auto;
            }
          }
        }
        .owl-item img {
          display: block;
          width: 100%;
        }
        .nav-btn {
          height: 47px;
          position: absolute;
          width: 26px;
          cursor: pointer;
          top: 100px !important;
        }
        .owl-prev.disabled,
        .owl-next.disabled {
          pointer-events: none;
          opacity: 0.2;
        }
        .owl-dots {
          display: none;
          @media (max-width: 768px) {
            display: block;
          }
        }
      }
    }

    .owl-stage-outer {
      padding-top: 2rem;
      @media (max-width: 991px) {
        padding-top: 46px;
      }
    }

    .owl-theme .owl-dots .owl-dot.active span,
    .owl-theme .owl-dots .owl-dot:hover span {
      background: #2caae1;
    }

    .owl-carousel .owl-prev.disabled,
    .owl-carousel .owl-next.disabled {
      pointer-events: none;
      opacity: 0.2;
    }

    .owl-carousel .prev-slide {
      background: url("/assets/nav-icon.png") no-repeat scroll 0 0;
      left: -66px;
    }

    .owl-carousel .next-slide {
      background: url("/assets/nav-icon.png") no-repeat scroll -24px 0px;
      right: -66px;
    }

    .owl-carousel .prev-slide:hover {
      background-position: 0px -53px;
    }

    .owl-carousel .next-slide:hover {
      background-position: -24px -53px;
    }
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
