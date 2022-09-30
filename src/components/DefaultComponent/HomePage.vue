<template>
  <div>
    <div class="banner-sector">
      <MainAds />
    </div>
    <section>
      <CompanyProduct />
    </section>
    <!-- 
    <section>
      <VideoLander />
    </section> -->
    <!-- 
    <section>
      <CarouselPage />
    </section> -->
    <section>
      <InvestorPage />
    </section>
    <section>
      <ChooseUs />
    </section>
  </div>
</template>

<script>
// ===========================================
// import VideoLander from '@/components/DefaultComponent/HomepageComponent/VideoLander.vue'

import MainAds from '@/components/DefaultComponent/HomepageComponent/MainAds.vue'
// import CarouselPage from '@/components/DefaultComponent/HomepageComponent/CarouselPage.vue'
import CompanyProduct from '@/components/DefaultComponent/HomepageComponent/CompanyProduct.vue'
import InvestorPage from '@/components/DefaultComponent/HomepageComponent/Investor.vue'
import ChooseUs from '@/components/DefaultComponent/HomepageComponent/ChooseUs.vue'
// ===========================================
export default {
  name: 'HomePage',
  components: {
    // VideoLander,
    MainAds,
    // CarouselPage,
    CompanyProduct,
    InvestorPage,
    ChooseUs,
  },
}
</script>

<style scoped>
.banner-sector {
  width: 100%;
  height: auto;
  background-color: rgb(34, 31, 31);
}
</style>
