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

    <div class="mobile-view mt-5" :style="{ 'background-image': 'url(' + image + ')', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }">
      <section class="container-fluid">
        <div class="content"></div>
        <div class="content overlay-box px-3">
          <p class="first-cap mt-3">Get the into the world of Crypto ivestments across all market stocks.</p>
          <hr class="line" />
          <p class="second-cap">BEST OF INVESTMENT</p>

          <p class="third-cap">GET STARTED WITH IN-DEPT <span class="bg-warning m-2">MARKET ANALYSIS .</span></p>

          <a href="#about" class="mx-3 my-4 btn btn-lg btn-style2 py-3 text-light theme"><span>Get Started</span></a>
        </div>
      </section>
    </div>
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

      image: require('@/assets/img/stat.png'),
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
.mobile-view {
  position: relative;
  display: none;
  height: 80vh;
}
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

.content {
  width: 100%;
  height: 90vh;
  position: absolute;
  padding: 0px;
  top: 0;
  left: 0;
  color: rgba(248, 248, 248, 0.902);
}

.overlay-box {
  background: #392f3192;
  z-index: 1;
  width: 100%;
  /* for demo purpose  */
}

.content .first-cap {
  font-size: 17px;
  padding: 10px 0px 10px 0px;
  font-family: 'Quicksand', sans-serif;
}
.content .second-cap {
  font-size: 18px;
  font-weight: 300;
  padding: 10px 0px 10px 0px;
  font-family: 'Quicksand', sans-serif;
}

.content .third-cap {
  font-size: 45px;
  padding: 10px 0px 30px 0px;
  font-family: 'Quicksand', sans-serif;
}

.line {
  width: 95%;
  height: 5px;
  color: black;
}

.btn-style2 {
  background: rgb(56, 55, 55);
  display: inline-block;
  font-size: 14px;
  padding: 12px 20px;
  border: 2px solid rgb(255, 255, 255);
  color: #232323;
  letter-spacing: 0.5px;
  line-height: 26px;
  border-radius: 0;
  text-transform: uppercase;
  width: auto;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
}

@media (max-width: 886px) {
  .carousel {
    display: none;
  }

  .mobile-view {
    display: block;
    height: 90vh;
    position: relative;
    background: #ffff;
  }
}
</style>
