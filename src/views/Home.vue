<template>
  <div class="home">
    <HeroHome title="Tulip Electronics Inc" subtitle="Delivering Reliable CNC Memory Upgrades Since 1988" />
    <ProductCardsSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeroHome from '@/components/HeroHome.vue'
import Nav from '@/components/Nav.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductCardsSection from '@/components/ProductCardsSection.vue'
import Footer from '@/components/Footer.vue'
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'home',
  components: {
    HeroHome,
    ProductCardsSection
  }
}
</script>

<style lang="scss">

</style>

