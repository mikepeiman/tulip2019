<template>
<div class="product-cards-section">
  <div class="grid-container">
    <ProductCard class="content" v-for="card in cardnum" :productName="`Fanuc ${card}`" :src="getImgUrl(imageSources[card-1])" />
  </div>
  <div class="grid-container">
    <ProductCard class="content" v-for="card in cardnum" :productName="`Mazak ${card}`"  :src="getImgUrl(imageSources[card])" />
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
      productMfgs: [
        {
          mfg: 'Fanuc',
          models: ['0, 10'],
          version: ['Analog', 'Digital'],
          upgrades: [],
          src: '',
        },
      ],
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
  background: $blue-bg;
  border-top: 3px solid #81bbff;
  border-bottom: 3px solid #81bbff;
  padding: 2rem;
  gap: 3rem;

  @include media("<desktop") {
    grid-template-columns: [content] 3fr;
  }
}

.grid-container {
  grid-area: content;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-row: auto;
  gap: 4rem;
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
  color: #76d311;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 2rem 0;
  padding: 0 0 0.5rem 0;

}
</style>
