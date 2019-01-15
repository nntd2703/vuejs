<template>
    <div class="about">
      <div class="panelAboutUs paral"></div>
      <div class="contentAboutUs">
        <div class="aboutUs">
          <div class="col-12 d-flex justify-content-center p-3 p-md-5">
            <h1>ABOUT US</h1>
          </div>
          <div class="description text-center"><p>Lorem Ipsum has been the industry's standard dummy text
            ever since the
            1500s,<br>
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
          <div class="contentDetails">
            <div class="container">
              <div class="row">
                <div class="col-md-4 col-12  text-center">
                  <img src="../assets/fdicompany.jpg" class="pb-5 pb-md-4">
                  <div class="descriptionForImage ml-auto mr-auto"><p>100% FDI Company</p></div>
                </div>
                <div class="col-md-4 col-12  text-center">
                  <img src="../assets/experiencedStaff.jpg" class="pb-4 pb-md-3">
                  <div class="descriptionForImage ml-auto mr-auto"><p>Experienced staffs</p></div>
                </div>
                <div class="col-md-4 col-12  text-center">
                  <img src="../assets/overseaMarket.jpg" class="pb-5 pb-md-4">
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
export default {
  name: 'about',
  created () {
    this.$emit(`update:layout`, HomeIndex)
  }
}
</script>

<style scoped lang="scss">
  .about {
    .panelAboutUs {
      background-image: url("../assets/pannelaboutus.jpg");
    }
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
          padding-top: 2rem;
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
          padding: 3rem 0;
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
            width: 50%;
            @media (max-width: 991px) {
              width: 100%;
            }
            @media (max-width: 767px) {
              width: 50%;
            }
          }
        }
      }
    }
  }
</style>
