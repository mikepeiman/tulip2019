<template>
<div class="product-card">
  <div class="img-overlay">
    <div class="product-card-image">
      <img class="product-card-img" :src="src" />
    </div>
    </div>
    <h3>{{ productName }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productName: String,
    src: String
  },
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../styles/app.scss";

.product-card {
  background: none;
  color: $blue;
  border: 5px solid $blue-faint;
  border-radius: 3px;
  transition: all .25s;
  position: relative;
  height: auto;

  &:hover {
    border: 5px solid $blue;
    background: rgba(0, 0, 0, 0.25);
    transition: all .25s;

    & img {
      opacity: 1.0;
    }
  }

  & h3 {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'montserrat';
    color: $green;
    padding: .75rem;
    margin: 0;
    text-transform: uppercase;
  }
}


.product-card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  opacity: 0.75;
  padding: 0;
  transition: all .25s;
}

.img-overlay {
  background: linear-gradient(45deg, rgba($blue, 0.5), rgba($graphite, 0.5));
}
</style>
