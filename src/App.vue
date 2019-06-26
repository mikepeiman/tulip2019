<template>
  <div id="app">
    <!-- <div class="body-bg"></div> -->
    <Nav/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav
  },
  data() {
    return {
      productList: []
    };
  },
  methods: {
    getImgUrl(img) {
      return require(img);
    },
    getData: function() {
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
    }
  },
  mounted: function() {
    // this.getData2();
    // setTimeout(() => {
    //   this.logData();
    // }, 500);
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
  // width: calc(100vw - 16.8px);
  background: #161616;
}

#app {
  font-family: "Montserrat", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  // display: grid;
  // grid-template-columns: [nav] 10vw [main] 90vw;

  // background: url("./assets/bg06.png") no-repeat 50% 20% fixed;
  // background-size: 50vh;
  // @include media(">large") {
  //   background: url("./assets/bg06.png") no-repeat 50% 0% fixed;
  // background-size: 75vh;
  // }
  & .main {
    grid-area: main;
  }
  & nav {
    grid-area: nav;
  }
  $bg: "the-illusionist.png";
  background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.75) 15%,
      rgba(100, 100, 100, 0.85) 47%,
      rgba(0, 0, 0, 0.75)
    ),
    url("./assets/"+$bg);
  background-repeat: repeat;
  background-position: fixed;
  background-attachment: fixed;
  // background-size: cover;
  // background-size: 50vh;
  @include media(">large") {
    background-image: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.95) 30%,
        rgba(0, 0, 0, 1) 50%,
        rgba(0, 0, 0, 0.95) 70%,
        rgba(0, 0, 0, 0.5)
      ),
      url("./assets/"+$bg);
    background-repeat: repeat;
    // background-position: bottom;
    background-attachment: fixed;
    // background-size: cover;
    // background-size: 75vh;
  }
}
</style>
