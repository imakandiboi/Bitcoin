<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.E-h8EFHUvHip4ih81PdTuwHaEE%26pid%3DApi&f=1" class="d-block w-100 h-50" style="height: 50%" alt="..." />
        </div>
        <div class="carousel-item active">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.E-h8EFHUvHip4ih81PdTuwHaEE%26pid%3DApi&f=1" class="d-block w-100 h-50" style="height: 50%" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.E-h8EFHUvHip4ih81PdTuwHaEE%26pid%3DApi&f=1" class="d-block w-100 h-50" style="height: 50%" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.xv_3w5hSnCc1gEaAra2rlwHaEc%26pid%3DApi&f=1" class="d-block w-100 h-50" style="height: 50%" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div></div>
  </div>
</template>

<script>
//importing bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import * as Bootstrap from 'bootstrap'
export default {
  name: 'MainAds',
  components: {},

  // function() {
  //   if (this.source) {
  //     //is it empty
  //     this.image = this.source //replace placeholder
  //   }
  //   this.loading = false
  // },
  data() {
    return {
      //url for placeholder image
      loading: true,
      // image: ,
    }
  },
  mounted() {
    var myCarousel = document.querySelector('#myCarousel')
    new Bootstrap.Carousel(myCarousel)
  },
  computed: {},
}
</script>

<style scoped>
.carousel .carousel-item {
  height: 800px;
}

.carousel-item img {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  min-height: 800px;
}
</style>
