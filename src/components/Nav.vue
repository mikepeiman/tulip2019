<template>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/about">About</router-link>
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
  color: rgba(0,0,0,0);
  // background: rgba(0,0,0,0.25);
  // border-bottom: 3px solid change-color($blue, $lightness: 40%, $alpha: .5);
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 10vw;
  align-items: center;
  justify-content: center;
  position: fixed;
  // border-right: 3px solid $blue;
  a {
    font-weight: 300;
    font-family: 'Montserrat';
    color: white;
    margin: 1px;
    text-decoration: none;
    background: change-color($blue, $lightness: 40%, $alpha: .5);
    padding: .5rem 1.25rem;
    &:hover {
      background: change-color($blue, $lightness: 50%, $alpha: .75);
            transform: scale(1.05);
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
    }

    &.router-link-exact-active {
      color: $gold;
      background: change-color($gold, $lightness: 50%, $alpha: .75);
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
