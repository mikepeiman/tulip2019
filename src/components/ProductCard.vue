<template>
  <div class="product-card">
    <div class="product-card-image">
      <img class="product-card-img" :src="img">
      <h1 class="product-card-title test1 test2">{{ make[0] }}</h1>
    </div>
    <table class="product-details">
      <thead>
        <th class="table-heading">Models</th>
        <th class="table-heading">Versions</th>
      </thead>
      <tbody>
        <tr v-for="(model, i) in products.models" @click="expandRow($event)">
          <td class="table-item model">{{ model }}</td>
          <td class="table-item version">{{ products.versions[i] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    make: Array,
    index: Number,
    img: String,
    products: Object
  },
  data() {
    return {
      detailsHeading: "Test",
      productDetails: []
    };
  },
  methods: {
    expandRow(e) {
      console.log('expandRow')
      console.log(e.target.parentNode)
      let row = e.target.parentNode
      row.classList.toggle('absolute-modal')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../styles/app.scss";

.product-card {
  background: rgba(0, 0, 0, 0.25);
  color: $blue;
  border: 5px solid $blue-faint;
  border-radius: 3px;
  transition: all 0.25s;
  position: relative;
  height: 97.5%;
  transition: all 0.25s;

  &:hover {
    // border: 5px solid $blue;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.25s;

    & img {
      opacity: 1;
    }
    & .product-card-title {
      color: white;
      border-bottom: 3px solid $green; //change-color($blue, $lightness: 40%, $alpha: .5);
      transition: all 0.25s;
    }
  }

  & h3 {
    font-size: 1rem;
    font-weight: 400;
    font-family: "montserrat";
    color: white;
    padding: 0.5rem;
    margin: 0;
    // text-transform: uppercase;
  }
}

.product-card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  opacity: 0.75;
  padding: 0;
  transition: all 0.25s;
}

.product-card-title {
  font-family: "Montserrat";
  font-size: 1.5rem;
  margin: 0;
  padding: 0.25rem;
  color: change-color($blue, $lightness: 50%, $alpha: 1);
  border-bottom: 3px solid $blue-faint;
  transition: all 0.25s;
}

.product-details {
  display: table;
  text-align: left;
  width: calc(100% - 1rem);
  margin: 0.5rem;
  color: white;
  font-weight: 300;
  font-family: "Montserrat";
  & h3 {
    color: $green;
  }
}

table {
  border-spacing: 1px;
  transition: all 0.25s;

  & thead {
    padding: 0.5rem;
  }
  & th {
    padding: 0.65rem 0;
  }
  & tr {
    width: 100%;
    // height: auto;
    top: auto;
    left: auto;
    transition: all 0.25s;
    &:hover {
      background: change-color($blue, $lightness: 45%, $alpha: 1);
      transform: scale(1.02);
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
      height: 150%;
      & .product-card-add-to-cart {
        background: white;
      }
    }
  }
  & td {
    width: 50%;
    padding: 0.65rem 0.25rem;
    // border-bottom: 1px solid rgba(255,255,255,0.5);
  }
}
.absolute-modal {
  position: absolute;
  color: $green;
  width: 50vw;
  height: 50vh;
  top: 25vh;
  left: 25vw;
  transition: all .25s;
  z-index: 99;
}

.product-card-add-to-cart {
  width: 8ch;
  height: 6ch;
  padding: 0.25rem;
  background: $blue;
  margin: 0;
  border: none;
  align-self: stretch;
}
.img-overlay {
  background: linear-gradient(45deg, rgba($blue, 0.5), rgba($graphite, 0.5));
  padding: 0;
  margin: 0;
}

.inner-grid {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  text-align: start;
}

.table-heading {
  // border-bottom: 3px solid rgba($blue,0.5);
  margin-bottom: 0.5rem;
}

.table-button {
  opacity: 0;
  width: 0;
}

tr:first-of-type {
  margin-bottom: 1em;
}
.table-item {
  // border-bottom: 1px solid rgba(255,255,255,0.5);
  background: change-color($blue, $lightness: 40%, $alpha: 0.5);
  transition: all 0.25s;
  // &:hover {
  //   background: change-color($blue, $lightness: 45%, $alpha: 1);
  // }

}

.inner-grid-item {
  border-bottom: 1px solid white;
  height: 100%;
}
</style>
