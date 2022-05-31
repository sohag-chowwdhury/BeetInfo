<template>
  <div class="main-div" >
    <!--header Section --> 
    <section>
    <b-row  style="background-color: #212121" class="row justify-content-center">
      <b-col class="min-heading "  cols="12"  md="12" lg="12"   xl="12">
		
		  <b-row>
   			 <b-col  cols="6"     md="6" lg="6" xl="6"><h1
          class="mt-12 heading-title"
          style="display: block; color:#fff;"
        >
          EARN <span style="color:red !important;"> CRYPTO</span> PLAYING MULTIPLAYER GAMES WITH YOUR FRIENDS.
        </h1>
		<p  class="hidden-sm">
          Decentralized, instant, no registration. Increase your winning margins and multiply your earnings with Betbeetle Premium: Get passive income and profit from monthly buy backs and burn.
        </p>
		<b-row class="hidden-sm">
			<b-col class="row justify-content-center">

            <router-link :to="{ name: 'premium' }" style="color:#fff !important;">
            <button
              class="button mt-3 btn-primary"
              block
            >
              PREMIUM   
            </button>
            </router-link>   
            <button
              class="button-outlated2 mt-3"
              block
            >
              <a href="https://betbeetle.com/whitepaper.pdf"><span style="color:red !important;"> WHITEPAPER</span></a>
            </button>
            
          </b-col>
		</b-row>
		</b-col>
    <b-col  cols="6"  md="6" lg="6" xl="6" > <b-img
			class="polygon"
          alt="Betbeetle - beetles with money"
          title="Betbeetle - beetles with money"
          style="width:280px; display: block; margin: auto"
          :src="logo"
        ></b-img>
		<div class="shape-img shape-up-height-img"></div>
		</b-col>
		<b-col>
			 <p class="hidden-lg">
          Decentralized, instant, no registration. Increase your winning margins and multiply your earnings with Betbeetle Premium: Get passive income and profit from monthly buy backs and burn.
        </p>
		</b-col>
  </b-row>  
        <b-row class="row justify-content-center hidden-lg">
          <b-col class="row justify-content-center">

            <router-link :to="{ name: 'premium' }" style="color:#fff !important;">
            <button
              class="button mt-3 btn-primary"
              block
            >
              PREMIUM   
            </button>
            </router-link>   
            <button
              class="button-outlated mt-3"
              block
            >
              <a href="https://betbeetle.com/whitepaper.pdf"><span style="color:red !important;"> WHITEPAPER</span></a>
            </button>
            
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    </section>

	

    <games />

    <!--
    <section>
    <b-container>
      <b-row
        style="margin-top: 6em; border: 3px solid #94d4ff; border-radius: 10px"
      >
        <b-col cols="12" sm="12" md="6" lg="6">
          <p>
            <span style="color: #0d59cc; font-weight: bold; font-size: 20px"
              >Contract:</span
            ><span style="color: #192227; font-size: 18px"
              >xxx</span
            >
          </p>
        </b-col>

        <b-col cols="12" sm="12" md="3" lg="3" class="row justify-content-end">
          <button
            class="block my-1"
            style="background-color: #006ad4 !important"
          >
            Uniswap info
            <i class="fas fa-external-link-alt" aria-hidden="true"></i>
          </button>
        </b-col>
        <b-col cols="12" sm="12" md="3" lg="3" class="row justify-content-end">
          <button
            class="my-1 block"
            style="background-color: #006ad4 !important"
          >
            Trade Now
          </button>
        </b-col>
      </b-row>
    </b-container>

    
    <b-container style="background-color: #272A2C !important">
      <b-row class="my-3">
        <b-col class="auction" style="background-color: #272A2C !important">
          <div v-b-modal.modal-sm>
            <b-img :src="auction"></b-img>
            <b-modal hide-footer hide-header id="modal-sm" size="sm" centered>
              <div>
                <b-card>
                  <h2 style="color: #f3222b !important; margin: 10%">
                    www.beet.com
                  </h2>
                </b-card>
              </div>
            </b-modal>
          </div>

          <b-row class="row justify-content-center">
            <b-col class="row justify-content-center">
              <button
                class="button mt-3"
                block
                style="background-color: #ca0007 !important"
              >
                <i class="fas fa-gavel mx-2 large" aria-hidden="true"></i>Learn
                More About xx
              </button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    </section>
    -->

    <!-- animated Section -->
    <section style="padding-top:10px !important">
    <div data-aos="fade-up" data-aos-delay="200" class="justify-content-center mt-3">

        <div style="padding:1rem !important; background:#4A1B21 !important; padding: 5rem 2rem  !important">
			<b-row>
				
				<b-col cols="12" sm="12" md="8" lg="8"  class="content">
					<h2 style="padding-left:0;" >Betbeetle Premium <i class="fas fa-star mx-2 " style="color:red;" ></i></h2>  
					<p style="text-align: left; margin-left:0;max-width:80%;">
						Getting BTL Premium is very simple. Buy and hold at least 100 BTL in your own wallet to activate Betbeetle Premium and get the following advantages:<br /><br />
						<ul class="ullist">
							<li>Receive your weighted part 82% of all platform fees in the main currency of the network (ETH/BNB).</li>
							<li>Automatically participate in the Beetle Lotto where 10% of all platform fees are being used to buy back BTL tokens regularly and then distribute to one lucky winner.</li>
							<li>Always get 100% margin for every bet that you win.</li>
							<li>The more you stake and the longer you stake, the more you earn.</li>
						</ul>
					</p>
					<b-row class="row justify-content-center mt-5">
						<b-col cols="6" sm="12" md="6" lg="6">
							<button class="button-outlated">
							<p> TOTAL SUPPLY</p>	1 000 000 BTL
								
							</button>
						
						</b-col>
						<b-col cols="6"  md="6" lg="6">
							<button class="button-outlated">
							<p>MINIMUM FOR PREMIUM</p>100 BTL
								
							</button>
						
						</b-col>
					</b-row>
					<b-row class="row justify-content-center">
						
					</b-row>
				</b-col>
				<b-col cols="12" sm="12" md="4" lg="4" data-aos="fade-up" data-aos-delay="200" style="background:#4A1B21 !important; padding:25px; width:90%">
					<b-img
						
						alt="Betbeetle cool frog"
						title="Betbeetle cool frog"
						class="fire-move img-size"
						:src="claimLeft"
					>
					</b-img>
					<div class="shape-up shape-up-heigh"></div>
				</b-col>
			</b-row>
        </div>
    </div>
    </section>

    <!-- section video @@ card-->
    <section data-aos="fade-up" data-aos-delay="200">
    <div
      class="circular justify-content-center"
    >
      <b-row class="video-top ">
        <b-col cols="10" md="7" lg="7" xl="7" class="action-work ">
          <h2 class="text-center content-video" style="margin-top:3rem; color: #fff">
            How does Betbeetle work? <i class="fas fa-briefcase mx-3" style="color:red; "></i>
          </h2>
          <p class="center content-video-text">
            Learn more on how you create new bets, participate in existing bets and level up to maximize your betting profits.
          </p>
          <p>
          <button
            class="button mt-3 btn-primary"
            block
            style="background-color: #ca0007 !important"
            @click="forward('https://www.medium.com/betbeetle')"
          >
            Read more
          </button>
          </p>
        </b-col>
		<b-col class="hidden-lg" cols="3" md="0" lg="0" xl="0"></b-col>
        <b-col  cols="9" md="5" lg="5" xl="5" align-self="end" class="video-small pl-4 pr-4 ">
          <b-row>
            <b-col cols="12">
              <b-img 
          alt="Video on Betbeetle"
          title="Video on Betbeetle" :src="video"> </b-img>
            </b-col>
            <b-col cols="12" class="videobutton">
              <div class="shape" v-b-modal.modal-center>
                <b-img
          alt="Video button on Betbeetle"
          title="Video button on Betbeetle"
                  :src="videoButton"
                  style="width: 68px"
                  rounded="circle"
                ></b-img>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
     
		  
      <b-container>
        <!-- Grid column -->


        <b-modal hide-footer hide-header id="modal-center" centered>
          <div class="video-modal">
            <iframe
              style="width: 460px; height: 300px"
              src="https://www.youtube.com/embed/9SGHYe6VIrs"
              allowfullscreen
            ></iframe>
          </div>
        </b-modal>
      </b-container>
    



      <b-row class="row justify-content-center breck">
        <b-col cols="6" md="4"  lg="4" sm="4">
         <b-row class="row justify-content-center">
			 <b-col cols="10" md="9"  lg="9" xl="9" class="content-card ">
				  <b-img class="img-content" alt="Betbeetle smartphone"
          title="Betbeetle smartphone" style="" :src="auctionContentRightCol1"> </b-img>
		  		<b-row>
					  <b-col cols="4" md="2" lg="2" xl="2">
						  <span ><h3 class="number">1</h3></span>
					  </b-col>
				  </b-row>
			 </b-col>
		 </b-row>

		<b-row class="row justify-content-center">
			 <b-col cols="10" md="9"  lg="9" xl="9" class="row justify-content-center" >
          <h2 class=" content-video mr-3">Start playing</h2>
          <p class="text-center content-video-text">
            Install Metamask or any other Ethereum wallet, connect your wallet and switch to your preferred network. Play on your network without registration or KYC.
          </p>
          <p>
          <button
            class="button mt-3 btn-primary mr-4"
            block
          >
            Buy $BTL (soon)
          </button>
          </p>
		  </b-col>
		 </b-row>
        </b-col>
        

        <b-col cols="6" md="8" sm="8" lg="7" class="content-action action text-center">
			 <b-img :src="auctionWork" 
			 class="action-img"
          alt="Beetles walk on Betbeetle"
          title="Beetles walk on Betbeetle"></b-img>
        </b-col>
      </b-row>

 
      <b-row class="row justify-content-center">
		   <b-col cols="6" md="8" sm="8" lg="8" class="content-action action text-center">
			 <b-img  :src="auctionWork" 
			 class="action-img"
          alt="Beetles walk on Betbeetle"
          title="Beetles walk on Betbeetle"></b-img>
        </b-col>
       <b-col cols="6" md="4"  lg="4" sm="4">
         <b-row class="row justify-content-center">
			 <b-col cols="10" md="9"  lg="6" xl="9" class="content-card ">
				  <b-img class="img-content" alt="Betbeetle smartphone"
          title="Betbeetle smartphone" style="" :src="auctionContentLeftCol2"> </b-img>
		  	<b-row>
					  <b-col cols="3" md="2" lg="2" xl="2">
						  <span ><h3 class="number">2</h3></span>
					  </b-col>
				  </b-row>
			 </b-col>
		 </b-row>

		 	<b-row class="row justify-content-center">
			 <b-col cols="10" md="9"  lg="6" xl="9" class="row justify-content-center" >
          <h2 class="text-center content-video">Get premium</h2>
          <p class="text-center content-video-text">
            82% of all platform fees are paid out to our Premium users. Getting Premium does not cost you anything - just stake your BTL tokens to get it. Details on the number of tokens will follow.
          </p>
          <p>
          <button
            class="button mt-3 btn-primary"
            block
          >
             Add stake(soon)
          </button>
          </p>
			 </b-col>
			 </b-row>
        </b-col>	 
      </b-row>


	  
      <b-row class="row justify-content-center">
        <b-col cols="6" md="4"  lg="4" sm="4">
         <b-row class="row justify-content-center">
			 <b-col cols="10" md="9"  lg="6" xl="9" class="content-card ">
				  <b-img class="img-content" alt="Betbeetle smartphone"
          title="Betbeetle smartphone" style=""  :src="auctionWin"> </b-img>
		  		<b-row>
					  <b-col cols="4" md="2" lg="2" xl="2">
						  <span ><h3 class="number">3</h3></span>
					  </b-col>
				  </b-row>
			 </b-col>
		 </b-row>

		 	<b-row class="row justify-content-center">
			 <b-col cols="10" md="9"  lg="6" xl="9" class="row justify-content-center" >
          <h2 class="text-center content-video">Earn crypto</h2>
          <p class="text-center content-video-text">
            Create bets, participate in existing bets or play another multiplayer game with your friends and other community members to earn crypto. Make new crypto friends in our telegram group.
          </p>
          <p>
          <button
            class="button mt-3 btn-primary"
            @click="forward('https://t.me/betbeetle')"
            block
          >
            Join our telegram<br />group
          </button>
          </p>
		</b-col>
			 </b-row>
        </b-col>
        

        <b-col cols="6" md="8" sm="8" lg="8" class="content-action action text-center">
			
			 <b-img :src="auctionWork" 
			 class="action-img"
          alt="Beetles walk on Betbeetle"
          title="Beetles walk on Betbeetle"></b-img>
        </b-col>
      </b-row>
	 <br>
	 <b-row  class="row justify-content-center hidden-lg">	 
		<b-col cols="12" class="row justify-content-center">
			<b-col
				cols="2"       
					>
				<b-img class="rocke-img" 
				alt="Betbeetle rocket"
				title="Betbeetle rocket" :src="rocket2"></b-img>		  
			</b-col>
			<b-col cols="12" style="font-size:0.9em; !important" class="row justify-content-center my-3" >
				<p style="font-size:0.9em; !important">Our partners</p>
			</b-col>
		</b-col>
		<b-carousel
		id="carousel-1"
		:interval="4000"
		background="transparent"
		img-height="30"
		>
		<b-carousel-slide>
			<template #img><center><b-img
				alt="Ethereum" height="30"
				title="Ethereum" :src="eth"> </b-img></center></template>
		</b-carousel-slide>
		<b-carousel-slide>
			<template #img><center><b-img
				alt="Binance Smart Chain" height="30"
				title="Binance Smart Chain" :src="bsc"> </b-img></center></template>
		</b-carousel-slide>
		<b-carousel-slide>
			<template #img><center><b-img
				alt="Huobi ECO Chain" height="30"
				title="Huobi ECO Chain" :src="heco"> </b-img></center></template>
		</b-carousel-slide>
		<b-carousel-slide>
			<template #img><center><b-img
				alt="XDAI" height="30"
				title="XDAI" :src="xdai"> </b-img></center></template>
		</b-carousel-slide>
		<b-carousel-slide>
			<template #img><center><b-img
				alt="Arbitrum" height="30"
				title="Arbitrum" :src="arb"> </b-img></center></template>
		</b-carousel-slide>
		<b-carousel-slide>
			<template #img><center><b-img
				alt="Polygon" height="30"
				title="Polygon" :src="polygon"> </b-img></center></template>
		</b-carousel-slide>
		</b-carousel>

	 </b-row>

	 <b-row  class="row justify-content-center hidden-sm">	 
		<b-col cols="12" class="row justify-content-center">
			<b-col
				cols="1"       
					>
				<b-img class="rocke-img" 
				alt="Betbeetle rocket"
				title="Betbeetle rocket" :src="rocket2"></b-img>		  
			</b-col>
			<b-col cols="12" style="font-size:1.4em; !important; margin-left:30px !important;" class="row justify-content-center my-3" >
				<p style="font-size:0.9em; !important">Our partners</p>
			</b-col>
		</b-col>
		<b-carousel
		id="carousel-1"
		:interval="4000"
		background="transparent"
		img-height="30"
		>
		<b-carousel-slide>
			<template #img><center><b-img
			style="margin:30px !important"
				alt="Ethereum" height="30"
				title="Ethereum" :src="eth"> </b-img>
				<b-img
				style="margin:30px !important"
				alt="Binance Smart Chain" height="30"
				title="Binance Smart Chain" :src="bsc"> </b-img>
				<b-img
				style="margin:30px !important"
				alt="Huobi ECO Chain" height="30"
				title="Huobi ECO Chain" :src="heco"> </b-img>
				</center></template>
				 
		</b-carousel-slide>
		
		
		<b-carousel-slide>
			<template #img><center><b-img
				style="margin:30px !important"
				alt="XDAI" height="30"
				title="XDAI" :src="xdai"> </b-img>
				<b-img
				style="margin:30px !important"
				alt="Arbitrum" height="30"
				title="Arbitrum" :src="arb"> </b-img>
				<b-img
				style="margin:30px !important"
				alt="Polygon" height="30"
				title="Polygon" :src="polygon"> </b-img>
				</center></template>
		</b-carousel-slide>
		
		</b-carousel>

	 </b-row>
    </div>
    </section>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide, BModal } from "bootstrap-vue";

