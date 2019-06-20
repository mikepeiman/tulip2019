<template>
<div class="product-cards-section">
  <div class="grid-container">
    <ProductCard class="content" v-for="card in cardnum" :msg="`I am a product card ${card}`" :src="getImgUrl(imageSources[card-1])" />
  </div>
  <div class="grid-container">
    <ProductCard class="content" v-for="card in cardnum" :msg="`I am a product card ${card}`"  :src="getImgUrl(imageSources[card])" />
  </div>
</div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

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
      cardnum: [1, 2, 3],
      imageSources: [
        'DSC03193-forweb.jpg',
        'DSC03208-forweb.jpg',
        'DSC03218-forweb.jpg',
        'DSC03226-forweb.jpg',
      ]
    };
  },
  methods: {
    getImgUrl(img) {
      return require('../assets/' + img)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../styles/app.scss";

.product-cards-section {
  display: grid;
  grid-template-columns: 1fr [content] 5fr 1fr;
  grid-template-rows: auto;
  background: $bg-blue;
  border-top: 3px solid #81bbff;
  border-bottom: 3px solid #81bbff;
  padding: 2rem;
  gap: 1rem;

  @include media("<desktop") {
    grid-template-columns: [content] 3fr;
  }
}

.grid-container {
  grid-area: content;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-row: auto;
  gap: 1rem;
  justify-content: space-evenly;
}

.title {
  font-family: "Montserrat Subrayada", "Neuton", serif;
  color: #fad414;
  font-size: 4rem;
  font-weight: 400;
  margin: 0 0 0.75rem 0;
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
  color: #76d311;
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
