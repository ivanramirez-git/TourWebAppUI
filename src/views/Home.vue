<template>
  <!--    Links a todas las pantallas-->
  <div class="all-component">
    <div class="top-bar">
      <router-link to="/" class="botton-top-bar">Home</router-link>
      <router-link to="/about" class="botton-top-bar">About</router-link>
      <router-link to="/Landing" class="botton-top-bar">Landing</router-link>
      <router-link to="/Map" class="botton-top-bar">Map</router-link>
      <router-link to="/transport" class="botton-top-bar"
        >Transport Company</router-link
      >
    </div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="This is a test" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>

<style lang="scss">
.all-component {
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 10fr;

  .top-bar {
    // que cada componente quede en un cuadro
    display: grid;
    grid-row-start: 1;
    // grilla horizontal
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    // Borde
    border: 3px solid black;
    // Elementos alineados
    text-align: center;
    // Cada elementotiene su popio borde
    border-radius: 5px;
    .botton-top-bar {
      // Borde
      border: 1px solid black;
      // Cada elementotiene su popio borde
      border-radius: 5px;
      // Elementos
      padding: 5px;
      margin: 5px;
      text-decoration: none;
      color: black;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
  .home {
    grid-row-start: 2;
  }
}
</style>
