<template>
  <div id="app">
    <div v-if="error">{{ error }}</div>
    <div v-else>
      <Suspense>
        <template #default>
          <div>
            <Navbar />
            <main>
              <router-view></router-view>
            </main>

            <Footer />
          </div>
        </template>
        <template #fallback>
          <div class="load">loading</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
// import { ref, defineAsyncComponent } from 'vue'
// import loaderComponent from '@/components/Utility/Loader.vue'
import { ref, onErrorCaptured } from 'vue'

import Navbar from '@/components/Navbar'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  setup() {
    const error = ref(null)

    onErrorCaptured((e) => {
      error.value = e
    })

    return { error }
  },
  components: {
    Navbar,
    Footer,
    // loaderComponent
  },
}
</script>

<style scoped>
.load {
  height: 1000px;
  background: rgb(9, 9, 9);
}
</style>
