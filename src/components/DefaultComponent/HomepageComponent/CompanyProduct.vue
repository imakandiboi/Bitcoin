<!-- eslint-disable no-undef -->
<template>
  <div>
    <!-- this section displays the companies products and what the company offers customers  -->
    <div class="container offer-section">
      <div class="row justify-content-center w-full m-1">
        <div class="container company-section">
          <div class="d-flex justify-content-center my-5 mt-3-md w-100">
            <div class="row gy-3 gx-lg-0">
              <div class="col-md-4 link-card col-sm">
                <router-link :to="{ path: '/Sign_up' }">
                  <div class="card invest-card large-zoom py-sm-5 py-lg-0 py-md-0">
                    <div class="card">
                      <img :src="image3" class="card-img-top" alt="Fissure in Sandstone" />
                      <h3 class="card-title m-2 pt-5 fw-light">30% RETURN ON INVESTMENT.</h3>
                      <p class="m-2 card-text fw-light">30% return investment profit paid back after 21 days of Investment maturity. Starting off with minimum balance account opening .</p>
                      <a href="/Sign_up" class="m-2 btn-style2">Get Started</a>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-md-4 link-card col-sm">
                <router-link :to="{ path: '/Sign_up' }">
                  <div class="card invest-card large-zoom py-sm-5 py-lg-0 py-md-0">
                    <div class="card">
                      <img :src="image" class="card-img-top" alt="Fissure in Sandstone" />
                      <h3 class="card-title m-2 pt-5 fw-light">IN-DEPT MARKET ANALYSIS AND MARKET PREDICTIONS.</h3>
                      <p class="m-2 card-text fw-light">With our Standard market analysts, we give the best market analysis and prediction according to standard trend of chart flow .</p>
                      <a href="/Sign_up" class="m-2 btn-style2">Get Started</a>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-md-4 link-card col-sm px-sm-0">
                <router-link :to="{ path: '/Sign_up' }">
                  <div class="card invest-card large-zoom py-sm-5 py-lg-0 py-md-0">
                    <div class="card">
                      <img :src="image2" class="card-img-top" alt="Fissure in Sandstone" />
                      <h3 class="card-title m-2 pt-5 fw-light">BEST INVESTMENT PLAN.</h3>
                      <p class="m-2 card-text fw-light">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="/Sign_up" class="m-2 btn-style2">Get Started</a>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section with the col-md-6 class  -->
    <div class="container">
      <div class="row justify-content-center m-auto">
        <div class="col-md-6">
          <div class="card bg-dark text-white my-3">
            <img :src="image4" class="card-img" alt="Stony Beach" />
            <div class="card-img-overlay my-2">
              <h5 class="card-title-box py-3 text-dark font-quicksand">Simple and Seamless Transaction</h5>
              <p class="card-text font-quicksand text-dark">Our Seamless transaction makes it so easy to startup investment , just by scanning our address barcode and one-time you are set to go .</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card bg-dark text-white my-3">
            <img :src="image5" class="card-img" alt="Stony Beach" />
            <div class="card-img-overlay">
              <h5 class="card-title-box py-3 font-quicksand">UP-TO-DATE CHART ANALYSIS WITH 98% MARKET PREDICTIONS OUTCOME</h5>
              <p class="card-text font-quicksand">In Auro Capital our stock market predictions which tallies 98% of US stocks closed in the green on Thursday after a five-day slide but off their session-highs, as investors continued to assess the outlook for growth and the trajectory of monetary policy while awaiting key economic data..</p>
            </div>
          </div>
        </div>
        <!-- seccond section ends here   -->
      </div>
    </div>

    <!--  WHITH SPACING FOR ADS LIKE SPONSOR AND OTHER ALL IN CSSS 
    ASH GREY IDEAS {COULD BE A CAROSUEL 
    
   } -->

    <section class="whitespacings container">
      <section class="text-center my-4 py-4 my-md-5 py-md-5">
        <p class="mb-4">Trusted <strong>by 2,000,000+</strong> developers and designers</p>
        <div class="row mdb-logotypes">
          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/nasa.webp" style="max-height: 27px" class="img-fluid logo-icon" alt="nasa - logo" />
          </div>

          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/amazon.webp" class="img-fluid logo-icon" alt="amazon - logo" />
          </div>

          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/nike.webp" class="img-fluid logo-icon" alt="Nike - logo" />
          </div>

          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/ikea.webp" class="img-fluid logo-icon" alt="ikea - logo" />
          </div>

          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/kpmg.webp" class="img-fluid logo-icon" alt="kpmg - logo" />
          </div>

          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/sony.webp" class="img-fluid logo-icon" alt="sony - logo" />
          </div>

          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/unity.webp" class="img-fluid logo-icon" alt="unity - logo" />
          </div>

          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/samsung.webp" class="img-fluid logo-icon" alt="samsung - logo" />
          </div>

          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/airbus.webp" class="img-fluid logo-icon" alt="airbus - logo" />
          </div>

          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/yahoo.webp" class="img-fluid logo-icon" alt="yahoo - logo" />
          </div>

          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/deloitte.webp" class="img-fluid logo-icon" alt="deloitte - logo" />
          </div>

          <div class="col-lg-1 col-4">
            <img src="https://mdbcdn.b-cdn.net/img/logo/brands/ge.webp" class="img-fluid logo-icon" alt="ge - logo" />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CompanyProduct',

  data() {
    return {
      image3: require('@/assets/img/p2p.png'),
      image4: require('@/assets/img/btcedit.png'),
      image5: require('@/assets/img/editbtc.png'),

      image2: require('@/assets/img/charting.png'),
      image: require('@/assets/img/stat.png'),
    }
  },
}
</script>

<style scoped>
.large-zoom {
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(89, 89, 89, 0.08), 0 0 6px rgba(148, 148, 148, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow, 0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  /* padding: 14px 80px 18px 36px; */
  cursor: pointer;
}

.font-quicksand {
  font-family: 'Quicksand', sans-serif;
}
.card-title-box {
  font-size: 30px;
  font-weight: bold;
}
.large-zoom:hover {
  transform: scale(0.9);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.link-card a {
  color: #0d0d0d;
  text-decoration-line: none;
}
.company-section {
  width: 100%;
  height: auto;
  background: #ffffff;
}
.invest-card {
  width: 95%;
  height: auto;
}
.ads {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 200;
  height: 250px;
}
.whitespacings {
  height: auto;
}

.mdb-logotypes img {
  max-width: 60px;
}
.logo-icon {
  filter: grayscale(100%);
}
.btn-style2 {
  background: rgb(255, 255, 255);
  display: inline-block;
  font-size: 14px;
  padding: 12px 20px;
  border: 2px solid rgb(4, 4, 4);
  color: #0d0d0d;
  letter-spacing: 0.5px;
  line-height: 26px;
  border-radius: 0;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  width: auto;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
}
/* mobile display */
@media (max-width: 1400px) {
  .mdb-logotypes img {
    max-width: 60px;
    margin-bottom: 10px;
  }
  .invest-card {
    width: 100%;
    height: auto;
  }
  .card {
    height: 550px;
  }
  .offer-section {
    width: 100%;
    padding: 0px 0px;
  }

  .card-img {
    height: 550px;
  }
}
</style>
