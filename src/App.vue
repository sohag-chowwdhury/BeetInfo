<template>
    <div id="app">
      <header id="header" class="fixed-top">
    <div class="grid-container d-flex align-items-center">

      <div style="margin-left:10px;" class="logo"><router-link :to="{ name: 'home' }"><b-img class="image1" alt="Betbeetle logo" title="Betbeetle logo" :src="logo"></b-img></router-link></div>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->


      <span style="width:100%;text-align:right;">
        <!-- <a href="/app" class="get-started-btn scrollto" style="margin-right:10px;">App</a> -->
        <a href="https://www.betbeetle.com/app" class="get-started-btn scrollto" style="margin-right:10px;">App</a>
      </span>

    </div>
  </header>

  <div >
      <!-- <img v-if="$route.name === 'home'" src="./assets/logo_small.png" data-aos="fade-up" data-aos-delay="200" /> -->

      <transition
        name="fade"
        mode="out-in"
      >
      <router-view :key="key"></router-view>
      </transition>

      <footer id="footer" class="grey-bg">
    <div class="footer-top">
      <div class="container">
       <b-row class="">

        

           <b-col cols="7" md="6" lg="3" xl="3" class="footer-links footer">
            <h3>Links</h3>
            <ul>
              <li><router-link :to="{ name: 'home' }">Games</router-link></li>
              <li><router-link :to="{ name: 'account' }">My Account</router-link></li>
              <li><router-link :to="{ name: 'info' }">New token listing</router-link></li>
              <li><router-link :to="{ name: 'imprint' }">Imprint</router-link></li>
            </ul>
          </b-col>

          <b-col cols="5" md="6" lg="3" xl="3" class="footer-links footer">
            <h3>Social media</h3>
            <ul>
              <li><a href="https://twitter.com/betbeetle_com">Twitter</a></li>
              <li><a href="https://t.me/betbeetle_com">Telegram</a></li>
              <li><a href="https://medium.com/betbeetle">Medium</a></li>
              <li><a href="https://github.com/betbeetle/betbeetle">Github</a></li>
            </ul>
          </b-col>
           <b-col cols="12" md="6" lg="3" xl="3" class="footer-links footer">
            <h3>betbeetle</h3>
            <p>The more wins you get, the higher you'll move up in the level and scoop up higher rewards. Increase your margins directly with Betbeetle Premium.</p>
            
         </b-col>

          <b-col cols="12" md="6" lg="3" xl="3" class="footer-links footer">
            <h3>Responsible betting</h3>
            <p>Gambling can be addictive. For this reason, please only bet money that you can afford to lose. If you recognize signs of gambling addiction, <a href="https://www.helpguide.org/articles/addictions/gambling-addiction-and-problem-gambling.htm">this page</a> may help you.</p>
          <br><p><strong>Email:</strong> info@betbeetle.com</p>
          </b-col>
          

        </b-row>
      </div>
    </div>

    <div class="container footer-bottom clearfix text-right">
        © betbeetle.com (2021). All rights reserved.
    </div>
  </footer>
    </div>
    
    <cookie-law theme="dark-lime">
        <div slot="message">
      This website uses cookies to ensure you get the best experience on our website. <router-link :to="{ name: 'imprint' }">Privacy policy</router-link>
    </div>
    </cookie-law>
    </div>
</template>

<script>
// import web3 from '@/contracts/web3'
import CookieLaw from 'vue-cookie-law'

export default {
  name: 'app',
  data () {
    return {
      logo: require('@/assets/logor-1100.png'),
      key: 0,
      noMetamask: false,
      noMetamaskDesktop: false
    }
  },
  components: {
    CookieLaw
  },
  methods: {
    rerenderComponent () {
      this.key = this.key += 1
      this.$forceUpdate()
    },
    setLang (lang) {
      if (lang === 'en' || lang === 'de') {
        localStorage.setItem('lang', lang)
        location.reload()
      }
    }
  },
  beforeMount () {
    /* if (!web3) {
      let isMobile = window.matchMedia('only screen and (max-width: 760px)').matches
      if (isMobile) {
        this.noMetamask = true
      } else {
        this.noMetamaskDesktop = true
      }
    } else { */
      // network id 1 = mainnet, 3 = ropsten
      /* if (this.$store.getters.getChain === 3) {
        this.$bvToast.toast('Only the Ropsten testnet is supported as of now.', {
          title: 'Change network',
          variant: 'info',
          solid: true,
          toaster: 'b-toaster-bottom-full'
        })
      } */
    // }
  }
}
</script>

