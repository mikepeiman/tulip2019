<template>
  <div class="home">
     <Infosection
      title="Products"
      subtitle="All Our Memory Upgrades"
      content="Check It Out"
      :primaryColor="`${this.colors.altBlue}`"
      :secondaryColor="`${this.colors.gold}`"
      :accentColor="`${this.colors.tulip}`"
      :bgColor="`${this.colors.gold}`"
      :gradColor1="`${this.colors.tulip}`"
      :gradColor2="`${this.colors.graphite}`"
      :gradColor3="`${this.colors.altBlue}`"
      alpha="0.75"
      pos="bottom"
      :bg="getImgUrl(`leather-nunchuck.png`)"
      overlay="true"
      :images="this.images.panel3"
      repeat="repeat"
      borderWidth="3"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Infosection from "@/components/Infosection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Products",
  components: {
    Infosection,
    Footer,
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
