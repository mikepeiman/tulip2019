<template>
<div class="product-cards-section">
  <div class="grid-container">
    <div class="product-container" v-for="(product, index) in productsByMake">
      <ProductCard class="content" v-for="p in product" v-bind="index" :index="index" :make="Object.keys(product)" :img="getImgUrl(images[index])" :products="p" />
    </div>
  </div>
</div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductCardsSection",
  components: {
    ProductCard
  },
  data() {
    return {
      productList: [],
      productMakes: [],
      productsByMake: [],
      models: [],
      productVersions: [],
      test: [],
      mfgList: [],
      images: []
      // imageSources: [
      //   "DSC03193-forweb.jpg",
      //   "DSC03208-forweb.jpg",
      //   "DSC03218-forweb.jpg",
      //   "DSC03226-forweb.jpg"
      // ]
    };
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    },
    getProductsByMake(make) {
      this.sortByMake();
      return this.productsByMake.filter(product => product.make === make);
    },
    getData() {
      var Airtable = require("airtable");
      var self = this;
      Airtable.configure({
        endpointUrl: "https://api.airtable.com",
        apiKey: "keyQoffgeTdQ6I4Lt"
      });
      var base = Airtable.base("appP3Ar7WtMKMd6Hu");

      base("Product Summary")
        .select({
          // Selecting the first 3 records in Grid view:
          // maxRecords: 3,
          view: "Grid view"
        })
        .eachPage(
          function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.

            records.forEach(function (record) {
              console.log("Retrieved", record.get("id"));
              console.log(record.fields);
              if (record.fields.id) {
                self.productList.push(record.fields);
                console.log(`Version: ${record.fields.version}`);
              }
            });

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
              return;
            }
            self.sortByMake();
          }
        );
    },
    sortByMake() {
      console.log(`this.productList: ${this.productList}`);
      console.log(this.productList);
      this.productMakes = this.productList.map(product => {
        return product.make;
      });
      this.productMakes = [...new Set(this.productMakes)];
      this.modelsByMake();
    },
    modelsByMake() {
      this.productMakes.forEach((make, i) => {
        console.log('modelsByMake()');
        let currentImg = this.productList[i].image[0].filename
        this.images.push(currentImg)
        console.log(this.productList[i].image[0].filename)
        let currentModels = [];
        let currentVersions = [];
        this.productList.forEach(product => {
          if (product.make === make) {
            console.log(`Make ${make} matches`);
            currentModels.push(`"${product.model}"`);
            if (product.version === undefined) {
              product.version = "N/A";
            }
            currentVersions.push(`"${product.version}"`);
          }
        });
        console.log(`{"${make}": {"models": [${currentModels}],}`);
        currentModels.forEach(mod => {
          console.log(mod);
        });
        this.productsByMake.push(
          JSON.parse(`{"${make}": 
            {
            "models": [${currentModels}],
            "versions": [${currentVersions}],
            "image": "${currentImg}"
            }
          }`)
        );
      });
    },
    getModels(p) {
      console.log('getModels()')
      console.log(p.models)
      return p.models
    },
    getVersions(p) {
      console.log('getVersions()')
      console.log(p.versions)
      return p.versions
    }
  },
  mounted: function () {
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../styles/app.scss";

.product-cards-section {
  display: grid;

  grid-template-columns: [content] 3fr;
  grid-template-rows: auto;
  background: $blue-bg;
  border-top: 3px solid #81bbff;
  border-bottom: 3px solid #81bbff;
  padding: 2rem;
  gap: 3rem;

  @include media(">large") {
    grid-template-columns: 1fr [content] 10fr 1fr;
  }
  @include media(">xl") {
    grid-template-columns: 1fr [content] 5fr 1fr;
  }
}

.grid-container {
  grid-area: content;
  display: grid;
  grid-template-columns: 100%;

  @include media(">small") {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @include media(">medium") {
    // display: flex;
    // align-content: center;
    // flex-wrap: wrap;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
    @include media(">large") {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  grid-row: auto;
  gap: 2rem;
  justify-content: space-evenly;
}

.title {
  font-family: "Montserrat Subrayada", "Neuton", serif;
  color: #fad414;
  font-size: 4rem;
  font-weight: 400;
  margin: 0 0 0.75rem 0;
  background: linear-gradient(180deg, #fad414 55%, #76d311 100%);
  background-clip: text;
  color: transparent;
}

.gradient-underline-container {
  background: linear-gradient(90deg, #fad414, #76d311);
  padding-bottom: 3px;
  z-index: -1;
}

.gradient-underline {
  padding-top: 3px;
  background: black;
  position: relative;
}

.subtitle {
  font-family: "Montserrat", "Neuton", serif;
  font-weight: 300;
  color: #76d311;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 2rem 0;
  padding: 0 0 0.5rem 0;
}
</style>
