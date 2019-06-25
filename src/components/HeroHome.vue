<template>
  <div class="hero">
    <div class="hero-bg">
      <img class="hero-logo" alt="Tulip Electronics logo" src="../assets/logo.png">
      <h1 class="title">{{ title }}</h1>
      <!-- <span class="gradient-underline-container">
      <span class="gradient-underline">-->
      <h2 class="subtitle">{{ subtitle }}</h2>
      <!-- </span>
      </span>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroHome",
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/app.scss";
.hero {
  height: 100vh;
}

.hero-bg {
  width: 100%;
  // position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
}
.title {
  font-family: "Montserrat Subrayada", "Neuton", serif;
  color: $gold;
  font-size: 2.25rem;
  font-weight: 400;
  margin: 0 0 0.75rem 0;
  background: linear-gradient(180deg, $green 35%, $gold 100%);
  background-clip: text;
  color: transparent;
  padding: 0.5rem;

  @include media(">xs") {
    font-size: 2.5rem;
    padding: 0.75rem;
  }

  @include media(">small") {
    font-size: 3.25rem;
    padding: 1rem;
  }

  @include media(">medium") {
    font-size: 4rem;
    padding: 1rem;
  }
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
}

.subtitle {
  font-family: "Montserrat", "Neuton", serif;
  font-weight: 300;
  color: $gold;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 8rem 0;
  padding: 0 0.5rem 0.5rem 0.5rem;

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
</style>
