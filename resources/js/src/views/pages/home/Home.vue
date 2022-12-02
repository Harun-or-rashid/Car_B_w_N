<template>
  <div class="home">
    
    <div class="speacial-section">
      <b-container>
        <b-row class="gap_1">
          <b-col md="8">
            <div class="photo_single">
              <b-link href="#">
                <b-img :src="bannerSingle" alt="Responsive image"></b-img>
              </b-link>
            </div>
          </b-col>
          <b-col md="4">
            <div class="photo_single small_photo">
              <b-link href="#">
                <b-img :src="sp_photo_2" alt="Responsive image"></b-img>
                <div class="product_offer">
                  <h2>PICK UP SPECIAL</h2>
                  <h3>Starting From</h3>
                  <h4>25$</h4>
                </div>
              </b-link>
            </div>
            <div class="photo_single small_photo">
              <b-link href="#">
                <b-img :src="sp_photo_3" alt="Responsive image"></b-img>
                <div class="product_offer">
                  <h2>PICK UP SPECIAL</h2>
                  <h3>Starting From</h3>
                  <h4>25$</h4>
                </div>
              </b-link>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="pickup-options" :style="'background-image: url('+pickupImg+');'">
              <div class="single-vector-photo">
                <b-img :src="undraw_On_the_way_re_swjt"></b-img>
              </div>
              <div class="pickup-option-block">
                <h3>How would like to have your pizza?</h3>
                <div class="button-group-block">
                  <b-button v-b-modal.modal-1>DELIVERY</b-button>
                  <b-button v-b-modal.modal-1 class="modal-btn-cs">PICKUP</b-button>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="gap_2">
          <b-col md="6">
            <div class="foodphoto_single">
              <b-link href="#">
                <b-img :src="food_photo"></b-img>
                <div class="speacial_offer_block">
                  <h2>PICK UP SPECIAL</h2>
                  <h3>(UNLIMITED TOPPINGS)</h3>
                  <h3>PickUp Only</h3>
                </div>
              </b-link>
            </div>
          </b-col>
          <b-col md="6">
            <div class="foodphoto_single">
              <b-link href="#">
                <b-img :src="food_photo"></b-img>
                <div class="speacial_offer_block">
                  <h2>PICK UP SPECIAL</h2>
                  <h3>(UNLIMITED TOPPINGS)</h3>
                  <h3>PickUp Only</h3>
                </div>
              </b-link>
            </div>
          </b-col>
        </b-row>
        <b-row class="pz-offer">
          <b-col md="12">
            <div class="pizza-offer-full" :style="'background-image: url('+pickupImg2+');'">
              <b-row>
                <b-col md="6">
                  <div class="rewards_block">
                    <h4>PIECE OF THE PIZZA</h4>
                    <h2>REWARDS</h2>
                    <div class="rewards_btn_group">
                      <b-link class="button-common" href="#"><span>JOIN NOW </span></b-link>
                      <b-link class="button-common" href="#"><span>SIGN IN</span></b-link>
                    </div>
                  </div>
                </b-col>
                <b-col md="6">
                  <div class="freePizza_block">
                    <h3>EARN POINTS TOWARD</h3>
                    <div class="freeWhite-block">
                      <b-link href="#"> FREE PIZZA</b-link>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12" class="single_carousel">
            <carousel :margin="30" :responsive="{0:{items:1},600:{items:2},768:{items:3}}">
                <div class="single_block">
                  <b-card
                    title="Gluten Free Pizza"
                    :img-src="cr_photo_1"
                    img-alt="Image"
                    img-top
                    tag="article"
                  >
                  </b-card>
                </div>
                <div class="single_block">
                  <b-card
                    title="Platters"
                    :img-src="cr_photo_2"
                    img-alt="Image"
                    img-top
                    tag="article"
                  >
                  </b-card>
                </div>
                <div class="single_block">
                  <b-card
                    title="2 For 1 Pizza"
                    :img-src="cr_photo_3"
                    img-alt="Image"
                    img-top
                    tag="article"
                  >
                  </b-card>
                </div>
                <div class="single_block">
                  <b-card
                    title="Gluten Free Pizza"
                    :img-src="cr_photo_1"
                    img-alt="Image"
                    img-top
                    tag="article"
                  >
                  </b-card>
                </div>
            </carousel>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="join-section" :style="'background-image: url('+joinImg+');'">
      <b-container>
        <b-row>
          <b-col md="6">
            <div class="join-common" :style="'background-image: url('+joinInnerImg+');'">
              <div class="join-form">
                <h2>Join and Get Rewards!</h2>
                <div class="join-form-inner">
                  <b-form>
                    <b-form-input
                      id="inline-form-input-name"
                      class="jn_input"
                      placeholder="Jane Doe"
                    ></b-form-input>
                    <b-button class="jn_save" variant="primary">Save</b-button>
                  </b-form>
                </div>
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="join-common" :style="'background-image: url('+joinInnerImg+');'">
              <div class="giftblock">
                <div class="gifticon">
                  <b-img :src="gift_photo"></b-img>
                </div>
                <div class="giftTittle">
                  <h2>Gift Card</h2>
                </div>
                <div class="button-mid-block">
                  <b-link class="button-common" href="#">BUY NOW</b-link>
                </div>
                
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="Kookos-Offers">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="tittle-center-white">
              <h2>Kooko’s Offers</h2>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <div class="offer-media">
              <b-card>
                <b-link href="#">
                  <b-media class="medeia_yellow">
                    <template #aside>
                      <b-img blank-color="#ccc" :src="pizza_photo" width="370" alt="placeholder"></b-img>
                    </template>
                    <p>
                      Unlimited 14” Pizzas with unlimited Toppings
                    </p>
                    <h5 class="mt-0">$10.99</h5>
                    
                  </b-media>
                </b-link>
              </b-card>
            </div>
          </b-col>
          <b-col md="6">
            <div class="offer-media">
              <b-card>
              <b-link href="#">
                <b-media>
                  <template #aside>
                    <b-img blank-color="#ccc" :src="pizza_photo" width="370" alt="placeholder"></b-img>
                  </template>
                  <p>
                    Unlimited 14” Pizzas with unlimited Toppings
                  </p>
                  <h5 class="mt-0">10$</h5>
                  
                </b-media>
                </b-link>
              </b-card>
            </div>
          </b-col>
        </b-row>
        <b-row class="tittle_gap_top">
          <b-col md="12">
            <div class="tittle-center-white">
              <h2>Our Reviews</h2>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12" class="review_carousel">
            <carousel :margin="0" :responsive="{0:{items:1,nav:false},600:{items:1,nav:true}}">
                <div class="review_single_block">
                  <div class="review_inner_block">
                    <div class="review_user_block">
                      <b-media>
                        <template #aside>
                          <b-img blank-color="#ccc" :src="user_photo" alt="placeholder"></b-img>
                        </template>
                        <h5 class="mt-0">Rizia Mahmub</h5>
                        <div class="review_star">
                          <img alt="" :src="rating">
                        </div>
                      </b-media>
                    </div>
                    <div class="review_content_block">
                      <p>Amazing service. The taste was very good and i really appreciate for the service. Keep it up. </p>
                    </div>
                    <div class="goggle-link">
                      <b-link href="#">Link</b-link>
                    </div>
                  </div>
                </div>

                <div class="review_single_block">
                  <div class="review_inner_block">
                    <div class="review_user_block">
                      <b-media>
                        <template #aside>
                          <b-img blank-color="#ccc" :src="user_photo" alt="placeholder"></b-img>
                        </template>
                        <h5 class="mt-0">Rizia Mahmub</h5>
                        <div class="review_star">
                          <img alt="" :src="rating">
                        </div>
                      </b-media>
                    </div>
                    <div class="review_content_block">
                      <p>Amazing service. The taste was very good and i really appreciate for the service. Keep it up. </p>
                    </div>
                    <div class="goggle-link">
                      <b-link href="#">Link</b-link>
                    </div>
                  </div>
                </div>

            </carousel>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="our-standard-section" :style="'background-image: url('+standardImg+');'">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="tittle-center-yellow">
              <h2>We Maintain Standadrs</h2>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" lg="4">
            <div class="single_standard_block">
              <div class="card">
                <div class="card-img">
                  <b-img class="card-img-top" :src="pizzaicon2"></b-img>
                </div>
                <div class="card-body">
                  <h4>Art of Pizza</h4>
                  <p>We don’t consider pizza as a food product, we see it as a piece of Art. We put all our efforts and techniques in creating a pizza that will urge our customer to praise it. Our experienced artists will do everything to impress our worthy customers with a balanced proportion of all ingredients and pizza crust they have never seen before.</p>
                </div>

              </div>
            </div>
          </b-col>
          <b-col md="4" lg="4">
            <div class="single_standard_block">
              <div class="card">
                <div class="card-img">
                  <b-img class="card-img-top" :src="freedelivery"></b-img>
                </div>
                <div class="card-body">
                  <h4>Fast Delivery</h4>
                  <p>We don’t consider pizza as a food product, we see it as a piece of Art. We put all our efforts and techniques in creating a pizza that will urge our customer to praise it. Our experienced artists will do everything to impress our worthy customers with a balanced proportion of all ingredients and pizza crust they have never seen before.</p>
                </div>

              </div>
            </div>
          </b-col>
          <b-col md="4" lg="4">
            <div class="single_standard_block">
              <div class="card">
                <div class="card-img">
                  <b-img class="card-img-top" :src="crown"></b-img>
                </div>
                <div class="card-body">
                  <h4>Our Standards</h4>
                  <p>We don’t consider pizza as a food product, we see it as a piece of Art. We put all our efforts and techniques in creating a pizza that will urge our customer to praise it. Our experienced artists will do everything to impress our worthy customers with a balanced proportion of all ingredients and pizza crust they have never seen before.</p>
                </div>

              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="piza-st-list">
              <ul>
                <li>
                  <b-link href="#foo">
                    <div class="list-icon">
                      <b-img :src="pizza3"></b-img>
                    </div>
                    <div class="list-tittle">Quality Ingredient</div>
                  </b-link>
                </li>
                <li>
                  <b-link href="#foo">
                    <div class="list-icon">
                      <b-img :src="toprated"></b-img>
                    </div>
                    <div class="list-tittle">Top Rated</div>
                  </b-link>
                </li>
                <li>
                  <b-link href="#foo">
                    <div class="list-icon">
                      <b-img :src="local"></b-img>
                    </div>
                    <div class="list-tittle">Local</div>
                  </b-link>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="contact-section">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="tittle-cn-white">
              <h2>We are everywhere!</h2>
              <h3>Find us in MAP</h3>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="map-block">
              <b-img :src="map"></b-img>
              <div class="map-contact">
                <div class="map-contact-inner">
                  <h3>Prince Albert</h3>
                  <p><b-link href="#">Contact Us</b-link></p>
                </div>
              </div>
              <div class="map-location-icon location-1">
                <b-img src=""></b-img>
              </div>
              <div class="map-location-icon location-2">
                <b-img src=""></b-img>
              </div>
              <div class="map-location-icon location-3">
                <b-img src=""></b-img>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="download-section">
              <b-row>
                <b-col md="5">
                  <div class="download_icon">
                    <b-img :src="TakeAwaypana"></b-img>
                  </div>
                </b-col>
                <b-col md="7">
                  <div class="app-download-link">
                    <h2>Download Our App Now!</h2>
                    <p>For lightning fast ordering experience download the Kookos’s app</p>
                    <div class="app-link-list">
                      <b-link href="#">
                        <b-img :src="playstore"></b-img>
                      </b-link>
                      <b-link href="#">
                        <b-img :src="appstore"></b-img>
                      </b-link>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
        
      </b-container>
    </div>

  <b-modal ref="store_selection" centered hide-footer>
    <template #modal-title>
      Select your Local store
    </template>
    <div class="modal_content">
      <h3>Hello From This Modal!</h3>
    </div>
  </b-modal>
    
    

    

    

    
    
  </div>
