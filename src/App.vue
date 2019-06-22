<template>
<div id="app">
  <!-- <div class="body-bg"> -->
  <!-- </div> -->
  <Nav />
  <router-view />
</div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  data() {
    return {
      apiUrl: 'https://api.airtable.com/v0/',
      apiKey: 'keyQoffgeTdQ6I4Lt', // Always use a read-only account token
      base: 'appP3Ar7WtMKMd6Hu',
      records: [],
      productList: []
    };
  },
  methods: {
    getImgUrl(img) {
      return require(img)
    },
    getData: function () {
      var Airtable = require('airtable')
      axios({
        url: this.apiUrl + this.base + "/Menu?view=Grid%20view",
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      }).then((res) => {
        this.records = res.data.records;
        console.log(this.records)
      });
    },
    getData2() {
      var Airtable = require('airtable');
      var self = this;
      Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'keyQoffgeTdQ6I4Lt'
      });
      var base = Airtable.base('appP3Ar7WtMKMd6Hu');

      base('Product List').select({
        // // Selecting the first 3 records in Grid view:
        // maxRecords: 3,
        view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          console.log('Retrieved', record.get('id'));
          console.log(record.fields)
          if(record.fields.id) {
            self.productList.push(record.fields)
          }
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

      }, function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      });

    },
    logData() {
      console.log(`this.productList: ${this.productList}`)
      console.log(this.productList)
    }
  },
  mounted: function () {
    this.getData2();
    setTimeout(() => {
      this.logData();
    }, 500);
    
  },
}
</script>

<style lang="scss">
@import "styles/app.scss";

h1 {
  font-family: 'Neuton', serif;
}

body {
  margin: 0;
  height: 100vh;
  background: #161616;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;

  background: url("./assets/bg06.png") no-repeat 50% 25% fixed;
  background-size: 50vh;
}
</style>
