<!-- eslint-disable vue/component-definition-name-casing -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="app-spinner">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loaderComponent',
}
</script>

<style lang="scss" ascoped>
.app-spinner {
  max-width: 120px;
  margin: auto;
  & > i {
    display: inline-block;
    height: 14px;
    width: 14px;
    position: relative;
    border-radius: 100%;
    animation: scale 1s infinite;
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.4s;
    }
    &:nth-child(5) {
      animation-delay: 0.5s;
    }
  }
}
</style>
