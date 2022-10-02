<template>
  <div>
    <section class="parallax py-5 image" data-overlay-dark="7" :style="{ 'background-image': 'url(' + image + ')', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }">
      <div class="container card-container mb-3">
        <div class="row">
          <div class="col-md-4">
            <div class="card p-2 mb-2">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon"><i class="bx bxl-mailchimp"></i></div>
                  <div class="ms-2 c-details">
                    <h6 class="my-2">Starter's Investment Plan</h6>
                    <span>1 days ago</span>
                  </div>
                </div>
                <div class="badge"><span>10% off</span></div>
              </div>
              <div class="mt-5">
                <img src="" alt="" class="card-img my-3" srcset="" />
                <h3 class="heading">Senior Product<br />Designer-Singapore</h3>
                <div class="mt-5">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="mt-3">
                    <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card p-2 mb-2">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon"><i class="bx bxl-mailchimp"></i></div>
                  <div class="ms-2 c-details">
                    <h6 class="my-2">Starter's Investment Plan</h6>
                    <span>1 days ago</span>
                  </div>
                </div>
                <div class="badge"><span>Design</span></div>
              </div>
              <div class="mt-5">
                <img src="" alt="" class="card-img my-3" srcset="" />
                <h3 class="heading">Senior Product<br />Designer-Singapore</h3>
                <div class="mt-5">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="mt-3">
                    <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card p-2 mb-2">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon"><i class="bx bxl-mailchimp"></i></div>
                  <div class="ms-2 c-details">
                    <h6 class="my-2">Starter's Investment Plan</h6>
                    <span>1 days ago</span>
                  </div>
                </div>
                <div class="badge"><span>Design</span></div>
              </div>
              <div class="mt-5">
                <img src="" alt="" class="card-img my-3" srcset="" />
                <h3 class="heading">Senior Product<br />Designer-Singapore</h3>
                <div class="mt-5">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="mt-3">
                    <span class="text1">32,000 Investors Applied <span class="text2">of 2,500,000 Investors</span></span>
                  </div>
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
  data() {
    return {
      image: require('@/assets/img/advicer.jpeg'),
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
  background-color: #eee;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 39px;
}

.badge span {
  background-color: #fffbec;
  width: 60px;
  height: 25px;
  padding-bottom: 3px;
  border-radius: 5px;
  display: flex;
  color: #fed85d;
  justify-content: center;
  align-items: center;
}

.progress {
  height: 10px;
  border-radius: 10px;
}

.progress div {
  background-color: red;
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
