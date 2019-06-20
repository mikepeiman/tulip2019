<template>
<div class="product-card">
  <div class="img-overlay">
    <div class="product-card-image">
    <img class="product-card-img" :src="src" />
    </div>
    </div>
    {{ productName }}
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
    & img {
      opacity: 1.0;
    }
  }
}

.product-card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  opacity: 0.75;
  padding: 0;
}

.img-overlay {
    background: linear-gradient(45deg,rgba($blue,0.5), rgba($graphite,0.5));
}
</style>
