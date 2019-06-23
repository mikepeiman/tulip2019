<template>
  <div class="section-container">
    <h1 class="product-cards-title">Contact Section</h1>
    <p>Contact Us</p>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
  },
  mounted: function() {
    console.log('Contact mounted')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../styles/app.scss";

.section-container {
  background: $tulip-bg;
  // border-top: 3px solid change-color($blue, $lightness: 40%, $alpha: .5);
  // border-bottom: 3px solid change-color($blue, $lightness: 40%, $alpha: 0.5);
  padding: 2rem 0;
}

.product-cards-section {
  display: grid;
  grid-template-columns: [space] 0fr [content] 1fr [space] 0fr;
  grid-template-rows: auto;
  gap: 2rem;

  @include media(">large") {
    grid-template-columns: 1fr [content] 10fr 1fr;
    gap: 2.5rem;
  }

  @include media(">xl") {
    grid-template-columns: 1fr [content] 5fr 1fr;
    gap: 3rem;
  }
}

.grid-container {
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr;
  // grid-template-areas: "start center end";

  @include media(">small") {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @include media(">medium") {
    // display: flex;
    // align-content: center;
    // flex-wrap: wrap;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }

  @include media(">large") {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  grid-row: auto;
  gap: 2rem;
  justify-content: space-evenly;
}

.product-cards-title {
  font-family: "Montserrat";
  grid-area: title;
  font-weight: 300;
  color: $green;
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

.subtitle {
  font-family: "Montserrat", "Neuton", serif;
  font-weight: 300;
  color: #76d311;
  font-size: 2rem;
  margin: 0 0 2rem 0;
  padding: 0 0 0.5rem 0;
}
</style>
