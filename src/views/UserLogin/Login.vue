<template>
  <div class="wrapper-login">
      <div class="form-login">
          <p class="login-title">Welcome to TourApp!</p>
          <div class="wrapper-input">
              <label for="user" class="tag-input-login">Username</label>
              <input type="text"
                     class="input-login"
                     id="user"
                     v-model="userLogin.user" />
          </div>
          <div class="wrapper-input">
              <label for="password" class="tag-input-login">Password</label>
              <input type="password"
                     class="input-login"
                     id="password"
                     v-model="userLogin.password" />
          </div>
          <input type="submit"
                 value="Iniciar sesión"
                 class="submit-login"
                 @click="login" />
      
          <input type="submit"
                 value="Registrarse"
                 class="submit-login"
                 @click="register" />
      </div>
    <div class="image-login">
      <img src="@/assets/Assets/login_hotel_asset.jpg" alt="" class="truck-image" />
      <p class="legend">
        Welcome to TourApp! The App where you can create your own dreams...
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { vm } from "@/viewModels/users/user/userLoginViewModel";
export default defineComponent({
  name: "login",
  setup() {
    const { userLogin, login, register } = vm();
    return { userLogin, login, register };
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
@import "/src/styles/loginStyle.scss";
</style>