<template>
  <div>
    <div class="banner-sector">
      <StepInvest />
    </div>
  </div>
</template>

<script>
import StepInvest from '@/components/DefaultComponent/InvestpageComponent/StepInvest.vue'
export default {
  name: 'StepInvest',
  components: {
    StepInvest,
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
