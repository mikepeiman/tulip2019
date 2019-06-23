<template>
  <div class="home">
    <HeroHome title="Tulip Electronics Inc" subtitle="Delivering Reliable CNC Memory Upgrades Since 1988" />
    <ProductCardsSection />
    <Infosection />
    <Contact />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHome from '@/components/HeroHome.vue'
import Nav from '@/components/Nav.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductCardsSection from '@/components/ProductCardsSection.vue'
import Infosection from '@/components/Infosection.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'home',
  components: {
    HeroHome,
    ProductCardsSection,
    Infosection,
    Contact,
    Footer
  }
}
</script>

<style lang="scss">

</style>

