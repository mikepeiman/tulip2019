<template>
  <div class="home">
    <HeroHome
      title="Tulip Electronics Inc"
      subtitle="Delivering Reliable CNC Memory Upgrades Since 1988"
    />
    <ProductCardsSection/>
    <Infosection
      title="Info Section"
      subtitle="Something Generic"
      content="This is the section content"
      primaryColor="#76D311"
      secondaryColor="#FAD414"
      accentColor="#1BEEFF"
      bgColor="#000ff"
      alpha="0.75"
      pos="bottom"
      :bg="getImgUrl(`the-illusionist.png`)"
      repeat="repeat"
      borderWidth="3"
    />
    <Infosection
      title="Contact Us"
      subtitle="Contact Form"
      content="Contact Form Here"
      primaryColor="#81BBFF"
      secondaryColor="#CE3C4D"
      accentColor="#1BEEFF"
      bgColor="#FAD414"
      alpha="0.5"
      pos="bottom"
      :bg="getImgUrl(`wild-sea.png`)"
      repeat="repeat"
      borderWidth="3"
    />
    <Infosection
      title="Info Section"
      subtitle="Something Generic"
      content="This is the section content"
      primaryColor="#76D311"
      secondaryColor="#FAD414"
      accentColor="#76D311"
      bgColor="#1BEEFF"
      alpha="0.25"
      pos="bottom"
      :bg="getImgUrl(`jade.jpg`)"
      repeat="no-repeat"
      borderWidth="3"
    />
    <Infosection
      title="Contact Us"
      subtitle="Contact Form"
      content="Contact Form Here"
      primaryColor="#CE3C4D"
      secondaryColor="#1BEEFF"
      accentColor="#1BEEFF"
      bgColor="#FAD414"
      alpha="0.5"
      pos="bottom"
      :bg="getImgUrl(`leather-nunchuck.png`)"
      repeat="repeat"
      borderWidth="3"
    />
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
  methods: {
    getImgUrl(img) {
      return require("./../assets/" + img);
    }
  }
};
</script>

<style lang="scss">
</style>
