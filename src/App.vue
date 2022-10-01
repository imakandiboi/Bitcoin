<template>
  <div id="app">
    <template>
      <div>
        <Navbar />
      </div>
      <main>
        <router-view></router-view>
      </main>
      <div>
        <Footer />
      </div>
    </template>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
  },
}
</script>

<style scoped>
.load {
  height: 1000px;
  background: rgb(9, 9, 9);
}
</style>
