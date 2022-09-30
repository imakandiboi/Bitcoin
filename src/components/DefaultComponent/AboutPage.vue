<template>
  <div>
    <div class="about">
      <LandingSection />
    </div>

    <div class="">
      <AboutDetail />
    </div>

    <div class="my-3">
      <AdviceSection />
    </div>

    <div class="my-3">
      <HedgeFund />
    </div>

    <div class="my-3">
      <InvestFund />
    </div>

    <div class="my-3">
      <SectionAnalytic />
    </div>
  </div>
</template>

<script>
import LandingSection from '@/components/DefaultComponent/AboutpageComponent/LandingSection.vue'
import AboutDetail from '@/components/DefaultComponent/AboutpageComponent/AboutDetail.vue'
import AdviceSection from '@/components/DefaultComponent/AboutpageComponent/AdviceSection.vue'
import SectionAnalytic from '@/components/DefaultComponent/AboutpageComponent/SectionAnalytic.vue'
import HedgeFund from '@/components/DefaultComponent/AboutpageComponent/HedgeFund.vue'
import InvestFund from '@/components/DefaultComponent/AboutpageComponent/InvestFund.vue'
export default {
  name: 'AboutPage',
  components: {
    LandingSection,
    AboutDetail,
    AdviceSection,
    SectionAnalytic,
    HedgeFund,
    InvestFund,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  margin-top: 120px;
}

@media (max-width: 886px) {
  .about {
    margin-top: 10px;
  }
}
</style>
