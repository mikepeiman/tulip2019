<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/app.scss";

#nav {
  padding: 20px;
  color: change-color($blue, $lightness: 40%, $alpha: .5);
  background: $blue-bg;
  border-bottom: 3px solid change-color($blue, $lightness: 40%, $alpha: .5);

  a {
    font-weight: 300;
    font-family: 'Montserrat';
    color: #76D311;
    margin: 1rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fad414;
    }
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
  color: $green;
}
</style>
