<template>
  <div class="home">
    <HeroHome title="Tulip Electronics" subtitle="CNC Memory Upgrades" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeroHome from '@/components/HeroHome.vue'
import Nav from '@/components/Nav.vue'
import ProductCard from '@/components/ProductCard.vue'
import Footer from '@/components/Footer.vue'
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    HeroHome
  }
}
</script>

<style lang="scss" scoped>
body {
  background: black;
}
</style>

