<template>
  <!--  componente principal-->
  <div class="waper-landing">
    <!--1 Elemento: Barra de navegacion con links a online markeplace, cities, tours, locations, map, ingreso, registro y ayuda-->
    <div class="top-bar-container">
      <ul class="menu">
        <li><a href="#">Online Marketplace</a></li>
        <li><a href="#">Cities</a></li>
        <li><a href="#">Tours</a></li>
        <li><a href="#">Locations</a></li>
        <li><a href="#">Map</a></li>
        <li><a href="#">Ingreso</a></li>
        <li><a href="#">Registro</a></li>
        <li><a href="#">Ayuda</a></li>
      </ul>
    </div>
    <!--    2 Elemento: titulo y search bar-->
    <div class="title-bar-container">
      <div class="title-bar">
        <div class="title-bar-left">
          <div class="title-bar-title">
            <span>TourWebApp</span>
          </div>
        </div>
        <div class="title-bar-right">
          <div class="title-bar-search">
            <form>
              <input type="search" placeholder="Search..." />
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--    3 Elemento: contenedor-->
    <div class="big-container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Map",
});
</script>

<style scoped lang="scss">
// componente principal
.waper-landing {
  // grid 3 filas no scroleable
  display: grid;
  // Columnas
  grid-template-rows: 1fr 1fr 5fr;
  // No Scroll
  overflow: hidden;
  // Tomar toda la vista
  height: 100vh;
  // Elemento 1: Top bar
  .top-bar-container {
    // Posicionamiento del contenedor
    grid-row: 1 / 2;
    // Border
    border-bottom: 0.5rem solid #000;
    // color background-color
    background-color: #7cb6ab;



  }
}
</style>
