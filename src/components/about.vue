<template>
    <div class="about">
      <panel-about/>
      <div class="contentAboutUs">
        <div class="aboutUs">
          <div class="col-12 d-flex justify-content-center p-3 pt-md-4">
            <h1 class="pt-md-3">ABOUT US</h1>
          </div>
          <div class="description text-center"><p>Lorem Ipsum has been the industry's standard dummy text
            ever since the
            1500s,<br>
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
          <div class="contentDetails">
            <div class="container">
              <div class="row">
                <div class="col-sm-4 col-12 pt-sm-0 pt-4 text-center item">
                  <img src="../assets/fdicompany.jpg" class="pb-sm-5 pb-3 pb-md-4">
                  <div class="descriptionForImage ml-auto mr-auto"><p>100% FDI Company</p></div>
                </div>
                <div class="col-sm-4 col-12 pt-sm-0 pt-4 text-center item">
                  <img src="../assets/experiencedStaff.jpg" class="pb-sm-5 pb-3 pb-md-4">
                  <div class="descriptionForImage ml-auto mr-auto"><p>Experienced staffs</p></div>
                </div>
                <div class="col-sm-4 col-12 pt-sm-0 pt-4 text-center item">
                  <img src="../assets/overseaMarket.jpg" class="pb-sm-5 pb-3 pb-md-4">
                  <div class="descriptionForImage ml-auto mr-auto"><p>We connections with oversea markets</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import HomeIndex from '../view/home'
import PanelAbout from './Homepage/panelAbout'
export default {
  name: 'about',
  components: { PanelAbout },
  created () {
    this.$emit(`update:layout`, HomeIndex)
  }
}
</script>

<style scoped lang="scss">
  .about {
    .contentAboutUs {
      .aboutUs {
        h1 {
          font-size: 2.5rem;
        }
        .description {
          right: 0;
          left: 0;
          margin-right: auto;
          margin-left: auto;
          width: 60%;
          p {
            font-size: 1rem;
            line-height: 1.75;
            letter-spacing: normal;
            text-align: center;
            color: #222222;
            font-family: Roboto;
          }
          @media (max-width: 767px) {
            width: 90%;
          }
        }
        .contentDetails {
          padding-top: 3rem;
          p {
            font-family: Roboto;
            font-size: 1.5rem;
            font-weight: 500;
            text-align: center;
            color: #000000;
          }
          .col-12 {
            @media (max-width: 767px) {
            }
          }
          img{
            width: 100px !important;
          }
          .descriptionForImage {
            width: 80%;
            @media (max-width: 991px) {
              width: 100%;
            }
            @media (max-width: 575px) {
              width: 35%;
            }
          }
        }
      }
    }
  }
</style>
