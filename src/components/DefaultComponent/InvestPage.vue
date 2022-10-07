<template>
  <div>
    <div class="banner-sector">
      <landerAds />
      <chartTab />
    </div>
  </div>
</template>

<script>
import landerAds from '@/components/DefaultComponent/PlanpageComponent/landerAds'
import chartTab from '@/components/DefaultComponent/PlanpageComponent/chartTab'
export default {
  name: 'InvestPage',
  components: {
    landerAds,
    chartTab,
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
