<template>
  <div class="home">
    <HeroHome
      title="Tulip Electronics Inc"
      subtitle="Delivering Reliable CNC Memory Upgrades Since 1988"
    />
    <ProductCardsSection/>

  </div>
</template>

<script>
// @ is an alias to /src
import HeroHome from "@/components/HeroHome.vue";
import Nav from "@/components/Nav.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductCardsSection from "@/components/ProductCardsSection.vue";
import Infosection from "@/components/Infosection.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import SignUp from "@/components/SignUp.vue";
import Boilerplate from "@/components/Boilerplate.vue";

export default {
  name: "home",
  components: {
    HeroHome,
    ProductCardsSection,
    Infosection,
    Contact,
    Footer,
    Boilerplate
  },
  data() {
    return {
      colors: {
        green: "#76d311",
        blue: "#81bbff",
        tulip: "#ce3c4d",
        gold: "#fad414",
        graphite: "#252525",
        altBlue: "#0FC1FF"
      },
      images: {
        panel1: ["bg15.png", "canvas-orange.jpg", "DSC03208-forweb.jpg"],
        panel2: ["pcb-001.png", "pcb-006b.png", "pcb-009.png"],
        panel3: ["pcb-003.png", "pcb-004.png", "pcb-008b.png"]
      }
    };
  },
  methods: {
    getImgUrl(img) {
      return require("./../assets/" + img);
    }
  },
  mounted() {
    console.log(
      "############################################## mounted() this.images"
    );
    console.log(this.images.panel1);
  }
};
</script>

<style lang="scss">
</style>
