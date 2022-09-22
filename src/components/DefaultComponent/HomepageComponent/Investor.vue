<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- DETAILINGS -->
    <section class="no-padding parallax" :style="{ 'background-image': 'url(' + image + ')', backgroundPosition: 'center center', backgroundSize: 'cover' }">
      <div class="container-fluid py-5">
        <div class="row py-5">
          <div class="col-lg-6 col-md-12 offset-lg-6">
            <div class="about-text about-overlay">
              <div class="width-85 md-width-100 sm-center-col">
                <div class="section-heading left white">
                  <h4 class="text-white small-caption">We manage your trades and investments</h4>
                </div>
                <div class="inner-content">
                  <h2 class="display-3 text-white light-caption"><span class="">“We have brought down risks to nearly 0%." for all our </span> Active clients.</h2>
                  <p class="xs-margin-10px-bottom text-white small-caption">Our investment strategy is such that we manage the trades and investments on behalf of our investors, so that they do not have to worry about the risks associated with investing in the financial markets.</p>
                  <p class="text-white small-caption-bold">Simply put, your investments are safer with us.</p>
                  <div class="bottom">
                    <p class="thm-clr text-white small-caption">Smart investors choose us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InvestorPage',

  data() {
    return {
      image: require('@/assets/img/fund.jpeg'),
    }
  },
}
</script>

<style scoped>
.parallax {
  position: relative;
  background-size: cover;
  overflow: hidden;
  background-attachment: fixed;
}
.small-caption {
  padding: 5px 0px 10px 0px;
  font-family: 'Quicksand', sans-serif;
}

.small-caption-bold {
  padding: 5px 0px 10px 0px;
  font-size: 25px;
  font-weight: 500;
  font-family: 'Quicksand', sans-serif;
}
.light-caption {
  font-size: 40px;
  padding: 5px 0px 10px 0px;
  font-family: 'Quicksand', sans-serif;
}
@media (max-width: 886px) {
  .parallax {
    padding: 20px 0px;
  }

  .about-text h4 h2 p {
    color: #0035f5 !important;
  }
}
</style>
