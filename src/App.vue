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
@import url('https://fonts.googleapis.com/css?family=Montserrat+Subrayada:400,700|Montserrat:300,400,700|Neuton:200,300,700&display=swap');

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

#nav {
  padding: 20px;
  background: #072140;
  border-bottom: 3px solid #81BBFF;

  a {
    font-weight: 300;
    font-family: 'Montserrat';
    color: #76D311;
    margin: 1rem;

    &.router-link-exact-active {
      color: #fad414;
    }
  }
}
</style>