<style lang="css">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #ED3737;
  margin-top: 60px;
  color: #bdb7af !important;
  font-size: 1rem !important;
}
@media screen and (max-width:600px) {
  .footer h3{
    font-size: 1em  !important;
  }
   .footer p{
     font-size: 0.8em !important;
  }
   .footer ul li{
     font-size: 0.8em !important;
  }
}
h1, strong {
  margin-bottom:0;
}

.subpage-title h1 {
  color:#fff !important;
}

h1, .h1 {
  font-weight:900 !important;
}

h3, .h3 {
  font-size:1.5rem !important;
  color:#fff !important;
  text-transform: uppercase !important;
}


ul {
  margin-left: 0;
  /* list-style-type: none; */
  padding: 0;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
}

.btn-link {
  color:#fff !important;
}

a:not(.get-started-btn):not(.btn-get-started):not(.btn-link) {
  color: #ED3737;
}

.error {
  padding-bottom: 1rem;
  border: 3px solid #fff;
  padding-top: 1rem;
  margin-bottom: 1.5rem;
  background: #960000;
  margin-left: 1rem;
  margin-right: 1rem;
}

.grid-item {
  color:#bdb7af;
}

button {
  background-color: #008cba;
  color: white;
}

button:hover {
  color: #fff;
}

.form-control:disabled, .form-control[readonly] {
  background: #4a4b4c;
}

.form-control .text-break {
  border: 0 !important;
}

.grey-bg {
  padding: 50px 0;
  background:#1A1D1E !important
}

.toast {
  border:0 !important;
}

svg {
  color:#fff !important;
  fill:#fff !important;
}

.editr--toolbar {
  background: #960000 !important;
  border-bottom: 0 !important;
}

.editr {
  border: 1px solid #495057 !important
}

.editr--toolbar .dashboard {
  background: #272A2C !important;
  border: 1px solid #272A2C !important;
}

button:not(#decisionDate):not(.btn-primary):not(.btn-link) {
  border-radius: 0.25rem;
  padding: 5px;
  background:transparent !important;
}

button:hover, .button:hover {
  opacity:0.75 !important;
}
.button {
  padding:0.5rem 1rem !important;
  font-size:1rem;
  border-radius:0.25rem;
  cursor: pointer;
  text-align:center;
}
.btn-primary {
  background: #EC1C1C !important;
}

.secondary {
  border:1px solid #fff !important;
  color:#fff !important;
  background:transparent !important;
}

.text-dark {
  color:#fff !important;
}

.bg-light {
  background:#495057 !important;
}

label {
  color: #fff!important;
  text-align:left;
}
label:not(.btn-outline-primary) span {
  color:#fff !important;
}

.btn-group>.btn-group>.btn {
  padding:0.8rem 2rem !important;
}

.btn-group-lg>.btn:hover {
  color:#fff !important;
}

.b-toast-danger .toast .toast-header {
  background:#960000 !important;
  border-color:#960000 !important;
  color:#fff !important;
}
.b-toast-success .toast .toast-header {
  background:#155724 !important;
  border-color:#155724 !important;
  color:#fff !important;
}
.toast-header strong {
  color:#fff !important;
}
.b-toast-danger .toast {
  border:0 !important;
}


.btn-outline-primary {
  border-color: #ED3737 !important;
}
label:not(.active).btn-outline-primary {
  color: #ED3737 !important;
}

.btn-outline-primary:hover, .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle, .btn.focus, .btn:focus {
  background-color: #ED3737 !important;
  border-color: #ED3737 !important;
}

li a {
  color:#fff !important;
}

.menu-navigation-round {
    font: bold 12px Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 30px;
}

.menu-navigation-round a {
    color: rgb(156, 147, 134);
    text-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px;
    text-decoration-color: initial;
}

.menu-navigation-round a {
    color: #748c99;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    margin: 0 20px auto;
    line-height: 2;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
}

.menu-navigation-round a.selected {
    color: rgb(232, 230, 227);
    background-color: #272A2C
}

.menu-navigation-round a.selected {
    color: #ffffff;
    border-radius: 20px;
    padding: 10px 15px;
    margin: 0 5px auto;
}

.tabs, table, thead, tbody, tfoot {
  border:none !important;
}

.tabs {
  background:transparent;
}

