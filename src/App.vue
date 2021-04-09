<template>
  <div id="app" @scroll.passive="positionRelative">
    <NavBar />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    x:0,
    NavBar,
  },
  data() {
    return {
      x: 0
    };
  },
  methods: {
    positionRelative() {
      this.x = this.x +=1 
      if (this.x==200) {
        console.log('MammieRascasse')
        this.x = 0;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.positionRelative);
  },
  destroyed() {
    window.removeEventListener("scroll", this.positionRelative);
  },
};
</script>
