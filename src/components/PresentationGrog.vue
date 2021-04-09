<template>
  <div class="grog-background">
    <div class="bg-transparent p-2 rounded container">
      <div
        class="bg-dark-opacity p-3 rounded-top m-0 mt-3 text-primaire d-flex justify-content-center p-2"
      >
        <h1
          v-scrollanimation
          class="bg-transparent rounded-top m-0 mt-3 shadow-text text-primaire d-flex justify-content-center p-2"
        >
          Présentation Grog
        </h1>
      </div>
      <div class="bg-dark-opacity m-0">
        <p
          v-scrollanimation
          class="bg-transparent m-0 shadow-text text-secondaire text-center"
        >
          Un petit texte pour présenter les grogs!
        </p>
      </div>

      <div class="bg-dark-opacity justify-content-center p-3 p-md-5">
        <h2
          v-scrollanimation
          class="bg-transparent text-primaire-hover mb-4 text-md-left text-center shadow-text"
        >
          Maître Brasseur
        </h2>
        <div class="d-flex flex-column flex-md-row bg-transparent">
          <figure
            v-scrollanimation
            class="rounded text-center col-12 col-md-4 col-lg-3 image-responsive bg-transparent"
          >
            <img
              src="../assets/MaitreBrasseurGrog.png"
              alt="Image du Maître brasseur Grog"
              class="cover bg-transparent image-responsive rounded"
            />
          </figure>
          <figcaption v-scrollanimation class="bg-transparent">
            <p
              class="bg-transparent text-justify text-secondaire ml-md-4 shadow-text"
            >
              Ici un magnifique texte relativement long pour expliqué ce qu'est
              un Maître brasseur chez les grogs ! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
            </p>
          </figcaption>
        </div>
      </div>
      <div class="bg-dark-opacity justify-content-center p-3 p-md-5">
        <h2
          v-scrollanimation
          class="bg-transparent text-primaire-hover mb-4 text-md-left text-center shadow-text"
        >
          Membre
        </h2>
        <div class="d-flex flex-column-reverse flex-md-row bg-transparent">
          <figcaption v-scrollanimation class="bg-transparent">
            <p
              class="bg-transparent text-justify text-secondaire ml-md-4 shadow-text"
            >
              Ici un magnifique texte relativement long pour expliqué ce qu'est
              un Maître brasseur chez les grogs ! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
            </p>
          </figcaption>
          <figure
            class="rounded text-center col-12 col-md-4 col-lg-3 image-responsive bg-transparent"
          >
            <img
              v-scrollanimation
              src="../assets/MaitreBrasseurGrog.png"
              alt="Image du Maître brasseur Grog"
              class="cover bg-transparent image-responsive rounded"
            />
          </figure>
        </div>
      </div>
      <div class="bg-dark-opacity justify-content-center p-3 p-md-5">
        <h2
          v-scrollanimation
          class="bg-transparent text-primaire-hover mb-4 text-md-left text-center shadow-text"
        >
          Mousse
        </h2>
        <div class="d-flex flex-column flex-md-row bg-transparent">
          <figure
            class="rounded text-center col-12 col-md-4 col-lg-3 image-responsive bg-transparent"
          >
            <img
              v-scrollanimation
              src="../assets/MaitreBrasseurGrog.png"
              alt="Image du Maître brasseur Grog"
              class="cover bg-transparent image-responsive rounded"
            />
          </figure>
          <figcaption v-scrollanimation class="bg-transparent">
            <p
              class="bg-transparent text-justify text-secondaire ml-md-4 shadow-text"
            >
              Ici un magnifique texte relativement long pour expliqué ce qu'est
              un Maître brasseur chez les grogs ! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
            </p>
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PresentationGrog",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*
    This classes are for the directive. 
    For each element observed by our directive, the before-enter class is added.
  */
.before-enter {
  opacity: 0;
  transform: translateY(-30px);
  transition: all 2s cubic-bezier(0.41, 0.01, 0.57, 1.61);
}
/* 
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
