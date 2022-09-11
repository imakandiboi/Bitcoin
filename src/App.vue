<template>
  <div id="app">
    <div>
      <Navbar />
      <main>
        <router-view></router-view>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { Navbar, Footer },
}
</script>

<style scoped></style>
