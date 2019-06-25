<template>
<div class="section-container" :style="containerStyle">
  <h1 class="section-title" :style="titleStyle">{{ title }}</h1>
  <h2 class="section-subtitle" :style="subtitleStyle">{{ subtitle }}</h2>
  <div class="triangle-container" :style="contentStyle">
    <p class="section-content">{{ content }}</p>
    <div class="css-triangle" :style="triangleStyle">
    </div>
  </div>
  <slot></slot>
</div>
</template>

<script>
import hexToRgba from 'hex-to-rgba';

export default {
  name: "Infosection",
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
    pos: String
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    containerStyle() {
      return `
      background-image: linear-gradient(45deg, ${this.convert(this.gradColor1, this.alpha)}, ${this.convert(this.gradColor2, this.alpha)}, ${this.convert(this.gradColor3, this.alpha)}), url(${this.bg});
      border-top: ${this.borderWidth}px solid ${this.primaryColor};
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
      return hexToRgba(color, alpha)
    }
  },
  mounted: function () {
    console.log("Infosection mounted");
    console.log(this.convert(this.bgColor, 0.5))
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
  flex-direction: column;
  // background: url($bg-image);
  // background-image: linear-gradient(90deg, $section-color, rgba($graphite, 0.5), $section-color), url($bg-image);
  // background-size: cover;
  background-position: 50% 20%;
  // background-size: 125%;
  background-attachment: fixed;
  background-repeat: $bg-repeat;
  // border-bottom: 3px solid $section-color; 
  padding: $section-padding 0;
  // margin: 1rem 0;
  box-shadow: 0 0 10px 3px rgba(0,0,0,0.75);
  scroll-behavior: smooth;
}

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
