<template>
  <div class="hero">
    <div class="hero-bg">
      <img class="hero-logo" alt="Tulip Electronics logo" src="../assets/logo.png">
      <h1 class="title">{{ title }}</h1>
      <!-- <span class="gradient-underline-container">
        <span class="gradient-underline"> -->
          <h2 class="subtitle">{{ subtitle }}</h2>
        <!-- </span>
      </span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroHome",
  props: {
    title: String,
    subtitle: String
  },
};
</script>

<style lang="scss" scoped>

.title {
  font-family: "Montserrat Subrayada", "Neuton", serif;
  color: #fad414;
  font-size: 4rem;
  font-weight: 400;
  margin: 0 0 .75rem 0;
  background: linear-gradient(180deg, #fad414 55%, #76d311 100%);
  background-clip: text;
  color: transparent;
  // text-shadow: 2px 2px #76d311;
}

.gradient-underline-container {
  background: linear-gradient(90deg, #fad414, #76d311);
  padding-bottom: 3px;
  z-index: -1;
}

.gradient-underline {
  padding-top: 3px;
  background: black;
  position: relative;
  // top: -6px;
  // padding-bottom: 3px;
}

.subtitle {
  // position: relative;
  // top: -6px;
  // display: inline;  
  font-family: "Montserrat", "Neuton", serif;
  font-weight: 300;
  // color: scale-color($color: #FAD414, $saturation: -25%, $lightness: -25%, $alpha: 1.0);
  color: #76D311;
  // background: linear-gradient(90deg, #76d311, #fad414);
  // background-clip: text;
  // color: transparent;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 10rem 0;
  padding: 0 0 0.5rem 0;

  &:after {
    // border-bottom: 1px solid #FAD414;
    position: absolute;
    width: 100%;
    content: "";
    left: 0;
    bottom: 0;
    background: blue;
  }
}

.hero-bg {
  padding-top: 4rem;
}

.hero-logo {
  position: relative;
  width: 35vh;
  margin-bottom: 2rem;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
