<template>
<div class="hero">
  <img alt="Vue logo" src="../assets/logo.png" width="20%">
  <h1 class="title">
    {{ msg }}
  </h1>

</div>
</template>

<script>
export default {
  name: 'HeroHome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

.hero {
  background: url(../assets/tulip-bg-1-1000x600.jpg) no-repeat center center fixed;
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
