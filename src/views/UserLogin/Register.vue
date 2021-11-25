<template>
    <div class="wrapper-login">
        <div class="form-login">
            <p class="login-title">Register Format</p>
            <div class="wrapper-input">
                <label for="user" class="tag-input-login">Username</label>
                <input type="text"
                       class="input-login"
                       id="user"
                       v-model="userFull.username" />
            </div>
            <div class="wrapper-input">
                <label for="user" class="tag-input-login">First Name</label>
                <input type="text"
                       class="input-login"
                       id="user"
                       v-model="userFull.userFirstName" />
            </div>
            <div class="wrapper-input">
                <label for="user" class="tag-input-login">Last Name</label>
                <input type="text"
                       class="input-login"
                       id="user"
                       v-model="userFull.userLastName" />
            </div>
            <div class="wrapper-input">
                <label for="password" class="tag-input-login">Password</label>
                <input type="password"
                       class="input-login"
                       id="password"
                       v-model="userFull.userPassword" />
            </div>

            <input type="submit"
                   value="Registrarse"
                   class="submit-login"
                   @click="register" />
        </div>
        <div class="image-login">
            <img src="@/assets/register_photo.jpg" alt="" class="truck-image" />
            <p class="legend">
                Connect yourself!
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { vm } from "@/viewModels/users/user/userRegisterViewModel";
export default defineComponent({
  name: "register",
  setup() {
    const { userFull, register } = vm();
    return { userFull, register };
  },
});
</script>

<style scoped lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
    @import "/src/styles/registerStyle.scss";
</style>