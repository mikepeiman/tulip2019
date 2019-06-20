<template>
  <div class="product-card">
    {{ msg }}
    <img class="product-card-img" :src="src" />
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    msg: String,
    src: String
  },
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-card {
  background: #072140;
  color: #81BBFF;
  border: 3px solid #81BBFF;
  padding: 2rem;
}

.product-card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  // max-width: 30%;
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
