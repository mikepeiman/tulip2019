<template>
<div id="nav">
  <div class="nav-inner">
    <h2 style="color: white;">Router Page by router.js</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/home2">Home2</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
  <div class="nav-inner">
    <h2 style="color: white;">Single Page by ID</h2>
    <router-link class="scroll" to="#section-home">Home</router-link>
    <router-link class="scroll" to="#section-cards">Cards</router-link>
    <router-link class="scroll" to="#section-products">Products</router-link>
    <router-link class="scroll" to="#section-about">About</router-link>
    <router-link class="scroll" to="#section-contact">Contact</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    msg: String
  },
  methods: {
    hello: function () {
      alert("hello!");
      console.log(
        "****************************** hello! ***********************************"
      );
    },
    scrollFix: function (hashbang) {
      location.href = hashbang;
    },
    scrollToElem: function (
      startTime,
      currentTime,
      duration,
      scrollEndElemTop,
      startScrollOffset
    ) {
      const easeInCubic = function (t) {
        return t * t * t;
      };
      const runtime = currentTime - startTime;
      let progress = runtime / duration;
      progress = Math.min(progress, 1);
      const ease = easeInCubic(progress);
      window.scroll(0, startScrollOffset + scrollEndElemTop * ease);
      if (runtime < duration) {
        requestAnimationFrame(timestamp => {
          const currentTime = timestamp || new Date().getTime();
          this.scrollToElem(
            startTime,
            currentTime,
            duration,
            scrollEndElemTop,
            startScrollOffset
          );
        });
      }
    },

  },
  mounted() {
    // Grab all the scroll class anchor elements, use whatever class you like

    const scrollElems = document.querySelectorAll(".scroll");
    let self = this;
    // Now add an event listeners to those element
    for (let i = 0; i < scrollElems.length; i++) {
      const elem = scrollElems[i];
      console.log(`scrollElems: `);
      console.log(elem);
      elem.addEventListener("click", function (e) {
        e.preventDefault();

        // 1. Get the element id to which you want to scroll
        const scrollElemId = e.target.href.split("#")[1];

        // 2. find that node from the document
        const scrollEndElem = document.getElementById(scrollElemId);
        console.log(`scrollEndElem: `);
        console.log(scrollEndElem);

        // 3. and we'll animate to that node..
        const anim = requestAnimationFrame(timestamp => {
          const stamp = timestamp || new Date().getTime();
          const duration = 750;
          const start = stamp;

          const startScrollOffset = window.pageYOffset;
          const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;

          self.scrollToElem(
            start,
            stamp,
            duration,
            scrollEndElemTop,
            startScrollOffset
          );
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../styles/app.scss";

#nav {
  z-index: 99;
  padding: 20px;
  color: rgba(0, 0, 0, 0);
  // background: rgba(0, 0, 0, 0.25);
  // border-bottom: 3px solid change-color($blue, $lightness: 40%, $alpha: .5);
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 10vw;
  align-items: center;
  justify-content: center;
  position: fixed;

  // border-right: 3px solid $blue;
  .nav-inner {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    // background: change-color($graphite, $lightness: 10%, $alpha: .5);
    padding: 3rem 0.1rem;
    // border: 1px solid white;
    box-shadow: inset inset 0px 5px rgba(255, 255, 255, 0.5);
  }

  a {
    font-weight: 300;
    font-family: "Montserrat";
    color: white;
    margin: 1px;
    text-decoration: none;
    width: 55%;
    display: flex;
    height: 25px;
    align-items: center;
    align-self: center;
    background: change-color($blue, $lightness: 40%, $alpha: 0.75);
    padding: 0.5rem 1.25rem 0.5rem 0.75rem;
    transition: all 0.15s;
    border-left: 5px solid change-color($blue, $lightness: 40%, $alpha: 0.75);
    //     &:after {
    //   content: "";
    //   position: absolute;
    //   background: black;
    //   top: 3px;
    //   left: 3px;
    //   width: 50%;
    //   height: 25px;
    //   z-index: -1;
    //   padding: .5rem 1.25rem;
    // }

    &:hover {
      background: change-color($blue, $lightness: 40%, $alpha: 0.85);
      border-left: 5px solid change-color($blue, $lightness: 70%, $alpha: 0.75);
      transform: scale(1.05);
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
    }

    &.router-link-exact-active {
      transition: all 0.15s;
      color: $graphite;
      background: change-color($gold, $lightness: 50%, $alpha: 0.85);
      border-left: 5px solid change-color($gold, $lightness: 70%, $alpha: 0.9);
    }
  }
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: $green;
}
</style>
