<template>
  <div class="product-cards-section">
    <div class="grid-container">
      <ProductCard v-for="card in cardnum" :msg="`I am a product card ${card}`" />
    </div>
        <div class="grid-container">
      <ProductCard v-for="card in cardnum" :msg="`I am a product card ${card}`" />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: "ProductCardsSection",
  props: {
    title: String,
    subtitle: String
  },
  components: {
    ProductCard
  },
  data() {
    return {
      cardnum: [1,2,3]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.product-cards-section {
  display: grid;
  flex-direction: column;
  justify-content: space-evenly;
  grid-template-columns: 1fr;
  background: #072140;
  border-top: 3px solid #81BBFF;
  border-bottom: 3px solid #81BBFF;
  padding: 2rem;
  gap: 1rem;
  width: 60vw;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 1rem;
}

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
  margin: 0 0 2rem 0;
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
  // position: relative;
  padding-top: 4rem;
  background: url(../assets/Tulip-about-bg-light-v2.0.png) no-repeat;
  background-size: 40vh;
  background-position: 50% 30%;
  top: 0px;
  left: 0px;
}

.hero-logo {
  position: relative;
  // top: 75px;
  width: 35vh;
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
