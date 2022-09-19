<template>
  <div>
    <section class="parallax py-5 image" data-overlay-dark="7" :style="{ 'background-image': 'url(' + image + ')', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }">
      <div class="container text-center">
        <div class="section-heading mt-3 half white">
          <h4>We have investment advisors who are ready to give you professional investment advice?</h4>
        </div>
        <a href="https://wa.me/33303030039" class="btn-style2 theme white-hover"><span>Talk To An Advisor</span></a>
        <div class="section-heading my-4 half white"><h6>You will be happy you did.</h6></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require('@/assets/img/advicer.jpeg'),
    }
  },
}
</script>

<style scoped>
.image {
  height: 400px;
  background-image: cover;
}
.half {
  margin-bottom: 30px;
}

.half h4 {
  font-size: 3rem;
  padding-bottom: 10px;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
  line-height: 140%;
  color: #f7f7f7;
}

.half h6 {
  font-size: 2rem;
  padding-bottom: 10px;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
  line-height: 140%;
  color: #f7f7f7;
}

.btn-style2 {
  background: rgb(37, 36, 36);
  display: inline-block;
  font-size: 15px;
  padding: 12px 20px;
  border: 2px solid rgb(254, 254, 254);
  color: #cdcaca;
  letter-spacing: 0.5px;
  line-height: 26px;
  border-radius: 0;
  text-transform: capitalize;
  width: auto;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
}

.butn {
  background: #282b2d;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 0.75rem 1.75rem;
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: 0.6px;
  text-transform: none !important;
  position: relative;
  z-index: 9999;
  display: inline-block;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  -webkit-transition: width 0.4s;
  transition: width 0.4s;
}

/* mobile viiew */

@media (max-width: 886px) {
  .image {
    height: auto;
    background-image: cover;
  }

  .half h4 {
    font-size: 2.2rem;
    padding-bottom: 10px;
    font-weight: 300;
    margin-bottom: 10px;
    position: relative;
    line-height: 140%;
    color: #f7f7f7;
  }

  .half h6 {
    font-size: 1.4rem;
    padding-bottom: 10px;
    font-weight: 300;
    margin-bottom: 10px;
    position: relative;
    line-height: 140%;
    color: #f7f7f7;
  }
}
</style>
