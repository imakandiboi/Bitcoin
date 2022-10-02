<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <div class="invest">
      <InvestPage />
    </div>
  </div>
</template>

<script>
import InvestPage from '@/components/DefaultComponent/InvestPage.vue'

export default {
  components: {
    InvestPage,
  },
}
</script>

<style scoped>
.invest {
  margin: 50px 0px 0px 0px;
}
</style>
