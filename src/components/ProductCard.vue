<template>
<div class="product-card">
  <div class="img-overlay">
    <img class="product-card-img" :src="src" />
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

  &:hover {
    border: 5px solid $blue;
    background: rgba(0, 0, 0, 0.25);
  }
}
img {
  z-index: -1;
  &:after {
    content: "";
    background: linear-gradient(45deg,rgba(255,0,55,0.5), rgba(55,0,255,0.5));
    position: absolute;
  }
}

.product-card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: .5rem;
}

.img-overlay {
    background: linear-gradient(45deg,rgba(255,0,55,0.5), rgba(55,0,255,0.5));
}
</style>
