<template>
<div class="hero">
  <div id="hero-bg" class="hero-bg">
    <img id="logo" class="hero-logo" alt="Tulip Electronics logo" src="../assets/logo.png">
    <div id="hero-heading">
      <h1 id="hero-title" class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ subtitle }}</h2>
    </div>
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
  methods: {
    parallaxBg(el, start, speed) {
      const scrollSpeed = speed ? speed : 5;
      let clientHeight = document.documentElement.clientHeight;
      let pageY = window.pageYOffset
      let startPos = clientHeight / (100 / start)
      let pos = startPos - (pageY / scrollSpeed);
      let posUnit = 100 / clientHeight
      let opacity = 1
      opacity += (pos * posUnit / 20)
      pos = (-pos / 3) + 60 + "vh";
      setTimeout(() => {
        console.log(`%%%%%%%%%%%%%%%%%%%%%%% parallaxBg pagepageYffset ${pageY} clientHeight ${clientHeight} pos ${pos} posUnit ${posUnit} opacity ${opacity} %%%%%%%%%%%%%%%%%%%%%%%`)
      }, 5);
      // el.style.backgroundSize = `${pos}`;
      Object.assign(el.style, {
        backgroundSize: `${pos}`,
        opacity: `${opacity}`
      })
    },
    // parallaxBg(bg, s) {
    //   const speed = s ? s : 5;
    //   let pos = window.pageYOffset / speed;
      
    //   // bg.style.backgroundPositionY = `0, ${pos}`;
    //   // bg.style.backgroundSize = `${pos}`
    //   console.log(`bg.style.backgroundSize = "${pos}vh"`)
    //   Object.assign(bg.style, {
    //     backgroundSize: `"${pos}vh"`
    //   })
    //   bg.style.cssText = `"background-size: ${pos}vh;"`
    // },
    parallaxEl(el, start, speed) {
      const scrollSpeed = speed ? speed : 5;
      let clientHeight = document.documentElement.clientHeight;
      let pageY = window.pageYOffset
      let startPos = clientHeight / (100 / start)
      let pos = startPos - (pageY / scrollSpeed) + "px";
      // setTimeout(() => {
      //   console.log(`%%%%%%%%%%%%%%%%%%%%%%% parallaxEl pagepageYffset ${pageY} clientHeight ${clientHeight} pos ${pos} %%%%%%%%%%%%%%%%%%%%%%%`)
      // }, 1);
      el.style.top = `${pos}`;
    },
    parallaxImg(el, start, speed) {
      const scrollSpeed = speed ? speed : 5;
      let clientHeight = document.documentElement.clientHeight;
      let pageY = window.pageYOffset
      let startPos = clientHeight / (100 / start)
      let pos = startPos - (pageY / scrollSpeed) + "px";
      // setTimeout(() => {
      //   console.log(`%%%%%%%%%%%%%%%%%%%%%%% parallaxImg pagepageYffset ${pageY} clientHeight ${clientHeight} pos ${pos} %%%%%%%%%%%%%%%%%%%%%%%`)
      // }, 1);
      el.style.top = `${pos}`;
    }
  },
  mounted: function () {
    window.addEventListener("scroll", e => {
      let bg = document.querySelector('#hero-bg')
      let title = document.querySelector('#hero-heading')
      let logo = document.querySelector('#logo')
      this.parallaxBg(bg, 1, 4);
      this.parallaxImg(logo, -20, 25);
      this.parallaxEl(title, 50, 2);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/app.scss";

.hero {
  height: 100vh;
  width: 100%;
  // background-image:  linear-gradient(rgba(#161616, 0.5), rgba($graphite, 1));
  // z-index: -2;
  // background-attachment: fixed;
}

#hero-heading {
  position: fixed;
  top: 50vh;
  left: auto;
}

.hero-logo {
  position: relative;
  top: -20vh;
  width: 35vh;
  margin-bottom: 2rem;
}

.hero-bg {
  // width: 100%;
  height: 100vh;
  top: 0vh;
  width: 100vw;
  background: #161616;
  background-image: linear-gradient(rgba(#161616, 0.5), rgba(#161616, 1)), url('./../assets/bg07.png');
  position: fixed;
  background-repeat: no-repeat;
  background-position: center -10%;
  background-size: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
}

.title {
  font-family: "Montserrat Subrayada", "Neuton", serif;
  color: $gold;
  font-size: 2.25rem;
  font-weight: 400;
  margin: 0 0 0.75rem 0;
  background: linear-gradient(180deg, $green 35%, $gold 75%);
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
</style>
