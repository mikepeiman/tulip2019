<template>
<section class="section-container parallax" :style="overlay ? containerStyle : containerClearStyle">
  <div class="section-nav-spacer"></div>
  <div class="section-main">
    <h1 class="section-title" :style="titleStyle">{{ title }}</h1>
    <h2 class="section-subtitle" :style="subtitleStyle">{{ subtitle }}</h2>
    <div class="triangle-container" :style="contentStyle">
      <p class="section-content">{{ content }}</p>
      <div class="css-triangle" :style="triangleStyle"></div>
    </div>
    <!-- </div> -->
    <slot></slot>
    <div class="image-container" v-if="images">
      <div class="section-image" v-for="image in images" :style="imageStyle(image)"></div>
    </div>
  </div>
</section>
</template>

<script>
import hexToRgba from "hex-to-rgba";

export default {
  name: "Hero",
  props: {
    title: String,
    subtitle: String,
    content: String,
    primaryColor: String,
    secondaryColor: String,
    accentColor: String,
    bgColor: String,
    gradColor1: String,
    gradColor2: String,
    gradColor3: String,
    bg: String,
    alpha: String,
    repeat: String,
    borderWidth: String,
    pos: String,
    images: Array,
    overlay: Boolean
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    containerStyle() {
      return `
      background-image: linear-gradient(45deg, ${this.convert(
        this.gradColor1,
        this.alpha
      )}, ${this.convert(this.gradColor2, this.alpha)}, ${this.convert(
        this.gradColor3,
        this.alpha
      )}), url(${this.bg});
      `;
    },
    containerClearStyle() {
      return `
      background-image: url(${this.bg});
      `;
    },
    titleStyle() {
      return `
      color: ${this.primaryColor};
      border: ${this.borderWidth}px solid ${this.primaryColor};
      `;
    },
    subtitleStyle() {
      return `
      color: ${this.primaryColor};
      border: ${this.borderWidth}px solid ${this.primaryColor};
      `;
    },
    contentStyle() {
      return `
      color: ${this.primaryColor};
      border: ${this.borderWidth}px solid ${this.primaryColor};
      `;
    },
    triangleStyle() {
      return `
      border-${this.pos}-color: ${this.primaryColor};
      `;
    }
  },
  methods: {
    getImgUrl(bg) {
      return require("./../assets/" + bg);
    },
    convert(color, alpha) {
      return hexToRgba(color, alpha);
    },
    imageStyle(image) {
      return `
      background-image: url(${this.getImgUrl(image)});
      border: 1px solid ${this.primaryColor};
      `;
    },
    parallax(bg) {
      const speed = 5;
      let pos = "-" + window.pageYOffset / speed + "px";
      console.log(window.pageYOffset);
      console.log(bg.style);
      bg.style.backgroundPositionY = `0, ${pos}`;
    }
  },
  mounted: function () {
    console.log("Infosection mounted");
    const parallaxElements = [...document.getElementsByClassName("parallax")];
    console.log("parallax elements:");
    console.log(parallaxElements);

    window.addEventListener("scroll", e => {
      parallaxElements.forEach(bg => {
        console.log("parallaxElemenets forEach");
        console.log(bg);
        this.parallax(bg);
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../styles/app.scss";

$section-padding: 2rem;
$section-color: $green;
$section-title-bg: $graphite;
$triangle-size: 24px;
$contrast-color: $gold;
$bg-image: "./../assets/the-illusionist.png";
$bg-repeat: repeat;

.section-container {
  height: 100vh;
  display: flex;
  // ************* use the following to offset main content by 10vw for nav
  //
  // display: grid;
  // grid-template-columns: [nav] 10vw [main] 90vw;
  // ************* END
  flex-direction: column;
  background-position: 50% 20%;
  // background-attachment: fixed;
  // background-repeat: $bg-repeat;
  // padding: $section-padding 0;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.75);
  scroll-behavior: smooth;
}

// ************* use the following to offset main content by 10vw for nav
.nav-spacer {
  grid-area: nav;
}

.section-main {
  grid-area: main;
  display: flex;
  flex-direction: column;
}

// ************* END

.section-title {
  font-family: "Montserrat";
  grid-area: title;
  font-weight: 300;
  color: $green;
  border: 3px solid $contrast-color;
  background: $graphite;
  width: max-content;
  align-self: center;
  padding: 1rem;
  margin-top: $section-padding;
  text-shadow: 1px 1px $graphite;
  justify-self: flex-start;
  // border-bottom: 3px solid $contrast-color;
}

.section-subtitle {
  font-family: "Montserrat";
  grid-area: title;
  font-weight: 300;
  text-shadow: 1px 1px $graphite;
  justify-self: center;
  align-self: center;
  padding: 1rem;
  border: 3px solid $contrast-color;
  background: $graphite;
  width: max-content;
}

.image-container {
  display: flex;
  flex-direction: row;
  position: relative;

  //  this was the problem below - this expanded beyond the body
  // width: 100vw;
  justify-content: center;
  // background: rgba(0,0,0,0.5);
}

.section-image {
  height: 12vw;
  width: 18vw;
  margin: 2rem;
  background-size: cover;
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.25s;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0px 2px 8px 3px rgba(0, 0, 0, 0.9);
    border: 3px solid inherit;
  }
}

.triangle-container {
  background: $graphite;
  width: 50vw;
  align-self: center;
  position: relative;
  height: 50px;
  border: 3px solid $contrast-color;
  display: flex;
  justify-content: center;
  margin-top: $triangle-size;
}

.css-triangle {
  // @include css-triangle($blue, top, 24px, relative, false);
  border-left: $triangle-size solid transparent;
  border-right: $triangle-size solid transparent;
  border-bottom: $triangle-size solid $contrast-color;
  position: absolute;
  width: 0;
  height: 0;
  margin-bottom: 0 - round($triangle-size / 2.5);
  margin-top: 0 - $triangle-size;
}
</style>
