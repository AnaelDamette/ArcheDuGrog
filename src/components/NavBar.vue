<template>
  <div>
    <div
      @scroll.passive='positionRelative'
      id="nav"
      class="navbar navbar-expand-lg shadow-box navbar-light bg-primaire position-relative d-flex zindex-2 w-100 justify-content-between"
    >
      <a
        href="https://discord.com/invite/yhuwyfwJmt"
        class="d-flex justify-content-center align-items-center"
        ><img
          class="lien-discord-img"
          src="https://lh3.googleusercontent.com/dxiMCPFTqhInjdTqclY1lPy5PMAs0WnwuzIz5xCyMFIK0JceJSYKjyKx_wgTT5E-DNBTA0u7XrkXgy93MA=s80"
        />
        <p class="text-primaire m-2 lien-discord">
          Rejoingez l'Arche Du Grog !
        </p></a
      >
      <div class="d-flex justify-content-end">
        <router-link to="/" class="nav-item p-2 text-primaire"
          >Partenaires</router-link
        >
        <router-link to="/about" class="nav-item p-2 text-primaire"
          >Réseaux Sociaux</router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>
²
<script>
export default {
  name: "NavBar",
  methods: {
      positionRelative(event) {
          console.log("test", event);
      },
  },
  mouted(){document.addEventListener('scroll', this.positionRelative())},
  destroyed() {document.removeEventListener('scroll', this.positionRelative())}
}


</script>