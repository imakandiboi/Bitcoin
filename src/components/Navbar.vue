<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg bg-light py-2 py-sm-3 px-2 fixed-top">
      <div class="container">
        <router-link :to="{ name: 'Home' }">
          <img :src="image" alt="" srcset="" class="nav-img" />
          <a class="navbar-brand" href="#"> <img src="" alt="" srcset="" class="logo" /> Auro Capital Investment </a>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas side-bar offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <img src="" alt="" srcset="" class="logo" />
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 p-2">
              <li class="nav-item">
                <router-link :to="{ name: 'Home' }">
                  <span class="d-flex align-items-center gap-3">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'About' }">
                  <span class="d-flex align-items-center gap-3">
                    <a class="nav-link" href="#">About Us</a>
                  </span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Investment' }">
                  <span class="d-flex align-items-center gap-3">
                    <a class="nav-link" href="#">Investment Plan</a>
                  </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'About' }">
                  <span class="d-flex align-items-center gap-2">
                    <a class="nav-link" href="#">Sign Up</a>
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- this is news  -->

    <div class="mt-5 widget fixed container-fluid">
      <div id="coinmarketcap-widget-marquee" coins="1,1027,825,2010,6636,1883,11346,1831" currency="USD" theme="light" transparent="false" show-symbol-logo="true"></div>
    </div>
    <!-- END OF NAVIGATION BAR -->
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      image: require('@/assets/img/bitcoin.png'),
    }
  },
}
</script>

<style scoped>
.navbar-toggler {
  outline: none;
}
.widget {
  padding: 0px;
  position: absolute;
  top: 4%;
  z-index: 3;
}
.nav-img {
  width: 30px;
}
.headnav {
  height: 70px;
}
.btn-sign {
  margin: 0px 20px;
  width: 90px;
}
.headnav a {
  font-family: Snippet;
  font-size: 15px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 100;
}
.navbar a {
  text-decoration: none;
}
@media (max-width: 886px) {
  .widget {
    padding: 0px;
    position: absolute;
    top: 0.8%;
    z-index: 3;
  }
}
</style>
