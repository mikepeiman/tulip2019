<template>
  <div class="section-container" :style="containerStyle">
    <div class="section-nav-spacer"></div>
    <div class="section-main">
      <h1 class="section-title" :style="titleStyle">{{ title }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import hexToRgba from "hex-to-rgba";

export default {
  name: "Section",
  props: {
    title: String,
    subtitle: String,
    content: String,
    primaryColor: String,
    secondaryColor: String,
    accentColor: String,
    bgColor: String,
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
      background-image: linear-gradient(45deg, ${this.convert(
        this.accentColor,
        this.alpha
      )}, ${this.convert(this.bgColor, this.alpha)}), url(${this.bg});
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
    }
  },
  mounted: function() {
    console.log("Infosection mounted");
    console.log(this.convert(this.bgColor, 0.5));
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
  z-index: 11;
  height: 100vh;
  display: flex;
  // ************* use the following to offset main content by 10vw for nav
  //
  // display: grid;
  // grid-template-columns: [nav] 10vw [main] 90vw;
  // ************* END
  flex-direction: column;
  background-position: 50% 20%;
  background-attachment: fixed;
  background-repeat: $bg-repeat;
  // padding: $section-padding 0;
  box-shadow: 0 0 10px 10px rgba($graphite, 0.75);
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
// *************** END
.section-title {
  font-family: "Montserrat";
  grid-area: title;
  font-weight: 300;
  background: $graphite;
  width: max-content;
  align-self: center;
  padding: 1rem;
  margin-top: $section-padding;
  text-shadow: 1px 1px $graphite;
  justify-self: flex-start;
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
  left: 25vw;
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
