<template>
  <!-- choose us section 


this tell why user should choose us 

 -->
  <div>
    <section class="lg chose-us bg-transparent bg-img cover-background" data-overlay-dark="0" data-background="img/bg/shape-01.png" style="background-image: url('img/bg/shape-01.png')">
      <div class="container">
        <div class="section-heading title-style8">
          <h3>Why Choose Bexo Capital?</h3>
          <p class="width-55 sm-width-75 xs-width-95 center-col">There are countless reasons why we stand out amongst other investment firms, and our direct competition. Here are some of those reasons:</p>
        </div>
        <div class="row">
          <div class="bg-dark col-lg-6 col-md-6 col-sm-12 margin-30px-bottom sm-margin-20px-bottom">
            <div class="feature-box-05 padding-40px-tb md-padding-30px-tb padding-20px-lr bg-card h-100">
              <div class="row">
                <div class="col-2">
                  <div class="features-icon">
                    <img class="image" :src="image" width="80px" title="user icons" />
                  </div>
                </div>
                <div class="col-10">
                  <h4 class="font-weight-600 font-size20 md-font-size18 sm-font-size16 margin-10px-bottom sm-margin-8px-bottom">Best Minds</h4>
                  <p class="no-margin-bottom">Our team of analysts and traders have the deepest and broadest experiences in the financial markets, and especially in the blockchain ecosystem.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-dark col-lg-6 col-md-6 col-sm-12 margin-30px-bottom sm-margin-20px-bottom">
            <div class="feature-box-05 padding-40px-tb md-padding-30px-tb padding-20px-lr bg-card h-100">
              <div class="row">
                <div class="col-2">
                  <div class="features-icon">
                    <img class="image" :src="image3" width="80px" title="user icons" />
                  </div>
                </div>
                <div class="col-10">
                  <h4 class="font-weight-600 font-size20 md-font-size18 sm-font-size16 margin-10px-bottom sm-margin-8px-bottom">Unique Asset Classes</h4>
                  <p class="no-margin-bottom">Bexo Capital looks for tokens that incentivize the core actions of a protocol and/or excel in developing novel mechanisms for smart contracts.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-dark col-lg-6 col-md-6 col-sm-12 xs-margin-20px-bottom">
            <div class="feature-box-05 padding-40px-tb md-padding-30px-tb padding-20px-lr bg-card h-100">
              <div class="row">
                <div class="col-2">
                  <div class="features-icon">
                    <img class="image" :src="image2" width="80px" title="user icons" />
                  </div>
                </div>
                <div class="col-10">
                  <h4 class="font-weight-600 font-size20 md-font-size18 sm-font-size16 margin-10px-bottom sm-margin-8px-bottom">Advanced Technology</h4>
                  <p class="no-margin-bottom">We have combined a total of 35 technologies for our trading operations and security systems, to ensure that investors funds are safe.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-dark col-lg-6 col-md-6 col-sm-12">
            <div class="feature-box-05 padding-40px-tb md-padding-30px-tb padding-20px-lr bg-card h-100">
              <div class="row">
                <div class="col-2">
                  <div class="features-icon">
                    <img class="image" :src="image4" width="80px" title="user icons" />
                  </div>
                </div>
                <div class="col-10">
                  <h4 class="font-weight-600 font-size20 md-font-size18 sm-font-size16 margin-10px-bottom sm-margin-8px-bottom">Venture Backed</h4>
                  <p class="no-margin-bottom">Over $400 million in assets from several traditional VC firms from Silicon Valley have been injected into the Bexo Capital project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ChooseUs',
  data() {
    return {
      image: require('@/assets/img/icon/user.png'),
      image2: require('@/assets/img/icon/recycle.png'),
      image3: require('@/assets/img/icon/abacus.png'),
      image4: require('@/assets/img/icon/line-graph.png'),
    }
  },
}
</script>

<style scoped>
section.lg {
  padding: 120px 0;
}

section {
  display: block;
}

.section-heading.title-style8 {
  text-align: center;
}
.section-heading {
  margin-bottom: 50px;
  text-align: center;
}

.padding-20px-lr {
  padding-left: 20px;
  padding-right: 20px;
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.padding-40px-tb {
  padding-top: 40px;
  padding-bottom: 40px;
}
.h-100 {
  height: 100% !important;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.bg-card {
  color: #c0c4c6;
  background-color: black !important;
}
/* .icon-mobile,
.icon-laptop,
.icon-desktop,
.icon-tablet,
.icon-phone,
.icon-document,
.icon-documents,
.icon-search,
.icon-clipboard,
.icon-newspaper,
.icon-notebook,
.icon-book-open,
.icon-browser,
.icon-calendar,
.icon-presentation,
.icon-picture,
.icon-pictures,
.icon-video,
.icon-camera,
.icon-printer,
.icon-toolbox,
.icon-briefcase,
.icon-wallet,
.icon-gift,
.icon-bargraph,
.icon-grid,
.icon-expand,
.icon-focus,
.icon-edit,
.icon-adjustments,
.icon-ribbon,
.icon-hourglass,
.icon-lock,
.icon-megaphone,
.icon-shield,
.icon-trophy,
.icon-flag,
.icon-map,
.icon-puzzle,
.icon-basket,
.icon-envelope,
.icon-streetsign,
.icon-telescope,
.icon-gears,
.icon-key,
.icon-paperclip,
.icon-attachment,
.icon-pricetags,
.icon-lightbulb,
.icon-layers,
.icon-pencil,
.icon-tools,
.icon-tools-2,
.icon-scissors,
.icon-paintbrush,
.icon-magnifying-glass,
.icon-circle-compass,
.icon-linegraph,
.icon-mic,
.icon-strategy,
.icon-beaker,
.icon-caution,
.icon-recycle,
.icon-anchor,
.icon-profile-male,
.icon-profile-female,
.icon-bike,
.icon-wine,
.icon-hotairballoon,
.icon-globe,
.icon-genius,
.icon-map-pin,
.icon-dial,
.icon-chat,
.icon-heart,
.icon-cloud,
.icon-upload,
.icon-download,
.icon-target,
.icon-hazardous,
.icon-piechart,
.icon-speedometer,
.icon-global,
.icon-compass,
.icon-lifesaver,
.icon-clock,
.icon-aperture,
.icon-quote,
.icon-scope,
.icon-alarmclock,
.icon-refresh,
.icon-happy,
.icon-sad,
.icon-facebook,
.icon-twitter,
.icon-googleplus,
.icon-rss,
.icon-tumblr,
.icon-linkedin,
.icon-dribbble. */
.features-icon .image {
  font-family: 'et-line';
  font-style: 30px;
  width: 80px;

  font-variant: normal;
  text-transform: none;
  line-height: 1;
  color: #b4b5b6;
  font-size: 40px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
}

.section-heading.title-style8 {
  text-align: center;
}
.cover-background {
  position: relative !important;
  background-size: cover !important;
  overflow: hidden !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

.bg-transparent {
  background-color: transparent !important;
}

@media (max-width: 886px) {
  .image {
    max-width: 40px;
    margin-bottom: 10px;
  }
  .chose-us {
    padding: 10px 0px;
  }

  section.lg {
    padding: 30px 0;
  }

  .section-heading {
    padding: 20px 0px;
    height: auto;
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
