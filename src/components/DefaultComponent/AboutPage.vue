<template>
  <div>
    <div class="">
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
  </div>
</template>

<script>
import LandingSection from '@/components/DefaultComponent/AboutpageComponent/LandingSection.vue'
import AboutDetail from '@/components/DefaultComponent/AboutpageComponent/AboutDetail.vue'
import AdviceSection from '@/components/DefaultComponent/AboutpageComponent/AdviceSection.vue'
import HedgeFund from '@/components/DefaultComponent/AboutpageComponent/HedgeFund.vue'
export default {
  name: 'AboutPage',
  components: {
    LandingSection,
    AboutDetail,
    AdviceSection,
    HedgeFund,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