export default {
  name: "home",
  components: {
    BCarousel,
    BCarouselSlide,
    BModal,
    games: () => import("@/components/games.vue"),
  },
  data() {
    return {
      showModal: false,
      numbeCheck: 0,
      amount: 0,
      hoverValue: true,
      noMetamask: false,
      noMetamaskDesktop: false,
      buttontext: "Install Metamask now",
      publicPath: process.env.BASE_URL,
      cssProps: {},
      bets: {},
      token: [],
      cats: [],
      // image import from assets and reaname there
      game1: require("@/assets/img/game_betting.png"),
      game2: require("@/assets/img/game_beetle-jackpot.png"),
      game3: require("@/assets/img/game_hanging-pepe.png"),
      game4: require("@/assets/img/game_bottle.png"),
      logo: require("@/assets/img/beetlemoney.gif"),
      videoButton: require("@/assets/img/video.png"),
      headerLeft1: require("@/assets/img/ia_100000036.png"),
      headerLeft2: require("@/assets/img/ia_100000006.png"),
      claimLeft: require("@/assets/img/ia_100000017.png"),
      auctionWork: require("@/assets/img/beetles.png"),
      auctionContentRightCol1: require("@/assets/img/ia_100000020.png"),
      auctionWin: require("@/assets/img/ia_100000021.png"),
      auctionContentLeftCol2: require("@/assets/img/ia_100000022.png"),
      fire: require("@/assets/img/ia_100000028.png"),
      rocket: require("@/assets/img/ia_100000025.png"),
      rocket2: require("@/assets/img/ia_100000024.png"),
      video: require("@/assets/img/ia_100000019.png"),
      eth: require("@/assets/img/eth.png"),
      bsc: require("@/assets/img/bsc.png"),
      heco: require("@/assets/img/heco.png"),
      xdai: require("@/assets/img/xdai.png"),
      arb: require("@/assets/img/arb.png"),
      polygon: require("@/assets/img/polygon.png"),
      // card item Arrey

      // cardItems: [{heading: 'simply dummy text of the printing 1', paragraph: 'is simply dummy text of the printing and typesettin dummy text of the printing and typesettin dummy text of the printing and typesetting', img: require('@/assets/img/ia_100000030.png')}, {heading: 'simply dummy text of the printing 1', paragraph: 'is simply dummy text of the printing and typesetting', img: require('@/assets/img/ia_100000030.png')}, {heading: 'simply dummy text of the printing 1', paragraph: 'is simpldummy text of the printing and typesettindummy text of the printing and typesettiny dummy text of the printing and typesetting', img: require('@/assets/img/ia_100000030.png')}]
    };
  },
  beforeMount() {
    this.token["0x0000000000000000000000000000000000000000"] = "ETH";
    // this.token['0x0000000000000000000000000000000000000010'] = 'xx'
  },
  methods: {
    forward(url) {
      window.location.href = url;
    },
    /*
    updateFile (arr) {
        const data = JSON.stringify(arr)
        const fs = require('file-system');
        try { fs.writeFileSync('bets.json', data, 'utf-8'); }
        catch(e) { console.log(e) }
    }
    */
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

ul li::before {
  content: "\2022";
  color: red;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
action-work p {
  text-align: left;
}

a {
  color: #fff !important;
}

@media screen and (min-width: 1400px) {
  .carousel {
    margin-top: -2rem !important;
  }
}

@media screen and (min-width: 768px) {
	
	.content h2 {
    font-size: 1.4em !important;
    font-family: "Lora", serif;
  }
  .content p {
    font-size: 1.1em !important;
    font-family: "Lora", serif;
    color: #fff;
  }
  .img-content {
    margin-top: -20%;
  }
  .content-card {
    background-color: black;
    border-radius: 20px;
	
	
  }
  .content-video {
	  margin-top: 10% !important;
    font-size: 2.2em !important;
    font-family: "Lora", serif;
	
  }
  .content-video-text {
	  margin-top: 10% !important;
    font-size: 1.2em !important;
    font-family: "Lora", serif;
    color: #fff !important;
	
	
  }
  .number {
	  background-color:#431A1A;
	   margin:auto !important;
	    border-radius:10px !important;
		height: 55px !important;
		width: 55px !important;
		margin: 4px !important;
		font-size: 3em !important;
		text-align: center  !important;
		color: #f30707 !important;
  }
  .action-img {
    margin-top: 15%;
  }
  .main-div {
    margin-top: -1rem;
  }
  .img-size {
    margin: auto;
    width: 350px;
  }
	.heading-title {
    font-size: 40px !important;
    font-family: "Lora", serif;
	margin-left: 15% !important;
	text-align: start !important;
	line-height: 70px;
  }
  .min-heading p {
    font-size: 1.1em !important;
    color: #fff !important;
	margin-left: 15% !important;
	margin-right: 10% !important;
    font-family: "Lora", serif;
	line-height: 30px;
  }
  .main-div {
    margin-top: -1rem;
  }
  .hidden-lg {
    display: none;
  }
  .carousel {
    margin-top: 6rem;
  }
  .button {
    border: none;
    border-radius: 15px;
    color: #fff;
    font-weight: 200;
    padding: 15px 22px;

    text-align: center;
    letter-spacing: 3px;
    text-transform: capitalize !important;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 7px;
  }
  .button-outlated {
    background-color: white;
    color: black;
    border: 1px solid #eee8e8;
    border-radius: 15px !important;

    color: #fff;
    font-weight: 200;
    padding: 25px 22px;

    text-align: center;
    letter-spacing: 3px;
    text-transform: capitalize !important;
    text-decoration: none;
    display: inline-block;
    font-size: 17px;
    margin: 4px 7px;
  }
  .button-outlated2 {
    background-color: rgb(241, 234, 234);
    color: rgb(241, 234, 234);
    border: 1px solid #e90c0c;
    border-radius: 15px !important;

    color: #fff;
    font-weight: 200;
    padding: 25px 22px;

    text-align: center;
    letter-spacing: 3px;
    text-transform: capitalize !important;
    text-decoration: none;
    display: inline-block;
    font-size: 17px;
    margin: 4px 7px;
  }
  .button:hover {
    opacity: 0.8;
    text-decoration: none;
  }
    .polygon {
    
    height: 80%;
    width: 100%;
  }
   .shape-up-height-img {
    margin-top: -50%;
  }
  .shape-img {
    background: linear-gradient(45deg, var(--primary) 0, var(--secondary) 100%);
    animation: morphs 8s ease-in-out infinite;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    height: 85%;
    transition: all 30s ease-in-out;
    width: 75%;
	margin-left: 5% !important;
	
    z-index: 5;
  }
  @keyframes morphs {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(45deg, rgb(0, 7, 6) 0, rgb(0, 7, 6) 100%);
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      background: linear-gradient(45deg, rgb(0, 7, 6) 0, rgb(0, 7, 6) 100%);
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(45deg, rgb(0, 7, 6) 0, rgb(0, 7, 6) 100%);
    }
  }
  .shape-up-heigh {
    margin-top: -90%;
  }
  .shape-up {
    background: linear-gradient(45deg, var(--primary) 0, var(--secondary) 100%);
    animation: morphse 8s ease-in-out infinite;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    height: 410px;
    transition: all 30s ease-in-out;
    width: 430px;
    z-index: 5;
  }
  @keyframes morphse {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(45deg, var(--danger) 0, var(--danger) 100%);
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      background: linear-gradient(45deg, var(--danger) 0, var(--danger) 100%);
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(45deg, var(--danger) 0, var(--danger) 100%);
    }
  }
  
}

@media screen and (max-width: 600px) {
  .video-top {
    margin-top: 5em;
  }
  .hidden-sm {
    display: none;
  }
  .breck {
    margin-top: 4em;
  }
  .img-content {
    margin-top: -20%;
  }
  .content-card {
    background-color: black;
    border-radius: 20px;
  }
  .action-img {
    margin-top: 200px;
  }
  .video-small {
    margin-top: -40% !important;
  }
  .content-video {
	  margin-top: 5%;
    font-size: 1.2em !important;
    font-family: "Lora", serif;
  }
  .content-video-text {
	   margin-top: 5%;
    font-size: 0.9em !important;
    font-family: "Lora", serif;
    color: #fff;
  }
  .content h2 {
    font-size: 1.2em !important;
    font-family: "Lora", serif;
  }
  .content p {
    font-size: 0.9em !important;
    font-family: "Lora", serif;
    color: #fff;
  }
  .main-div {
    margin-top: -1rem;
  }
  .img-size {
	  margin-top: 10% !important;
    margin: auto;
    width: 250px;
  }
  .polygon {
    margin-top: 10% !important;
    height: 60%;
    width: 60%;
  }
 .number {
	  background-color:#431A1A;
	   margin:auto !important;
	    border-radius:10px !important;
		height: 35px !important;
		width: 35px !important;
		margin: 4px !important;
		font-size: 1.7em !important;
		text-align: center  !important;
		font-weight: bold;
		color: #f30707 !important;
  }
  .shape-up-heigh {
    margin-top: -95%;
  }
  .shape-up {
    background: linear-gradient(45deg, var(--primary) 0, var(--secondary) 100%);
    animation: morphse 8s ease-in-out infinite;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    height: 310px;
    transition: all 30s ease-in-out;
    width: 310px;
    z-index: 5;
  }
  @keyframes morphse {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(45deg, var(--danger) 0, var(--danger) 100%);
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      background: linear-gradient(45deg, var(--danger) 0, var(--danger) 100%);
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(45deg, var(--danger) 0, var(--danger) 100%);
    }
  }
  .shape-up-height-img {
    margin-top: -80%;
  }
  .shape-img {
    background: linear-gradient(45deg, var(--primary) 0, var(--secondary) 100%);
    animation: morphs 8s ease-in-out infinite;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    height: 163px;
    transition: all 30s ease-in-out;
    width: 163px;
    z-index: 5;
  }
  @keyframes morphs {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(45deg, rgb(0, 7, 6) 0, rgb(0, 7, 6) 100%);
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      background: linear-gradient(45deg, rgb(0, 7, 6) 0, rgb(0, 7, 6) 100%);
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(45deg, rgb(0, 7, 6) 0, rgb(0, 7, 6) 100%);
    }
  }

  .min-heading p {
    margin-top: -15px !important;
    font-size: 0.9em !important;
    color: #fff !important;
    font-family: "Lora", serif;
  }
  .heading-title {
    font-size: 20px !important;
    font-family: "Lora", serif;
  }
  .action h2 {
    margin-top: 20px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
  .action p {
    margin-top: 10px;
    font-size: 1.25rem;
    color: #7f7171;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
  }
  .card-row {
    margin-top: 15%;
  }
  .rocket-col {
    margin-top: 60px;
  }
  .card-row h1 {
    font-size: 35px;
    margin-left: 10%;
    margin-right: 10%;
    color: #00409e;
    text-align: center;
    font-weight: 700;
  }
  .card-row p {
    margin-top: 10px;
    font-size: 20px;
    color: #140707;
    margin-left: 10%;
    margin-right: 10%;
    text-align: start;
    font-weight: 700;
  }
  .min-heading {
    margin-top: 0;
  }
  .min-heading h1 {
    margin-top: 20px;
    font-size: 1.5rem;
    margin-left: 3%;
    margin-right: 3%;
    text-align: center;
  }
  .down-top {
    margin-top: -30em;
  }
  .action-work {
    margin-top: -110%;
  }
  .action-work h2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 20px !important;
    font-weight: 700;
    color: #fff !important;
    font-family: "Lora", serif;
  }
  .action-work p {
    font-size: 17px;
    color: #7f7171;
    margin-left: 3%;
    margin-right: 5%;
    text-align: start;
    color: #fff !important;
    font-family: "Lora", serif;
  }
  .down-top h1 {
    color: #fdfdfd;
  }
  .video-modal {
    width: 300px;
    height: 200px;
  }
  .down-top h3 {
    text-align: center;
  }
  .action-button {
    left: 10%;
    right: 10%;
    margin-bottom: -2.5em;
  }
  .circular {
    margin-top: 25em;
    height: 100%;
    width: 100%;
    background-size: cover;
  }
  .claim-right-image {
    margin-top: 10em;
    width: 38%;
    float: right;
  }
  .image-show {
    margin-bottom: 2;
    right: 0;
    height: 700px;
    width: 900px;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
  }
  .min-heading p {
    margin-left: 3%;
    margin-right: 3%;
    font-size: 17px;
    text-align: center;
    color: #7f7171;
  }
  .videobutton {
    margin-top: -45%;
    margin-left: 30%;
  }
  .button {
    border: none;
    border-radius: 15px;
    color: #fff;
    font-weight: 200;
    padding: 15px 22px;

    text-align: center;
    letter-spacing: 3px;
    text-transform: capitalize !important;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 7px;
  }
  .button-outlated {
    background-color: white;
    color: black;
    border: 1px solid #f3e8e8;
    border-radius: 15px !important;

    color: #fff;
    font-weight: 200;
    padding: 15px 22px;

    text-align: center;
    letter-spacing: 3px;
    text-transform: capitalize !important;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 7px;
  }
   .button-outlated2 {
    background-color: rgb(236, 4, 4);
    color: black;
    border: 1px solid #f30808;
    border-radius: 15px !important;

    color: #fff;
    font-weight: 200;
    padding: 15px 22px;

    text-align: center;
    letter-spacing: 3px;
    text-transform: capitalize !important;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 7px;
  }
  .button:hover {
    opacity: 0.8;
    text-decoration: none;
  }
  .block {
    display: block;
    width: 100%;
    border: none;
    background-color: #4caf50;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
  }
  .fire-token-top {
    margin-bottom: -120%;
  }
  .fire-token {
    margin-bottom: -28%;
  }
  .fire {
    margin-bottom: -20%;
  }
  .fire-token-down {
    margin-top: 5%;
    margin-bottom: -10%;
  }
  .claim-right {
    margin-top: 37em;
    margin-left: 3.4em;
  }
  .vert-move {
    -webkit-animation: mover 0.1s infinite alternate;
    animation: mover 0.1s infinite alternate;
  }
  .vert-move {
    -webkit-animation: mover 0.1s infinite alternate;
    animation: mover 0.1s infinite alternate;
  }
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2px);
    }
  }
  @keyframes orbit2 {
    from {
      transform: rotate(0) translateX(50px) rotate(0);
    }
    to {
      transform: rotate(360deg) translateX(50px) rotate(-360deg);
    }
  }
  @-webkit-keyframes orbit1 {
    from {
      -webkit-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg) translateX(50px) rotate(-300deg);
    }
  }
  @-moz-keyframes orbit1 {
    from {
      -moz-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -moz-transform: rotate(360deg) translateX(50px) rotate(-300deg);
    }
  }
  @-o-keyframes orbit1 {
    from {
      -o-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -o-transform: rotate(360deg) translateX(50px) rotate(-300deg);
    }
  }
  @keyframes orbit1 {
    from {
      transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      transform: rotate(360deg) translateX(50px) rotate(-300deg);
    }
  }
  @-webkit-keyframes orbit0 {
    from {
      -webkit-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -webkit-transform: rotate(-360deg) translateX(50px) rotate(360deg);
    }
  }
  @-moz-keyframes orbit0 {
    from {
      -moz-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -moz-transform: rotate(-360deg) translateX(50px) rotate(360deg);
    }
  }
  @-o-keyframes orbit0 {
    from {
      -o-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -o-transform: rotate(-360deg) translateX(50px) rotate(360deg);
    }
  }
  @keyframes orbit0 {
    from {
      transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      transform: rotate(-360deg) translateX(50px) rotate(-360deg);
    }
  }
  .fire-move {
    z-index: 1;
    -webkit-animation: fire 1s infinite alternate;
    animation: fire 1s infinite alternate;
  }
  @-webkit-keyframes fire {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-25px);
    }
  }
  @keyframes fire {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-25px);
    }
  }
  .shape {
    background: linear-gradient(45deg, var(--primary) 0, var(--secondary) 100%);
    animation: morph 8s ease-in-out infinite;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    height: 77px;
    transition: all 1s ease-in-out;
    width: 77px;
    margin-top: -2.7em;
    margin-left: 0.6em;
    z-index: 5;
  }
  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(
        45deg,
        var(--primary) 0,
        var(--secondary) 100%
      );
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      background: linear-gradient(45deg, var(--third) 0, var(--secondary) 100%);
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(
        45deg,
        var(--primary) 0,
        var(--secondary) 100%
      );
    }
  }
}

