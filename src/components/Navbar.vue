<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg headnav text-secondary text-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Investment Plans </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <nav class="navbar navbar-expand-lg border-bottom bg-white sticky-top shadow-sm justify-content-between navbar-light" id="bs-menu-nav">
      <div class="container-fluid">
        <div class="d-flex w-25 order-0" style="align-items: baseline">
          <a class="navbar-brand" href="/">
            <img src="/static/img/shuffle-frameworks/shuffle-for-bootstrap-color.svg" alt="SITE-NAME/LOGO" class="logo" />
          </a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-menu-toogle" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="justify-content-center d-none d-lg-block">
          <ul class="navbar-nav">
            <li class="nav-item mr-1">
              <a class="nav-link" href="/#how-it-works" data-section="how-it-works">About Us</a>
            </li>
            <li class="nav-item mr-1">
              <a class="nav-link" href="/#features" data-section="features">Features</a>
            </li>
            <li class="nav-item mr-1">
              <a class="nav-link" href="/#features">Visionary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#investmest" data-section="purchase">Investment Plan</a>
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
            <a href="https://shuffle.dev/editor?project=b94872dd6f9b32eb6e4280da1fe844bcbb0ba50c&amp;editor=bootstrap" class="btn btn-dark d-none d-lg-inline-block px-2">Try Demo</a>
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
  height: 90px;
}
</style>
