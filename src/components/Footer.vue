<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="footer container-md p-0">
      <!-- Footer -->
      <footer class="text-white" style="background-color: #000000">
        <!-- Grid container -->
        <div class="container p-4">
          <!-- Section: Form -->
          <section class="col">
            <form action="">
              <!--Grid row-->
              <div class="row d-flex py-3 justify-content-lg-center">
                <!--Grid column-->
                <div class="col-auto">
                  <p class="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-5 col-12">
                  <!-- Email input -->
                  <div class="form-outline form-white mb-3">
                    <input type="email" id="form5Example2" class="form-control" />
                    <label class="form-label" for="form5Example2">Email address</label>
                  </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-auto">
                  <!-- Submit button -->
                  <button type="submit" class="btn btn-outline-light mb-4">Subscribe</button>
                </div>
                <!--Grid column-->
              </div>
              <!--Grid row-->
            </form>
          </section>
          <!-- Section: Form -->

          <!-- Section: Text -->
          <section class="my-2 link-section">
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.</p>
          </section>
          <!-- Section: Text -->

          <!-- Section: Links -->
          <div class="container">
            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-md-3 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 2</a>
                  </li>
                </ul>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 2</a>
                  </li>
                </ul>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 2</a>
                  </li>
                </ul>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 2</a>
                  </li>
                </ul>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->
          </div>
          <!-- Section: Links -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-5" style="background-color: rgba(0, 0, 0, 0.2)">
          © 2020 Copyright:
          <a class="text-white" href="#">SITE NAME</a>
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
}
</script>

<style scoped>
.link-section p {
  width: 70%;
  padding: 30px 0px;
  margin: 0px auto;
}

/* mobile view */
@media (max-width: 886px) {
  .link-section p {
    width: 100%;
    padding: 40px 0px;
    margin: 0px;
  }

  .form-label {
    margin: 20px 0px 0px 0px;
  }
}
</style>
