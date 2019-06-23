<template>
  <div class="product-card">
    <div class="product-card-image">
      <img class="product-card-img" :src="img">
    </div>
    <div class="product-details">
      <div class="model">
        <h3>Model</h3>
        <h3 v-for="model in products.models">{{ model }}</h3>
      </div>
      <div class="version">
        <h3>Version</h3>
        <h3 v-for="ver in products.versions">{{ ver }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    models: Array,
    versions: Array,
    index: Number,
    img: String,
    products: String,
    productImg: String,
  },
  data() {
    return {
      detailsHeading: "Test",
      productDetails: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../styles/app.scss";

.product-card {
  background: none;
  color: $blue;
  border: 5px solid $blue-faint;
  border-radius: 3px;
  transition: all 0.25s;
  position: relative;
  height: auto;

  &:hover {
    border: 5px solid $blue;
    background: rgba(0, 0, 0, 0.25);
    transition: all 0.25s;

    & img {
      opacity: 1;
    }
  }

  & h3 {
    font-size: 1rem;
    font-weight: 400;
    font-family: "montserrat";
    color: white;
    padding: 0.75rem;
    margin: 0;
    // text-transform: uppercase;
  }
}

.product-card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  opacity: 0.75;
  padding: 0;
  transition: all 0.25s;
}

.product-details {
  display: grid;
  grid-template-columns: [make] 1fr [version] 1fr;
  margin: 0.5rem;
  background: rgba($green, 0.25);
  & h3 {
    color: $green;
  }
}

.img-overlay {
  background: linear-gradient(45deg, rgba($blue, 0.5), rgba($graphite, 0.5));
  padding: 0;
  margin: 0;
}
</style>
