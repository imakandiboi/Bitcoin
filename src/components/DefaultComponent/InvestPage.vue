<template>
  <div>
    <div class="banner-sector">
      <stepInvest />
    </div>
  </div>
</template>

<script>
import stepInvest from '@/components/DefaultComponent/investpageComponent/stepInvest.vue'
export default {
  name: 'InvestPage',
  components: {
    stepInvest,
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
