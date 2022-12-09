<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :style="{ 'background-image': 'url(' + image + ')', backgroundPosition: 'center center', backgroundSize: 'cover' }">
    <div class="container-md sign-up">
      <!-- Check that the SDK client is not currently loading before accessing is methods -->
      <div class="container-md sign">
        <div class="row">
          <div class="col-md-6">
            <h1 class="font-quicksand py-3 signup-text">Get started On time with investing</h1>
            <span class="inner-txt font-quicksand text-left">
              <p class="margin-30px-bottom sm-margin-20px-bottom width-95">Our hedge funds are the onestop alternative investments that are designed to protect investors' assets from market uncertainty, while generating positive returns in both up and down markets. Our hedge fund approach is achieved using pooled funds that employ different strategies to earn active returns, or alpha, for our investors. We combine aggressive management and make use of derivatives and leverage in both domestic and international markets with the goal of generating high returns (either in an absolute sense or over a specified market benchmark). <br /></p>
            </span>
          </div>
          <div class="col-md-6">
            <div class="pt-5 pb-1">
              <ul class="navbar-nav py-3">
                <li v-if="!isAuthenticated && !isLoading" class="nav-item">
                  <a id="qsLoginBtn" class="btn-style2" @click.prevent="login">SIGN-UP NOW</a>
                </li>

                <li class="nav-item dropdown" v-if="isAuthenticated">
                  <a class="nav-link dropdown-toggle" href="#" id="profileDropDown" data-toggle="dropdown">
                    <img :src="user.picture" alt="User's profile picture" class="nav-user-profile rounded-circle" width="50" />
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-header">{{ user.name }}</div>
                    <router-link to="/profile" class="dropdown-item dropdown-profile"> <font-awesome-icon class="mr-3" icon="user" />Profile </router-link>
                    <a id="qsLogoutBtn" href="#" class="dropdown-item" @click.prevent="logout"> Log out </a>
                  </div>
                </li>
              </ul>
            </div>

            <div class="pt-1 pb-3">
              <div class="image-section" :style="{ 'background-image': 'url(' + image3 + ')', backgroundPosition: 'center center', backgroundSize: 'cover' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  data() {
    return {
      image: require('@/assets/img/signup.jpeg'),
      image3: require('@/assets/img/icon/tap.png'),
    }
  },
  setup() {
    const { loginWithRedirect } = useAuth0()
    const { logout } = useAuth0()
    return {
      login: () => {
        loginWithRedirect()
      },

      logout: () => {
        logout({ returnTo: window.location.origin })
      },
    }
  },
}
</script>

<style scoped>
.sign {
  display: grid;
  grid-gap: 5px;

  justify-items: center;
  background-color: #ffffff;
}
.sign-up {
  height: 700px;

  padding: 190px 40px 80px 40px;
}
.inner-txt {
  margin: 5px;
  font-size: 17px;
}

.font-quicksand {
  font-family: 'Quicksand', sans-serif;
}

.signup-text {
  font-size: 35px;
}
.image-section {
  height: 50px;
  width: 50px;
  justify-items: center;
  align-items: center;
}
.btn-style2 {
  background: rgb(255, 255, 255);
  display: inline-block;
  font-size: 14px;
  padding: 12px 20px;
  cursor: pointer;
  border: 2px solid rgb(4, 4, 4);
  color: #0d0d0d;
  letter-spacing: 0.5px;
  line-height: 26px;
  border-radius: 0;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  width: 500px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
}

@media (max-width: 886px) {
  .sign-up {
    height: 900px;
    padding: 190px 10px 80px 10px;
  }

  .btn-style2 {
    background: rgb(255, 255, 255);
    display: inline-block;
    font-size: 14px;
    padding: 12px 20px;
    cursor: pointer;
    border: 2px solid rgb(4, 4, 4);
    color: #0d0d0d;
    letter-spacing: 0.5px;
    line-height: 26px;
    border-radius: 0;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    width: 300px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
  }
}
</style>
