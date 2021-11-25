<template>
  <div class="wapper-map">
    <div class="data-container">
      <!--      Contenedor texto y boton-->
      <div class="searchbar-container">
        <!--          Barra de busqueda-->
        <input
          class="searchbar"
          type="text"
          v-model="search"
          placeholder="Search for a location"
        />
        <!--          Boton de busqueda-->
        <button @click="searchLocation" class="button">Search</button>
      </div>
      <!--        Imagen-->
      <div class="image-container">
        <img
          class="image"
          src="https://tamearauca.com/wp-content/uploads/2021/07/Logowebtamearauca.png"
          alt=""
        />
      </div>
      <!--        3 botones-->
      <div class="buttons-container">
        <button @click="getLocation" class="button_small">GG</button>
        <button @click="getLocation" class="button_small">AA</button>
        <button @click="getLocation" class="button_small">CC</button>
      </div>
      <!--        Titulo-->
      <div class="title-container">
        <text class="title">Location</text>
      </div>
      <!--        Parrafo-->
      <div class="paragraph-container">
        <text class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </text>
      </div>
    </div>
    <!--    Mapa-->
    <div class="map-container">
      <iframe
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15713.356048339641!2d-71.76854610950656!3d6.461532512296771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ec6284b25144b%3A0x1c87b6ac45c41251!2sHotel%20La%20Cordillera%20Caba%C3%B1as%20Tame!5e1!3m2!1ses!2sco!4v1637829534964!5m2!1ses!2sco"
        width="400"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Map",
});
</script>

// Estilos
<style scoped lang="scss">
// Todo el contenedor
.wapper-map {
  // 100% de la pantalla
  height: 100vh;
  // No se vea el scroll
  onderflow: hidden;
  // Color de fondo
  background-color: #adadad;
  // Grid
  display: grid;
  // Espaciado entre columnas
  grid-template-columns: 1fr 3fr;
  // separacion entre columnas
  //grid-column-gap: 1rem;
}

// Contenedor de datos
.data-container {
  // Borde solido 1rem con puntas suaves
  border: 3px solid black;
  // Borde interno redondeado
  border-radius: 5px;
  // Margen del contenedor
  margin: 0.5rem;
  // Desplazamiento del contenedor
  padding: 1rem;

  // Margen del contenedor de datos
  margin: 0.5rem;
  // Posicionamiento del contenedor de datos
  grid-column: 1 / 2;
  // El contenedor de datos ocupa todo el espacio de data-container
  display: flex;
  // Orientacion vertical
  flex-direction: column;
  // No scroll
  overflow: auto;

  // 1 Elemento Searchbar-container
  .searchbar-container {
    // Posicionamiento del contenedor de busqueda
    display: flex;
    // Orientacion horizontal
    flex-direction: row;
    // Responsive
    @media (max-width: 600px) {
      // Alineacion del contenedor de busqueda
      align-items: center;
    }
    // 1 Elemento Searchbar
    .searchbar {
      // Ancho del input
      width: 100%;
      // Color de fondo
      background-color: #fff;
      // Color de texto
      color: #000;
      // Margen del input
      margin: 0.5rem;
      // Borde del input
      border: 1px solid #000;
      // Borde del input
      border-radius: 5px;
      // Padding del input
      padding: 0.5rem;
    }
    // 2 Elemento Button
    .button {
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

  // 2 Elemento Imagen-container
  .image-container {
    // Centrada tamaño medio
    align-self: center;
    // Posicionamiento del contenedor de imagen
    display: flex;
    // Orientacion horizontal
    flex-direction: row;
    // Responsive
    @media (max-width: 200px) {
      // Alineacion del contenedor de imagen
      align-items: center;
    }
    // 1 Elemento Imagen
    .image {
      // Ancho de la imagen
      width: 100%;
      // Alto de la imagen
      height: 100%;
      // Posicionamiento de la imagen
      align-self: center;
      // Borde redondeado
      border-radius: 5px;
    }
  }

  // 3 Elemento Buttons-container
  .buttons-container {
    // Posicionamiento del contenedor de botones
    display: flex;
    // Orientacion vertical
    flex-direction: row;
    // Margen del contenedor de botones
    //margin: 1rem;
    // Elementos centrados ocupan todo el espacio
    justify-content: center;
    // button_small
    .button_small {
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

  // 4 Elemento Title-container
  .title-container {
    // Margen del contenedor de titulo
    margin: 0.5rem;
    // Elementos centrados ocupan todo el espacio
    justify-content: center;
    // Responsive
    @media (max-width: 600px) {
      // Alineacion del contenedor de titulo
      align-items: center;
    }
    // title
    .title {
      // Bold
      font-weight: bold;
      // Tamaño del titulo
      font-size: 1.5rem;
    }
  }

  // 5 Elemento Description-container
  .description-container {
    // Efecto scroll
    overflow-y: scroll;
    // Margen del contenedor de descripcion
    margin: 0.5rem;
    // Elementos centrados ocupan todo el espacio
    justify-content: center;
    // description
    .description {
      // Tamaño del titulo
      font-size: 1rem;
    }
  }
}

// Mapa
.map-container {
  // Columna 2
  grid-column: 2 / 3;
  // Borde solido 1rem con puntas suaves
  border: 3px solid black;
  // Borde interno redondeado
  border-radius: 5px;
  // Margen del mapa
  margin: 0.5rem;

  // El mapa ocupa todo el espacio de map-container
  .map {
    width: 100%;
    height: 100%;
  }
}
</style>
