<template>
  <div class="home">
    <!-- <div class="grid-container">
          <HeroHome title="Tulip Electronics" subtitle="CNC Memory Upgrades" />
          <HeroHome title="Tulip Electronics" subtitle="CNC Memory Upgrades" />
          <HeroHome title="Tulip Electronics" subtitle="CNC Memory Upgrades" />
          <HeroHome title="Tulip Electronics" subtitle="CNC Memory Upgrades" />
          <HeroHome title="Tulip Electronics" subtitle="CNC Memory Upgrades" />
    </div> -->
    <HeroHome title="Tulip Electronics Inc" subtitle="Delivering Reliable CNC Memory Upgrades Since 1988" />
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>

