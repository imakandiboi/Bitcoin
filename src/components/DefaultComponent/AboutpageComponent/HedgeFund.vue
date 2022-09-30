<template>
  <div>
    <section class="container-md">
      <div class="hedgefund">
        <div class="row container font-quicksand">
          <div class="col-md-6 img-sec">
            <div class="about-ceo">
              <img :src="image" alt="" />
              <div class=""></div>
            </div>
          </div>
          <div class="col-md-6 img-cap">
            <div class="section-heading title-style5 left half line-height-normal">
              <span>Hedge Funds</span>
              <h2>Our funds are diversified to include protocols and blockchain companies.</h2>
              <div class="square">
                <span class="separator-left bg-theme"></span>
                <span class="separator-right bg-theme"></span>
              </div>
            </div>

            <p style="font-size: 15px; line-height: 26px">Our funds focus on tokens that incentivize the core actions of a protocol and/or excel in developing novel mechanisms for smart contracts. In addition, we invest in early token sales that interact with an actual business or product in the blockchain ecosystem.</p>

            <div class="margin-30px-bottom md-margin-25px-bottom xs-margin-20px-bottom">
              <a href="user/register.php"><span class="btn-style2 small theme">INVEST IN HEDGE FUNDS</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require('@/assets/img/fund.jpeg'),
    }
  },
}
</script>

<style scoped>
.font-quicksand {
  font-family: 'Quicksand', sans-serif;
}
.hedgefund {
  padding: 90px 0px;
}
.row {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.section-heading {
  text-align: left;
  margin-bottom: 30px;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  font-size: 15px;
  color: #131313;
  font-weight: 400;
  line-height: 26px;
}
.about-ceo img {
  width: 490px;
  height: 450px;
}
.section-heading h2 {
  padding-bottom: 10px;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 34px;
  line-height: 140%;
}
.section-heading span {
  text-transform: capitalize;
  color: #000000;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
}

.btn-style2 {
  background: #fff;
  display: inline-block;
  font-size: 14px;
  padding: 12px 20px;
  border: 2px solid #222;
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
  .hedgefund {
    padding: 0px 0px;
  }

  .about-ceo {
    width: auto;
    padding: 0px;
  }
  .about-ceo img {
    width: auto;
    height: 350px;
  }

  .img-sec {
    width: auto;
    padding: 0px;
  }

  .img-cap {
    margin: 40px 10px;
  }
}
</style>
