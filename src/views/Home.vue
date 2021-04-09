<template>
  <div class="home bg-green shadow-box w-100 overflow-hidden bg-transparent">
    <div
      class="position-relative bg-transparent d-flex justify-content-center overflow-hidden"
    >
      <img
        alt="Logo de L'arche du Grog"
        class="mw-75 zindex-1 m-5 cover bg-transparent position-relative"
        src="../assets/Logo-Grog.gif"
      />
      <video
        class="position-absolute cover bg-transparent"
        id="video-presentation"
        autoplay
        loop
      >
        <source
          src="../assets/VideoPresentationSite.mp4"
          alt="Vidéo présentation des Grogs"
          class="zindex-0"
          type="video/mp4"
        />
      </video>
    </div>
    <PresentationGrog />
  </div>
</template>

<script>
// @ is an alias to /src
import PresentationGrog from "@/components/PresentationGrog.vue";

export default {
  name: "Home",
  components: {
    PresentationGrog,
  },
  created(){
    let videoPresentation = document.querySelector('#video-presentation');

  },
};
</script>