.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  border-radius: 2rem;
  background: #4A1B21 !important;
  padding:0.5rem 2rem !important;
  color:#fff !important;
}

.nav-tabs .nav-link {
  border:0 !important;
}

.nav-link:focus, .nav-tabs .nav-link:hover {
  border: 0 !important;
}

.nav-tabs .nav-link:hover {
  color: #ed3737 !important;
}

.nav-link a {
  color: #ffffff !important;
}


.nav-tabs, .card {
  /* border-bottom: 1px solid #960000; */
  border: 0 !important;
}
.card {
  margin-top: 2rem;
  background:transparent !important;
}

.form-control {
  color: #fff !important;
}

.form-control:focus {
  border: 1px solid #960000 !important;
  background: #1d1f20 !important;
  color: #fff !important;
}

.form-control, .form-control:active, .custom-select{
 border: 1px solid #495057 !important;
}

.tooltip-inner, .tooltip {
  background: #960000 !important;;
}

.tooltip {
  background: transparent !important;;
}

.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
  border-top-color: #ED3737 !important;;
}

.info-icon {
  border-radius:50%;
  padding-left: 5px;
  padding-right: 5px;
  background: #960000 !important;;
}

select, [type='text'], [type='password'], [type='date'], [type='datetime'], [type='datetime-local'], [type='month'], [type='week'], [type='email'], [type='number'], [type='search'], [type='tel'], [type='time'], [type='url'], [type='color'], textarea {
  border-radius: 0.25rem !important;
  padding: 2rem !important;
}
input:active, input:hover, input:focus, textarea:active, textarea:hover, textarea:focus {
  border-color: #ED3737 !important;
  background: transparent !important;
}
.close {
  color:#fff !important;;
  text-shadow: 0 !important;;
}
.close:hover {
  color: #fff !important;;
}
.b-toast-info.b-toast-solid .toast {
  background: #272A2C !important;
  color:#efefef !important;
  border-color:#272A2C !important;
}
.b-toast-info .toast .toast-header {
  background: #272A2C !important;
  color:#fff !important;
  border-color:#272A2C !important;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.ullist {
  padding:1rem !important;
}

/*-------------------------------------------------------------- # Header --------------------------------------------------------------*/
#header {
  transition: all 0.5s;
  z-index: 997;
  padding: 10px 0;
  background: #1A1D1E !important;
  width: 100%;
}
#header.header-scrolled, #header.header-inner-pages {
  background: #000 !important;
}
#header .logo {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  letter-spacing: 2px;
  text-transform: uppercase;
}
#header .logo a:hover {
  opacity: 0.5;
}
#header .logo img {
  max-height: 35px;
}
#header a:hover {
  text-decoration: none;
}
a:hover:not(.get-started-btn), a:focus:not(.get-started-btn) {
  color: #ed3737;
}
.p1 {
  padding:1rem;
}
/*-------------------------------------------------------------- # Navigation Menu --------------------------------------------------------------*/
/* Desktop Navigation */
.nav-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-menu > ul {
  display: flex;
}
.nav-menu > ul > li {
  position: relative;
  white-space: nowrap;
  padding: 10px 0 10px 28px;
}
.nav-menu a {
  display: block;
  position: relative;
  color: #fff;
  transition: 0.3s;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  font-family: "Roboto", sans-serif;
}
.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
  color: #7F7171;
}
.nav-menu .drop-down ul {
  border-radius: 8px;
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}
.nav-menu .drop-down:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}
.nav-menu .drop-down li {
  min-width: 180px;
  position: relative;
}
.nav-menu .drop-down ul a {
  padding: 10px 20px;
  font-size: 14px;
  text-transform: none;
  color: #0c3c53;
}
.nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {
  color: #ed3737;
}
.nav-menu .drop-down > a:after {
  content: "\ea99";
  font-family: IcoFont;
  padding-left: 5px;
}
.nav-menu .drop-down .drop-down ul {
  top: 0;
  left: calc(100% - 30px);
}
.nav-menu .drop-down .drop-down:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
}
.nav-menu .drop-down .drop-down > a {
  padding-right: 35px;
}
.nav-menu .drop-down .drop-down > a:after {
  content: "\eaa0";
  font-family: IcoFont;
  position: absolute;
  right: 15px;
}
@media (max-width: 1366px) {
  .nav-menu .drop-down .drop-down ul {
    left: -90%;
 }
  .nav-menu .drop-down .drop-down:hover > ul {
    left: -100%;
 }
  .nav-menu .drop-down .drop-down > a:after {
    content: "\ea9d";
 }
}
.Cookie {
  max-height: 30% !important;
  display: block;
}
/* Get Startet Button */
.get-started-btn {
  margin-left: 25px;
  color: #fff !important;
  border-radius: 50px;
  padding: 6px 25px 7px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
  background: #960000 !important;
  font-weight: 600;
}
.get-started-btn:hover, .get-started-btn.router-link-active {
  opacity: 0.75 !important;
  color: #fff !important;
  text-decoration: none;
}
.custom-select:focus {
  border-color: #272A2C;
  box-shadow: none;
}
.input-group-text {
  background-color: transparent;
  border: none;
  color: #fff;
}
.subpage-title {
  padding: 2rem 0;
  text-align: center;
  text-transform: uppercase;
}
.h2, h2 {
  font-size: 1.5rem;
  color: #fff !important;
}

