<template>
  <div>
    <div class="py-5 image" :style="{ 'background-image': 'url(' + image + ')', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }">
      <div class="container card-container mb-3">
        <div class="row">
          <div class="col-md-4">
            <div class="card p-2 mb-2 large-zoom">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon"><i class="bx bxl-mailchimp"></i></div>
                  <div class="ms-2 c-details">
                    <h6 class="my-2">Starter's Chioce Investment Plan</h6>
                    <span>min. deposit : $500</span>
                  </div>
                </div>
                <div class="badge"><span>10% off</span></div>
              </div>
              <div class="mt-5">
                <img :src="starterimage" alt="" class="card-img my-3" srcset="" />
                <h3 class="heading">Starter's Choice<br />Level</h3>
                <div class="mt-5">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="mt-3">
                    <span class="text1">800,000 Investors Applied<span class="text2"> out of 2,500,000 Investors</span></span>
                  </div>
                  <div class="margin-30px-bottom md-margin-25px-bottom xs-margin-20px-bottom my-3">
                    <a href="#"><span class="btn-style2 small theme">Get Started</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card p-2 mb-2 large-zoom">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon"><i class="bx bxl-mailchimp"></i></div>
                  <div class="ms-2 c-details">
                    <h6 class="my-2">Professional's Choice Investment Plan</h6>
                    <span>min. deposit : $1500</span>
                  </div>
                </div>
                <div class="badge"><span>30% off</span></div>
              </div>
              <div class="mt-5">
                <img :src="starterimage" alt="" class="card-img my-3" srcset="" />
                <h3 class="heading">Professional's Choice<br />Level</h3>
                <div class="mt-5">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="mt-3">
                    <span class="text1"> 1,380,000 Investors Applied <span class="text2"> out of 2,500,000 Investors</span></span>
                  </div>
                  <div class="margin-30px-bottom md-margin-25px-bottom xs-margin-20px-bottom my-3">
                    <a href="#"><span class="btn-style2 small theme">Get Started</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card p-2 mb-2 large-zoom">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon"><i class="bx bxl-mailchimp"></i></div>
                  <div class="ms-2 c-details">
                    <h6 class="my-2">Intermediate's Choice Investment Plan</h6>
                    <span>min. deposit : $1000</span>
                  </div>
                </div>
                <div class="badge"><span>25% off</span></div>
              </div>
              <div class="mt-5">
                <img :src="starterimage" alt="" class="card-img my-3" srcset="" />
                <h3 class="heading">Intermediate's Choice<br />Level</h3>
                <div class="mt-5">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="mt-3">
                    <span class="text1">320,000 Investors Applied <span class="text2"> out of 2,500,000 Investors</span></span>
                  </div>
                </div>
                <div class="margin-30px-bottom md-margin-25px-bottom xs-margin-20px-bottom my-3">
                  <a href="#"><span class="btn-style2 small theme">Get Started</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvestPrice',
  data() {
    return {
      image: require('@/assets/img/advicer.jpeg'),
      starterimage: require('@/assets/img/advicer.jpeg'),
    }
  },
}
</script>

<style scoped>
.card-container {
  margin-top: 180px;
}

.card-img {
  width: 100%;
  height: 200px;
}
body {
  background-color: #eee;
}

.card {
  border: none;
  border-radius: 10px;
}

.c-details span {
  font-weight: 300;
  font-size: 13px;
}

.icon {
  width: 20px;
  height: 20px;
  background-color: rgba(35, 107, 2, 0.559);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 39px;
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

.badge span {
  background-color: #fffbec;
  width: 60px;
  height: 25px;
  padding-bottom: 3px;
  border-radius: 5px;
  display: flex;
  color: #fe5d5d;
  justify-content: center;
  align-items: center;
}

.large-zoom {
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(89, 89, 89, 0.08), 0 0 6px rgba(148, 148, 148, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow, 0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  /* padding: 14px 80px 18px 36px; */
  cursor: pointer;
}

.large-zoom:hover {
  transform: scale(0.9);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}

.progress {
  height: 10px;
  border-radius: 10px;
}

.progress div {
  background-color: rgba(35, 107, 2, 0.559);
}

.text1 {
  font-size: 14px;
  font-weight: 600;
}

.text2 {
  color: #a5aec0;
}

@media (max-width: 886px) {
}
</style>