@media screen and (min-width: 601px) {
  .my-class {
    display: none;
    background: #000;
    color: #fff;
  }
  .content-action h2 {
    text-align: center;
    margin-top: 20px;
    margin-left: 10%;
    margin-right: 10%;
    display: block;
    width: 450px;
    color: rgb(255 255 255);
    font-size: 50px;
    line-height: 55px;
    text-shadow: 0 0 20px #002056;
    font-weight: 900 !important;
  }
  .min-heading {
    margin-top: 40px;
    padding-right: 5%;
  }
  .claim-left {
    margin-top: -15%;
    margin-left: -25%;
  }
  .card-row {
    margin-top: 5%;
  }
  .card-row h1 {
    font-size: 45px;
    margin-left: 10%;
    margin-right: 10%;
    color: #00409e;
    text-align: center;
    font-weight: 700;
  }
  .card-row p {
    margin-top: 10px;
    font-size: 1.5rem;
    color: #140707;
    margin-left: 10%;
    margin-right: 10%;
    text-align: start;
    font-weight: 700;
  }
  .content-action p {
    margin-top: 10px;
    color: #7f7171;
    margin-left: 5%;
    margin-right: 20%;
    text-align: start;
  }
  .rocke-img {
    margin-top: -6%;
    margin-left: 18%;
  }
  .claim-right-main {
    margin-top: -30%;
    margin-left: 80%;
  }
  .min-heading h1 {
    margin-top: 20px;
    font-size: 35px;
    margin-left: 3%;
    margin-right: 3%;
    text-align: center;
    font-weight: 700;
  }
  .image-show {
    right: 0;
    height: 100%;
    margin-bottom: 5%;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
  }
  .action-work h2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 40px !important;
    font-weight: 700;
  }
  .action-work p {
    margin-left: 5%;
    margin-right: 5%;
    font-size: 22px;
    color: #7f7171;
    text-align: center;
  }
  .min-heading p {
    margin-left: 3%;
    margin-right: 3%;
    font-size: 23px;
    text-align: center;
    color: #7f7171;
  }
  .button {
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    font-weight: 700;
    padding: 15px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
  }
  .button:hover {
    opacity: 0.8;
    text-decoration: none;
  }
  .content-action p {
    margin-left: 10%;
    margin-right: 10%;
    display: block;
    width: 450px;
    position: relative;
    text-shadow: 0 0 20px #001740;
    text-align: center;
  }
  .card-section p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    font-size: 22px;
    color: rgb(47 47 47);
    text-align: center;
    font-weight: 700;
    opacity: 0.9;
    left: 10%;
    right: 10%;
  }
  .down-top {
    margin-top: -35em;
  }
  .videobutton {
    margin-top: -50%;
    margin-left: 40%;
  }
  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    80% {
      transform: translateX(10px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
  .shape {
    background: linear-gradient(45deg, var(--primary) 0, var(--secondary) 100%);
    animation: morph 8s ease-in-out infinite;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    height: 77px;
    transition: all 1s ease-in-out;
    width: 77px;
    margin-top: -2.7em;
    margin-left: 0.6em;
    z-index: 5;
  }
  .card-section h1 {
    margin-top: 2em;
    margin-bottom: 44px;
    font-size: 92px;
    color: rgb(0 64 158);
  }
  .card-section {
    margin-top: -12em;
  }
  .video-top {
    margin-top: -20em;
  }
  .video-modal {
    width: 400px;
    height: 300px;
  }
  .rocket-col {
    margin-bottom: -7em;
  }
  .margin-col {
    margin-top: -12%;
  }
  .fire-token-top {
    margin-bottom: -52%;
  }
  .fire-token {
    margin-bottom: -12%;
  }
  .fire {
    margin-bottom: -20%;
  }
  .fire-token-down {
    margin-top: 5%;
    margin-bottom: -10%;
  }
  .center {
    margin-top: 0;
    display: block;
    margin: auto;
  }
  .box-top {
    position: relative;
    top: 50%;
    margin-left: -2.25em;
    animation: circle 3s infinite;
    background: #fecc76;
    clip-path: circle(75%);
    height: 30px;
    width: 30px;
  }
  .box {
    position: relative;
    top: 50%;
    margin-left: -2.25em;
    animation: circle 3s infinite;
    background: orange;
    clip-path: circle(75%);
    height: 30px;
    width: 30px;
  }
  @keyframes circle {
    0% {
      clip-path: circle(75%);
    }
    50% {
      clip-path: circle(25%);
    }
    100% {
      clip-path: circle(75%);
    }
  }
  .content-border {
    border-left: 10px solid #fecc76;
  }
  .circular {
    margin-top: 20%;
    height: 100%;
    margin-bottom: 10%;
    width: 100%;
    background-size: cover;
  }
  .claim {
    margin-top: 20%;
  }
  .claim-right {
    margin-top: -46em;
    margin-left: 33.4em;
  }
  .auction {
    margin-top: 00em;
    background-color: #fff;
  }
  .parent {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 4em;
    margin-top: -3.4em;
  }
  .image1 {
    position: relative;
    left: 0;
    z-index: 1;
  }
  .image2 {
    position: absolute;
    top: 70px;
    left: 30px;
    z-index: 2;
  }
  .heading h1 {
    font-size: 60px;
    line-height: 69px;
    margin-bottom: 15px;
    letter-spacing: 1px;
    display: block;
    width: 600px;
    justify-content: center;
    color: rgb(0 61 149);
    position: relative;
    letter-spacing: -3px;
  }
  .heading p {
    font-size: 1.5rem;
    line-height: 34px;
    margin: 0;
    margin-bottom: 38px;
    text-align: center;
    position: relative;
    color: rgb(103 103 103);
    margin-right: 75px;
    margin-left: 50px;
    top: 10px;
  }
  @-webkit-keyframes orbit2 {
    from {
      -webkit-transform: rotate(0) translateX(50px) rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg) translateX(50px) rotate(-360deg);
    }
  }
  @-moz-keyframes orbit2 {
    from {
      -moz-transform: rotate(0) translateX(50px) rotate(0);
    }
    to {
      -moz-transform: rotate(360deg) translateX(50px) rotate(-360deg);
    }
  }
  @-o-keyframes orbit2 {
    from {
      -o-transform: rotate(0) translateX(50px) rotate(0);
    }
    to {
      -o-transform: rotate(360deg) translateX(50px) rotate(-360deg);
    }
  }
  @keyframes orbit2 {
    from {
      transform: rotate(0) translateX(50px) rotate(0);
    }
    to {
      transform: rotate(360deg) translateX(50px) rotate(-360deg);
    }
  }
  @-webkit-keyframes orbit1 {
    from {
      -webkit-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg) translateX(50px) rotate(-300deg);
    }
  }
  @-moz-keyframes orbit1 {
    from {
      -moz-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -moz-transform: rotate(360deg) translateX(50px) rotate(-300deg);
    }
  }
  @-o-keyframes orbit1 {
    from {
      -o-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -o-transform: rotate(360deg) translateX(50px) rotate(-300deg);
    }
  }
  @keyframes orbit1 {
    from {
      transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      transform: rotate(360deg) translateX(50px) rotate(-300deg);
    }
  }
  @-webkit-keyframes orbit0 {
    from {
      -webkit-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -webkit-transform: rotate(-360deg) translateX(50px) rotate(360deg);
    }
  }
  @-moz-keyframes orbit0 {
    from {
      -moz-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -moz-transform: rotate(-360deg) translateX(50px) rotate(360deg);
    }
  }
  @-o-keyframes orbit0 {
    from {
      -o-transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      -o-transform: rotate(-360deg) translateX(50px) rotate(360deg);
    }
  }
  @keyframes orbit0 {
    from {
      transform: rotate(0) translateX(70px) rotate(0);
    }
    to {
      transform: rotate(-360deg) translateX(50px) rotate(-360deg);
    }
  }
  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(
        45deg,
        var(--primary) 0,
        var(--secondary) 100%
      );
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      background: linear-gradient(45deg, var(--third) 0, var(--secondary) 100%);
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      background: linear-gradient(
        45deg,
        var(--primary) 0,
        var(--secondary) 100%
      );
    }
  }
  .vert-move {
    -webkit-animation: mover 0.1s infinite alternate;
    animation: mover 0.1s infinite alternate;
  }
  .vert-move {
    -webkit-animation: mover 0.1s infinite alternate;
    animation: mover 0.1s infinite alternate;
  }
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2px);
    }
  }
  .fire-move {
    z-index: 1;
    -webkit-animation: fire 1s infinite alternate;
    animation: fire 1s infinite alternate;
  }
  .fire-move {
    z-index: 1;
    -webkit-animation: fire 1s infinite alternate;
    animation: fire 1s infinite alternate;
  }
  @-webkit-keyframes fire {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-25px);
    }
  }
  @keyframes fire {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-25px);
    }
  }
}
</style>