@-webkit-keyframes up-down {
  0% {
    transform: translateY(10px);
 }
  100% {
    transform: translateY(-10px);
 }
}
@keyframes up-down {
  0% {
    transform: translateY(10px);
 }
  100% {
    transform: translateY(-10px);
 }
}
/*-------------------------------------------------------------- # Sections General --------------------------------------------------------------*/
.card-body {
  padding: 2.5rem 1.25rem;
}
section {
  padding: 40px 0;
  overflow: hidden;
  background: #212121;
}
.section-bg {
  background-color: #272A2C;
}
.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #37517e;
}
.section-title h2::before {
  content: '';
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}
.section-title h2::after {
  content: '';
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: #272A2C;
  bottom: 0;
  left: calc(50% - 20px);
}
.section-title p {
  margin-bottom: 0;
}
/*-------------------------------------------------------------- # Footer --------------------------------------------------------------*/
#footer .footer-newsletter {
  padding: 50px 0;
  background: #272A2C;
  text-align: center;
  font-size: 1.25rem;
  color: #bdb7af;
}
#footer .footer-newsletter h4 {
  font-size: 1.5rem;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  color: #fff;
}
#footer .footer-newsletter form {
  margin-top: 30px;
  padding: 6px 10px;
  position: relative;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
  text-align: left;
}
#footer .footer-newsletter form input[type="email"] {
  border: 0;
  padding: 4px 8px;
  width: calc(100% - 100px);
}
#footer .footer-newsletter form input[type="submit"] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 1.25rem;
  padding: 0 20px;
  background: #960000;
  color: #fff;
  transition: 0.3s;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}
#footer .footer-newsletter form input[type="submit"]:hover {
  background: #209dd8;
}
#footer .footer-top {
  padding: 30px 0 30px 0;
}
#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}
#footer .footer-top .footer-contact h3 {
  font-size: 2rem;
  margin: 0 0 10px 0;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
}
#footer .footer-top .footer-contact p {
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Jost", sans-serif;
  color: #ada59b;
}
#footer .footer-top h4 {
  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;
  position: relative;
  padding-bottom: 12px;
}
#footer .footer-top .footer-links {
  margin-bottom: 30px;
}
#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}
#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #ed3737;
  font-size: 18px;
  line-height: 1;
}
#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  margin:0;
  display: flex;
  align-items: center;
}
#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}
#footer .footer-top .footer-links ul a {
  color: #fff !important;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}
#footer .footer-top .footer-links ul a:hover {
  text-decoration: none;
  color: #ed3737;
}
#footer .footer-top .social-links a {
  font-size: 1.25rem;
  display: inline-block;
  background: #272A2C;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}
#footer .footer-top .social-links a:hover {
  background: #209dd8;
  color: #fff;
  text-decoration: none;
}
#footer .footer-bottom {
  padding-top: 30px;
  padding-bottom: 30px;
  color: #fff;
}
#footer .copyright {
  float: left;
}
#footer .credits {
  float: right;
  font-size: 1.25rem;
}
#footer .credits a {
  transition: 0.3s;
}
@media (max-width: 768px) {
  h1, .h1 {
    font-size:2rem !important;
  }
  h2, .h2 {
    font-size:1.5rem !important;
  }
  #footer .footer-bottom {
    padding-top: 20px;
    padding-bottom: 20px;
 }
  #footer .copyright, #footer .credits {
    text-align: center;
    float: none;
 }
  #footer .credits {
    padding-top: 4px;
 }
}

img {
  max-width:100%;
}
</style>
