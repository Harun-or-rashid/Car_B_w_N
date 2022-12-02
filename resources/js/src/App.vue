<template>
  <div id="app">
    <div id="nav">
      <header class="header_area">
        <b-container>
          <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#" ><img alt="Vue logo" :src="headerLogo"></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="#">MENU</b-nav-item>
                <b-nav-item href="#">STORES</b-nav-item>
                <b-nav-item href="#">CAREERS</b-nav-item>
                <b-nav-item href="#">REWARDS</b-nav-item>
                <b-nav-item href="#">LOCATIONS</b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item class="mn_signin" :to="'/register'">SIGN IN & EARN<br/>REWARDS</b-nav-item>
                <b-nav-item class="mn_cart" href="#">Cart</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-container>
      </header>
    </div>

    <router-view/>
    
    <footer class="footer_area">
      
      <div class="footer-top">
        <b-container>
          <b-row>
            <b-col md="12">
              <div class="text-section">
                <div class="text-section-inner">
                  <p>Food Allergen & Sensitivity: Customers with allergies and allergy-related questions can contact the restaurant manager at orders@kookospizza.ca Please be aware that Kookos Pizza products may have come into contact with nuts, peanuts, and other possible allergens. Kookos Pizza is serving foods that are not in sealed packages and come from various vendors, We, unfortunately, cannot guarantee a 100% allergy-free environment. Kookos Pizza, it’s director’s, shareholders, franchisees and employees do not assume responsibility for a particular sensitivity or allergy to any food provided in our restaurants. Read Less</p>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="3">
              <div class="footer-tittle">
                Navigation
              </div>
              <div class="footer-list">
                <ul>
                  <li><b-link href="#foo">Email Offers
                  </b-link>
                  </li>
                  <li><b-link href="#foo">Nutritional Guide</b-link>
                  </li>
                  <li><b-link href="#foo">Gift Cards</b-link>
                  </li>
                  <li><b-link href="#foo">Catering</b-link>
                  </li>
                  <li><b-link href="#foo">Join Our Team</b-link>
                  </li>
                  <li><b-link href="#foo">FAQ</b-link>
                  </li>
                </ul>
              </div>
            </b-col>

            <b-col md="3">
              <div class="footer-tittle">
                What We Do
              </div>
              <div class="footer-list">
                <ul>
                  <li><b-link href="#">Encouraging Testing</b-link>
                  </li>
                  <li><b-link href="#">Strengthening Advocacy</b-link>
                  </li>
                  <li><b-link href="#">Sharing Information</b-link>
                  </li>
                  <li><b-link href="#">Building Leadership</b-link>
                  </li>
                  <li><b-link href="#">Engaging With Global Fund</b-link>
                  </li>
                  <li><b-link href="#">Shining a Light</b-link>
                  </li>
                </ul>
              </div>
            </b-col>

            <b-col md="3">
              <div class="footer-tittle">
                LEGAL
              </div>
              <div class="footer-list">
                <ul>
                  <li><b-link href="#">General Info</b-link>
                  </li>
                  <li><b-link href="#">Privacy Policy</b-link>
                  </li>
                  <li><b-link href="#">Terms of Service</b-link>
                  </li>
                  
                </ul>
              </div>
            </b-col>

            <b-col md="3">
              <div class="footer-tittle">
                TALK TO US
              </div>
              <div class="footer-list">
                <ul>
                  <li><b-link href="#">support@kooko.com</b-link>
                  </li>
                  <li><b-link href="#">+123 123 123</b-link>
                  </li>
                  <li><b-link href="#">Contact Us</b-link>
                  </li>
                  <li><b-link href="#">Facebook</b-link>
                  </li>
                  <li><b-link href="#">Linkedin</b-link>
                  </li>
                  <li><b-link href="#">Twitter</b-link>
                  </li>
                </ul>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="footer-bottom">
        <b-container>
          <b-row>
            <b-col md="12">
              <div class="footer-bottom_inner">
                <b-row>
                  <b-col md="4">
                    <div class="ftr_logo">
                      <b-link href="#"><img alt="Vue logo" :src="footerLogo"></b-link>
                    </div>
                  </b-col>
                  <b-col md="4">
                    <p>© 2020 kOOKOS Pizza. All Rights Reserved. </p>
                  </b-col>
                  <b-col md="4">
                    <div class="footer-rightBlock">
                      <div class="footer-social-link">
                        <ul>
                          <li class="ftr_fb"><b-link href="#"></b-link>
                          </li>
                          <li class="ftr_ln"><b-link href="#"></b-link>
                          </li>
                          <li class="ftr_tw"><b-link href="#"></b-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  BContainer, BRow, BCol, BNavbar, BNavbarNav, BNavbarBrand,BNavbarToggle,
} from 'bootstrap-vue'

export default {
  name: 'Home',
  components: {
    BContainer,
    BRow,
    BCol,
    BNavbar,
    BNavbarNav,
    BNavbarBrand,
    BNavbarToggle,
  },
  data() {
    return {
        headerLogo: require('@resources/assets/scss/images/logo.svg'),
        footerLogo: require('@resources/assets/scss/images/ftr_logo.svg'),
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Open Sans', sans-serif;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>