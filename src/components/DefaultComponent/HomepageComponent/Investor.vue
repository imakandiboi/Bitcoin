<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <section class="no-padding parallax" :style="{ 'background-image': 'url(' + image + ')', backgroundPosition: 'center center', backgroundSize: 'cover' }">
      <div class="container-fluid py-5">
        <div class="row py-5">
          <div class="col-lg-6 col-md-12 offset-lg-6">
            <div class="about-text about-overlay">
              <div class="width-85 md-width-100 sm-center-col">
                <div class="section-heading left white">
                  <h4 class="text-white">We manage your trades and investments</h4>
                </div>
                <div class="inner-content">
                  <h2 class="display-3 text-white"><span>“We have brought down risks to nearly 0%." </span> for all our active clients.</h2>
                  <p class="xs-margin-10px-bottom text-white">Our investment strategy is such that we manage the trades and investments on behalf of our investors, so that they do not have to worry about the risks associated with investing in the financial markets.</p>
                  <p class="text-white">Simply put, your investments are safer with us.</p>
                  <div class="bottom">
                    <p class="thm-clr text-white">Smart investors choose us.</p>
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
</style>
