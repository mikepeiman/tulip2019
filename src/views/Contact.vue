<template>
  <div class="home">
    <Infosection
      title="Contact Us"
      subtitle="How Can We Help You?"
      content="Contact Form Here"
      :primaryColor="`${this.colors.tulip}`"
      :secondaryColor="`${this.colors.gold}`"
      :accentColor="`${this.colors.tulip}`"
      :bgColor="`${this.colors.gold}`"
      :gradColor1="`${this.colors.altBlue}`"
      :gradColor2="`${this.colors.green}`"
      :gradColor3="`${this.colors.gold}`"
      alpha="0.5"
      pos="bottom"
      :bg="getImgUrl(`jade.jpg`)"
      overlay="true"
      :images="this.images.panel2"
      repeat="no-repeat"
      borderWidth="3"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Infosection from "@/components/Infosection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Contact",
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
