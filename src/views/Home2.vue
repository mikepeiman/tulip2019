<template>
  <div class="home">
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
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHome from "@/components/HeroHome.vue";
import ProductCardsSection from "@/components/ProductCardsSection.vue";
import Infosection from "@/components/Infosection.vue";

export default {
  name: "Home2",
  components: {
    HeroHome,
    ProductCardsSection,
    Infosection
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
