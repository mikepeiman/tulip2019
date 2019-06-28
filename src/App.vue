<template>
  <div id="app">
    <!-- <div class="body-bg"></div> -->
    <TopNav flexDirection="row" />
    <SideNav flexDirection="column" />
    <div class="main">
      <transition :name="transitionName" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TopNav from "@/components/TopNav.vue";
import SideNav from "@/components/SideNav.vue";

export default {
  name: "App",
  components: {
    TopNav,
    SideNav
  },
  data() {
    return {
      productList: [],
      transitionName: 'slide',
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
          let transitionName = to.meta.transitionName || from.meta.transitionName;
          if (transitionName === 'slide') {
            const toDepth = to.path.split('/').length;
            const fromDepth = from.path.split('/').length;
            transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
            this.transitionName = transitionName || DEFAULT_TRANSITION;
            next();
          };
      });
  },
      methods: {
        getImgUrl(img) {
          return require(img);
        },
        getData: function () {
          var Airtable = require("airtable");
          axios({
            url: this.apiUrl + this.base + "/Menu?view=Grid%20view",
            headers: {
              Authorization: `Bearer ${this.apiKey}`
            }
          }).then(res => {
            this.records = res.data.records;
            console.log(this.records);
          });
        },
        logData() {
          console.log(`this.productList: ${this.productList}`);
          console.log(this.productList);
        },
        scrollFix: function (hashbang) {
          location.href = hashbang;
        }
      },
      mounted: function () {
        if (this.$route.hash) {
          setTimeout(() => this.scrollFix(this.$route.hash), 1);
        }
      }
  };
</script>

<style lang="scss">
@import "styles/app.scss";

h1 {
  font-family: "Neuton", serif;
}

body {
  margin: 0;
  height: 100vh;
  background: white;
}

#app {
  font-family: "Montserrat", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  // display: grid;
  grid-template-areas:
  "topnav topnav"
  "sidenav main";
  grid-template-columns: 10vw 90vw;
  justify-content: center;
  width: 100vw;
  & .main {
    grid-area: main;
  }

  & #nav-side {
    grid-area: sidenav;
  }
  & #nav-top {
    grid-area: topnav;
  }


  @include media(">large") {
    // background-image: linear-gradient(
    //     135deg,
    //     rgba(0, 0, 0, 0.5) 0%,
    //     rgba(0, 0, 0, 0.95) 30%,
    //     rgba(0, 0, 0, 1) 50%,
    //     rgba(0, 0, 0, 0.95) 70%,
    //     rgba(0, 0, 0, 0.5)
    //   ),
    //   url("./assets/"+$bg);
    // background-repeat: repeat;
    // background-position: bottom;
    // background-attachment: fixed;
    // background-size: cover;
    // background-size: 75vh;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100vw, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100vw, 0);
}
</style>
