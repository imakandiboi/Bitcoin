<template>
  <div>
    <div class="banner-sector">
      <landerAds />
    </div>
  </div>
</template>

<script>
import landerAds from '@/components/DefaultComponent/InvestpageComponent/landerAds.vue'
export default {
  name: 'InvestPage',
  components: {
    landerAds,
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
