<template>
<div id="app">
  <!-- <div class="body-bg"> -->
  <!-- </div> -->
  <Nav />
  <router-view />
</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  },
  methods: {
    getImgUrl(img) {
      return require(img)
    }
  }
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
