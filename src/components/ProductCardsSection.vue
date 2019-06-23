<template>
  <div class="section-container">
    <h1 class="product-cards-title">Available Upgrades</h1>
    <div class="product-cards-section">
      <div class="grid-container">
        <div
          class="product-container"
          @click="expandCard($event)"
          v-for="(product, index) in productsByMake"
        >
          <ProductCard
            v-for="p in product"
            v-bind="index"
            :index="index"
            :make="Object.keys(product)"
            :img="getImgUrl(images[index])"
            :products="p"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { wrapGrid } from "animate-css-grid";

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
      images: []
    };
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    },
    expandCard(e) {
      console.log("expandCard called");

      this.targetElement(e);
    },
    targetElement(e, s) {
      let grid = "grid-container";
      let card = "product-container";
      e = e.target;
      for (; e && e !== document; e = e.parentNode) {
        console.log("getClosestParentMatch()");
        console.log(e);
        console.log(e.classList[0]);
        // if (e.classList === undefined) e.classList = "empty"
        console.log(e.classList.contains(grid));
        // if (e.classList.contains(grid)) {
        //   e.classList.toggle('expand-grid')
        //   return e
        //   }
        if (e.classList.contains(card)) {
          e.classList.toggle("expand-card");
          return e;
        }
      }
      return null;
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

            records.forEach(function(record) {
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
        console.log("modelsByMake()");
        let currentImg = this.productList[i].image[0].filename;
        this.images.push(currentImg);
        console.log(this.productList[i].image[0].filename);
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
    }
  },
  mounted: function() {
    console.log('ProductCardsSection mounted')
    const grid = document.querySelector(".product-cards-section");
    wrapGrid(grid);
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../styles/app.scss";

.section-container {
  // background: $blue-bg;
  // border-top: 3px solid change-color($blue, $lightness: 40%, $alpha: .5);
  // border-bottom: 3px solid change-color($blue, $lightness: 40%, $alpha: 0.5);
  padding: 2rem 0;
}

.product-cards-section {
  display: grid;
  grid-template-columns: [space] 0fr [content] 1fr [space] 0fr;
  grid-template-rows: auto;
  gap: 2rem;

  @include media(">large") {
    grid-template-columns: 1fr [content] 10fr 1fr;
    gap: 2.5rem;
  }

  @include media(">xl") {
    grid-template-columns: 1fr [content] 5fr 1fr;
    gap: 3rem;
  }
}

.grid-container {
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr;
  // grid-template-areas: "start center end";

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

.expand-card {
  grid-column: span 3;
  grid-area: start;
}

.product-cards-title {
  font-family: "Montserrat";
  grid-area: title;
  font-weight: 300;
  color: $green;
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
  font-size: 2rem;
  margin: 0 0 2rem 0;
  padding: 0 0 0.5rem 0;
}
</style>
