<template>
<div class="product-card">
  <div class="product-card-image">
    <img class="product-card-img" :src="img">
    </div>
    <table class="product-details">
      <thead>
        <th class="table-heading">Model</th>
        <th class="table-heading">Version</th>
      </thead>
      <tbody>
        <tr v-for="(model, i) in products.models">
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
    models: Array,
    versions: Array,
    index: Number,
    img: String,
    products: String,
    productImg: String,
  },
  data() {
    return {
      detailsHeading: "Test",
      productDetails: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../styles/app.scss";

.product-card {
  background: none;
  color: $blue;
  border: 5px solid $blue-faint;
  border-radius: 3px;
  transition: all 0.25s;
  position: relative;
  height: 100%;

  &:hover {
    border: 5px solid $blue;
    background: rgba(0, 0, 0, 0.25);
    transition: all 0.25s;

    & img {
      opacity: 1;
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

.product-details {
  display: table;
  text-align: left;
  width: calc(100% - 1rem);
  margin: 0.5rem;
  color: white;
  font-weight: 300;
  font-family: 'Montserrat';

  & h3 {
    color: $green;
  }

}

table {
    & tr {
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,0.5);
  }
  & td {
    width: 50%;
    padding: .25rem;
  }
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
  border-bottom: 3px solid rgba($blue,0.5);
  margin-bottom: .5rem;
}

tr:first-of-type {
  margin-bottom: 1em;
}
.table-item {
  border-bottom: 1px solid rgba(255,255,255,0.5);
}

.inner-grid-item {
  border-bottom: 1px solid white;
  height: 100%;
}
</style>
