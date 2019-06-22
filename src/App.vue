<template>
<div id="app">
  <!-- <div class="body-bg"> -->
  <!-- </div> -->
  <Nav />
  <router-view />
</div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
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
      return require(img)
    },
    getData: function () {
      var Airtable = require('airtable')
      axios({
        url: this.apiUrl + this.base + "/Menu?view=Grid%20view",
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      }).then((res) => {
        this.records = res.data.records;
        console.log(this.records)
      });
    },
    logData() {
      console.log(`this.productList: ${this.productList}`)
      console.log(this.productList)
    }
  },
  mounted: function () {
    // this.getData2();
    // setTimeout(() => {
    //   this.logData();
    // }, 500);
    
  },
}
</script>

<style lang="scss">
@import "styles/app.scss";

h1 {
  font-family: 'Neuton', serif;
}

body {
  margin: 0;
  height: 100vh;
  background: #161616;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;

  background: url("./assets/bg06.png") no-repeat 50% 25% fixed;
  background-size: 50vh;
}
</style>