</template>

<script>
// @ is an alias to /src
import carousel from 'vue-owl-carousel'
import {
  BRow, BContainer, BCol, BForm,
} from 'bootstrap-vue'

export default {
  name: 'Home',
  components: {
    BRow,
    BContainer,
    BCol,
    carousel,
    BForm,
  },
  data() {
    return {
      standardImg: require('@resources/assets/scss/images/standard-bg.png'),
      joinInnerImg: require('@resources/assets/scss/images/join-inner.png'),
      joinImg: require('@resources/assets/scss/images/join-bg.png'),
      pickupImg: require('@resources/assets/scss/images/block_bg_1.jpg'),
      pickupImg2: require('@resources/assets/scss/images/sectionbg_1.png'),
      bannerImg: require('@resources/assets/scss/images/partner_bg.jpg'),
      sliderImg: require('@resources/assets/scss/images/sliderbg_1.jpg'),
      bannerSingle: require('@resources/assets/scss/images/sp_photo_1.png'),

      sp_photo_2: require('@resources/assets/scss/images/sp_photo_2.png'),
      sp_photo_3: require('@resources/assets/scss/images/sp_photo_3.png'),
      undraw_On_the_way_re_swjt: require('@resources/assets/scss/images/undraw_On_the_way_re_swjt.png'),
      food_photo: require('@resources/assets/scss/images/food_photo.jpeg'),
      cr_photo_1: require('@resources/assets/scss/images/cr_photo_1.png'),
      cr_photo_2: require('@resources/assets/scss/images/cr_photo_2.png'),
      cr_photo_3: require('@resources/assets/scss/images/cr_photo_3.png'),
      gift_photo: require('@resources/assets/scss/images/gift-photo.svg'),
      pizza_photo: require('@resources/assets/scss/images/pizza-photo.png'),
      user_photo: require('@resources/assets/scss/images/user-photo.png'),
      rating: require('@resources/assets/scss/images/Rating.png'),
      pizzaicon2: require('@resources/assets/scss/images/pizza-icon-2.svg'),
      freedelivery: require('@resources/assets/scss/images/Free-delivery.svg'),
      crown: require('@resources/assets/scss/images/crown.svg'),

      pizza3: require('@resources/assets/scss/images/pizza-3.svg'),
      toprated: require('@resources/assets/scss/images/top-rated.svg'),
      local: require('@resources/assets/scss/images/local.svg'),
      map: require('@resources/assets/scss/images/map.png'),
      TakeAwaypana: require('@resources/assets/scss/images/Take-Away-pana.svg'),
      playstore: require('@resources/assets/scss/images/play-store.svg'),
      appstore: require('@resources/assets/scss/images/app-store.svg'),
      
      
    }
  },
  methods: {
    showModal() {
      // this.$refs['store_selection'].show()
    }
  },
  mounted() {
    this.showModal();
  }
}
</script>
