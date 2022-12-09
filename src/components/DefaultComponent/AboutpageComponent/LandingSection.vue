<template>
  <div>
    <div class="container-fluid lander mt-3">
      <section class="bg-image d-flex justify-content-center align-items-center image" :style="{ 'background-image': 'url(' + image + ')', backgroundPosition: 'center center', backgroundSize: 'cover' }">
        <div class="container d-flex flex-column">
          <div class="row align-items-center justify-content-start min-vh-100 static-banner">
            <div class="col-md-9 col-lg-7 display-table h-100 z-index-1 width-100">
              <!-- start banner headline text -->
              <div class="display-table-cell lander-text vertical-align-middle">
                <p class="mx-3 my-2 font-quicksand">Get X10 interest rate in just 24 hours. Minimum investment: $300 Maximum investment: $10,000,000. Payout is carried out every 24 hours</p>
                <h1 class="lander-text mx-3 font-quicksand">Invest in bitcoin Technology. Get X10 profit in 24 hours.</h1>
                <a href="#about" class="mx-3 my-4 btn btn-lg btn-style2 py-3 text-light theme"><span>Get Started</span></a>
              </div>
              <!-- end banner headline text -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingSection',

  data() {
    return {
      image: require('@/assets/img/aboutlander1.jpeg'),
    }
  },
}
</script>

<style scoped>
.font-quicksand {
  font-family: 'Quicksand', sans-serif;
}
.lander {
  color: aliceblue;
  padding: 20px 0px;
  height: 600px;
  padding: 0;
}

.image {
  height: 500px;
  background-image: cover;
}

.lander-text {
  background: #000000;
  box-shadow: 0 8px 32px 0 rgba(137, 137, 137, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
}
.lander-text h1 {
  margin: 0 0 20px;
  padding: 0;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 60px;
  font-family: 'Montserrat', sans-serif;
  color: #e4e3e3;
}

.lander-text p {
  letter-spacing: 0;
  color: #383838;
  font-weight: 400;
  /* margin: 0 0 20px; */
  font-size: 20px;
  word-spacing: 1px;
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

/* mobile view */

@media (max-width: 886px) {
  .lander {
    padding: 20px 0px;
    height: auto;
  }

  .image {
    height: auto;
    padding: 20px 0px;
    background-image: cover;
  }

  .lander-text h1 {
    margin: 0 0 20px;
    padding: 0;
    letter-spacing: 0;
    font-weight: 250;
    font-size: 40px;
    font-family: 'Montserrat', sans-serif;
    color: #e4e3e3;
  }

  .lander-text p {
    letter-spacing: 0;
    color: #f6f6f6;
    font-weight: 400;
    font-style: bold;
    /* margin: 0 0 20px; */
    font-size: 15px;
    word-spacing: 1px;
  }
}
</style>
