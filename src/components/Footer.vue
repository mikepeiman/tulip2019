<template>
<div class="section-container" :style="containerStyle">
  <h1 class="section-title" :style="titleStyle">{{ title }}</h1>
  <h2 class="section-subtitle">{{ subtitle }}</h2>
  <div class="triangle-container">
    <p class="section-content">{{ content }}</p>
    <div class="css-triangle">

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    title: String,
    subtitle: String,
    content: String,
    color: String,
    bg: String,
    repeat: String,
    borderWidth: Number
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    containerStyle() {
      return `
      border-bottom: ${this.borderWidth}px solid ${this.color};
      `;
    },
    titleStyle() {
      return `
      color: ${this.color};
      `;
    }
  },
  methods: {
    getImgUrl(bg) {
      return require("./../assets/" + bg);
    }
  },
  mounted: function () {
    console.log("Footer mounted");
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
  display: flex;
  flex-direction: column;
  background: url($bg-image);
  background-image: linear-gradient(90deg, $section-color, rgba($graphite, 0.5), $section-color), url($bg-image);
  // background-size: cover;
  background-position: 50% 20%;
  background-attachment: fixed;
  background-repeat: $bg-repeat;
  border-top: 3px solid $section-color; 
  padding: $section-padding 0;
  margin: 1rem 0;
  box-shadow: 0 0 10px 10px rgba($graphite, 0.75);
}

.section-title {
  font-family: "Montserrat";
  grid-area: title;
  font-weight: 300;
  color: $green;
  background: $graphite;
  padding: 1rem;
  margin-top: -$section-padding;
  text-shadow: 1px 1px $graphite;
  justify-self: flex-start;
  border-bottom: 3px solid $contrast-color;
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
