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
      :primaryColor="`${this.colors.gold}`"
      :secondaryColor="`${this.colors.gold}`"
      :accentColor="`${this.colors.tulip}`"
      :bgColor="`${this.colors.gold}`"
      :overlay="false"
      :gradColor1="`${this.colors.blue}`"
      :gradColor2="`${this.colors.graphite}`"
      :gradColor3="`${this.colors.gold}`"
      alpha="0.75"
      pos="bottom"
      repeat="repeat"
      borderWidth="3"
    />
    <Infosection
      title="Info Section"
      subtitle="Something Generic"
      content="This is the section content"
      :primaryColor="`${this.colors.gold}`"
      :secondaryColor="`${this.colors.gold}`"
      :accentColor="`${this.colors.tulip}`"
      :bgColor="`${this.colors.gold}`"
      :gradColor1="`${this.colors.blue}`"
      :gradColor2="`${this.colors.graphite}`"
      :gradColor3="`${this.colors.gold}`"
      alpha="0.75"
      :overlay="true"
      pos="bottom"
      :bg="getImgUrl(`the-illusionist.png`)"
      repeat="repeat"
      borderWidth="3"
    />
    <Infosection
      title="Contact Us"
      subtitle="Contact Form"
      content="Contact Form Here"
      :primaryColor="`${this.colors.tulip}`"
      :secondaryColor="`${this.colors.gold}`"
      :accentColor="`${this.colors.tulip}`"
      :bgColor="`${this.colors.gold}`"
      :gradColor1="`${this.colors.gold}`"
      :gradColor2="`${this.colors.graphite}`"
      :gradColor3="`${this.colors.tulip}`"
      :images="this.images.panel1"
      alpha="0.25"
      pos="bottom"
      :bg="getImgUrl(`wild-sea.png`)"
      :overlay="false"
      repeat="repeat"
      borderWidth="3"
    />
    <Infosection
      title="Info Section"
      subtitle="Something Generic"
      content="This is the section content"
      :primaryColor="`${this.colors.tulip}`"
      :secondaryColor="`${this.colors.gold}`"
      :accentColor="`${this.colors.tulip}`"
      :bgColor="`${this.colors.gold}`"
      :gradColor1="`${this.colors.altBlue}`"
      :gradColor2="`${this.colors.graphite}`"
      :gradColor3="`${this.colors.gold}`"
      alpha="0.75"
      pos="bottom"
      :bg="getImgUrl(`jade.jpg`)"
      :images="this.images.panel2"
      repeat="no-repeat"
      borderWidth="3"
    />
    <Infosection
      title="Contact Us"
      subtitle="Contact Form"
      content="Contact Form Here"
      :primaryColor="`${this.colors.altBlue}`"
      :secondaryColor="`${this.colors.gold}`"
      :accentColor="`${this.colors.tulip}`"
      :bgColor="`${this.colors.gold}`"
      :gradColor1="`${this.colors.gold}`"
      :gradColor2="`${this.colors.graphite}`"
      :gradColor3="`${this.colors.altBlue}`"
      alpha="0.75"
      pos="bottom"
      :bg="getImgUrl(`leather-nunchuck.png`)"
      :images="this.images.panel3"
      repeat="repeat"
      borderWidth="3"
    />
    <Infosection
      title="Info Section"
      subtitle="Something Generic"
      content="This is the section content"
      :primaryColor="`${this.colors.tulip}`"
      :secondaryColor="`${this.colors.gold}`"
      :accentColor="`${this.colors.tulip}`"
      :bgColor="`${this.colors.gold}`"
      :gradColor1="`${this.colors.blue}`"
      :gradColor2="`${this.colors.graphite}`"
      :gradColor3="`${this.colors.gold}`"
      alpha="0.75"
      pos="bottom"
      :bg="getImgUrl(`wood_1.png`)"
      repeat="repeat"
      borderWidth="3"
    />
    <Infosection
      title="Contact Us"
      subtitle="Contact Form"
      content="Contact Form Here"
      :primaryColor="`${this.colors.green}`"
      :secondaryColor="`${this.colors.gold}`"
      :accentColor="`${this.colors.tulip}`"
      :bgColor="`${this.colors.gold}`"
      :gradColor1="`${this.colors.gold}`"
      :gradColor2="`${this.colors.graphite}`"
      :gradColor3="`${this.colors.tulip}`"
      alpha="0.45"
      pos="bottom"
      :bg="getImgUrl(`old_mathematics.png`)"
      repeat="repeat"
      borderWidth="3"
    />
    <Infosection
      title="Info Section"
      subtitle="Something Generic"
      content="This is the section content"
      :primaryColor="`${this.colors.altBlue}`"
      :secondaryColor="`${this.colors.gold}`"
      :accentColor="`${this.colors.tulip}`"
      :bgColor="`${this.colors.gold}`"
      :gradColor1="`${this.colors.altBlue}`"
      :gradColor2="`${this.colors.graphite}`"
      :gradColor3="`${this.colors.gold}`"
      alpha="0.25"
      pos="bottom"
      :bg="getImgUrl(`tactile_noise.png`)"
      repeat="no-repeat"
      borderWidth="3"
    />
    <Infosection
      title="Contact Us"
      subtitle="Contact Form"
      content="Contact Form Here"
      :primaryColor="`${this.colors.altBlue}`"
      :secondaryColor="`${this.colors.gold}`"
      :accentColor="`${this.colors.tulip}`"
      :bgColor="`${this.colors.gold}`"
      :gradColor1="`${this.colors.tulip}`"
      :gradColor2="`${this.colors.graphite}`"
      :gradColor3="`${this.colors.altBlue}`"
      alpha="0.25"
      pos="bottom"
      :bg="getImgUrl(`crossed_stripes.png`)"
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
        "panel1": ["bg15.png", "canvas-orange.jpg", "DSC03208-forweb.jpg"],
        "panel2": ["pcb-001.png", "pcb-006b.png", "pcb-009.png"],
        "panel3": ["pcb-003.png", "pcb-004.png", "pcb-008b.png"],
      }
    };
  },
  methods: {
    getImgUrl(img) {
      return require("./../assets/" + img);
    }
  },
  mounted() {
    console.log('############################################## mounted() this.images')
    console.log(this.images.panel1)
  }
};
</script>

<style lang="scss">
</style>
