<template>
  <!--  componente principal-->
  <div class="waper-landing">
    <!--1 Elemento: Barra de navegacion con links a online markeplace, cities, tours, locations, map, ingreso, registro y ayuda-->
    <div class="top-bar-container">
      <router-link to="/" class="botton-top-bar">Online Markeplace</router-link>
      <text-bar-nav class="botton-top-bar">Cities</text-bar-nav>
      <text-bar-nav class="botton-top-bar">Tours</text-bar-nav>
      <text-bar-nav class="botton-top-bar">Location</text-bar-nav>
      <router-link to="/Map" class="botton-top-bar">Map</router-link>
      <router-link to="/login" class="botton-top-bar">Ingreso</router-link>
      <text-bar-nav class="botton-top-bar">Registro</text-bar-nav>
      <text-bar-nav class="botton-top-bar">Ayuda</text-bar-nav>
    </div>
    <!--    2 Elemento: titulo y search bar-->
    <div class="title-bar-container">
      <div class="bar-title">
        <span>TourWebApp</span>
      </div>
      <div class="bar-search">
        <form>
          <input type="search" placeholder="Search..." />
        </form>
      </div>
    </div>
    <!--    3 Elemento: contenedor-->
    <div class="big-container">
      <div class="list-container">
        <div class="icons-container">
          <div class="icon">
            <text> IMG </text>
            <text> All Categories </text>
          </div>
          <div class="icon">
            <text> IMG </text>
            <text> All Categories </text>
          </div>
        </div>
        <div class="item-container">
          <text class="item"> Item 1 </text>
          <text class="item"> Item 2 </text>
          <text class="item"> Item 3 </text>
          <text class="item"> Item 4 </text>
          <text class="item"> Item 5 </text>
          <text class="item"> Item 6 </text>
          <text class="item"> Item 7 </text>
        </div>
      </div>

      <div class="central-container">
        <div class="central-portada">
          <text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.
          </text>
        </div>
        <div class="central-info">
          <text> Centro </text>
        </div>
        <div class="central-abajo">
          <text> Abajo </text>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Al hacer click en log in, se debe redireccionar a la pagina de login
export default defineComponent({
  name: "Landing",
});
</script>

<style scoped lang="scss">
// componente principal
.waper-landing {
  // baground color
  background-color: #adadad;
  // Tomar toda la vista
  height: 100vh;
  // No Scroll
  overflow: hidden;
  // grid 3 filas no scroleable
  display: grid;
  // Columnas
  grid-template-rows: 0.5fr 0.5fr 5fr;

  // Elemento 1: Top bar
  .top-bar-container {
    // Margen del contenedor
    margin: 0.5rem;

    // posicionamiento del contenedor
    grid-row-start: 1;
    // que cada componente quede en un cuadro
    display: grid;
    // grilla horizontal
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    // elementos alineados
    text-align: center;
    // Borde
    border: 3px solid black;
    // Cada elementotiene su popio borde
    border-radius: 5px;

    // Elementos
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
      // puntero
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }

  // Elemento 2: Title bar
  .title-bar-container {
    // Margen del contenedor
    margin: 0.5rem;
    // Borde solido 1rem con puntas suaves
    border: 3px solid black;
    // Borde interno redondeado
    border-radius: 5px;
    // posicionamiento del contenedor
    grid-row-start: 2;
    // que cada componente quede en un cuadro
    display: flex;
    // grilla horizontal
    flex-direction: row;
    // elementos alineados
    text-align: center;
    // Borde
    border: 3px solid black;
    // Elementos
    // Cada elementotiene su popio borde
    border-radius: 5px;
    // Elementos
    .bar-title {
      // Elementos
      span {
        font-size: 2em;
        font-weight: bold;
        color: black;
      }
    }
    .bar-search {
      // Elementos
      form {
        // Elementos
        input {
          // Elementos
          border: 1px solid black;
          border-radius: 5px;
          padding: 5px;
          margin: 5px;
          color: black;
          &:hover {
            background-color: black;
            color: white;
          }
        }
      }
    }
  }
  // Elemento 3: Big container
  .big-container {
    // Margen del contenedor
    margin: 0.5rem;
    // posicionamiento del contenedor
    grid-row-start: 3;
    // que cada componente quede en un cuadro
    border: 3px solid black;
    // Cada elementotiene su popio borde
    border-radius: 5px;
    // Este gran contenedor tiene 2 elementos principales
    display: grid;
    // grilla horizontal
    grid-template-columns: 1fr 4fr;
    .list-container {
      // Elementos
      display: grid;
      // grilla vertical 2 elementos
      grid-template-rows: 1fr 7fr;
      // elementos alineados
      text-align: center;
      // Borde
      border: 3px solid black;
      // Cada elementotiene su popio borde
      border-radius: 5px;
      // margen
      margin: 0.5rem;
      // Elementos
      .icons-container {
        // Margen del contenedor
        margin: 0.5rem;
        // 2 Elementos horizontales
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .item-container {
        // varios elementos verticales
        display: flex;
        flex-direction: column;
        // Alineacion de los elementos a la izquierda
        align-items: flex-start;

        // Elementos
        .item {
          // margen de los elementos
          margin: 0.5rem;
        }
      } // fin del item-container
    } // fin list-container

    // 2 elemento central
    .central-container {
      // borde
      border: 3px solid black;
      // suavizado de bordes
      border-radius: 5px;
      // margen
      margin: 0.5rem;
      // Grilla vertical 3 elementos
      display: grid;
      grid-template-rows: 1fr 0.5fr 1fr;
      // Elementos
      .central-portada {
        // border
        border: 3px solid black;
        // suavizado de bordes
        border-radius: 5px;
        // margen
        margin: 0.5rem;
      }
      .central-info {
        // border
        border: 3px solid black;
        // suavizado de bordes
        border-radius: 5px;
        // margen
        margin: 0.5rem;
      }
      .central-abajo {
        // border
        border: 3px solid black;
        // suavizado de bordes
        border-radius: 5px;
        // margen
        margin: 0.5rem;
      }
    }
  }
}
</style>
