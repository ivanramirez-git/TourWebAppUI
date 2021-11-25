<template>
  <!--  componente principal-->
  <div class="waper-createlocation">
    <!--    1 Elemento: titulo y search bar-->
    <div class="title-bar-container">
      <div class="bar-title">
        <span>Add a new location to the tour</span>
      </div>
    </div>
    <!--    3 Elemento: contenedor-->
    <div class="big-container">
      <div class="list-container">
        <div class="icons-container">
          <div class="icon">
            <text> Location details</text>
          </div>
        </div>
        <div class="item-container">
          <text class="item"> Name: </text>
          <div class="bar-search">
            <form>
              <input type="search" placeholder="Name..." />
            </form>
          </div>
          <text class="item"> Country </text>
          <div class="bar-search">
            <form>
              <input type="search" placeholder="Country..." />
            </form>
          </div>
        </div>
        <router-link to="/createtour" class="botton-top-bar">Sumbit location to the Tour</router-link>
      </div>
    </div>
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
.waper-createlocation {
  // baground color
  background-color: #dbe6ff;
  // Tomar toda la vista
  height: 100vh;
  // No Scroll
  overflow: hidden;
  // grid 3 filas no scroleable
  display: grid;
  // Columnas
  grid-template-rows: 0.5fr 0.5fr 5fr;

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
    grid-template-columns: 1fr;
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
      }
      .item-container {
        // varios elementos verticales
        display: flex;
        flex-direction: column;

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
        // Margen del contenedor
        margin: 0.5rem;
        border: 3px solid black;
      }
    }
  }
}
</style>
