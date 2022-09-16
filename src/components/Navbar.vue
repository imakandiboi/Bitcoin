<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg headnav border-bottom bg-white sticky-top shadow-sm justify-content-between navbar-light" id="bs-menu-nav">
      <div class="container-fluid">
        <div class="d-flex w-25 order-0" style="align-items: baseline">
          <router-link :to="{ name: 'Home' }">
            <a class="navbar-brand nav-link active" href="/">
              <img src="/static/img/shuffle-frameworks/shuffle-for-bootstrap-color.svg" alt="SITE-NAME/LOGO" class="logo" />
            </a>
          </router-link>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-menu-toogle" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="justify-content-center d-none d-lg-block">
          <ul class="navbar-nav">
            <li class="nav-item mr-1">
              <router-link :to="{ name: 'About' }">
                <a class="nav-link" href="/About" data-section="About">About Us</a>
              </router-link>
            </li>

            <li class="nav-item mr-1">
              <router-link :to="{ name: 'Investment' }">
                <a class="nav-link" href="/Investment" data-section="features">Investment Plan </a>
              </router-link>
            </li>
            <li class="nav-item mr-1">
              <a class="nav-link" href="/#features">Visionary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#is" data-section="purchase">Features</a>
            </li>
          </ul>
        </div>
        <div class="navbar-collapse collapse order-2 w-25 justify-content-end" id="bs-menu-toogle">
          <div class="justify-content-center">
            <ul class="navbar-nav d-block d-lg-none mt-1">
              <li class="nav-item">
                <a class="nav-link" href="/#how-it-works" data-section="how-it-works">How it works</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#features" data-section="features">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-external" href="https://shuffle.dev/blog/">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#purchase" data-section="purchase">Purchase</a>
              </li>
            </ul>
          </div>
          <span class="links-primary order-1 order-lg-last text-lg-right d-block d-lg-inline">
            <a href="https://shuffle.dev/login?redirect=bootstrap-shuffle" class="btn btn-login pl-0 pl-lg-1">Log in</a>
            <a href="https://shuffle.dev/editor?project=b94872dd6f9b32eb6e4280da1fe844bcbb0ba50c&amp;editor=bootstrap" class="btn btn-sign btn-dark d-none d-lg-inline-block px-2">Sign Up </a>
          </span>
        </div>
      </div>
    </nav>
    <!-- END OF NAVIGATION BAR -->
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
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
</style>
