import { userLogin } from "@/types/users/user/userLogin";
import { userAuth } from "@/types/users/user/userAuth";
import { ref, Ref } from "vue";
import { loginServices } from "@/services/Login/loginServices"
import { useRouter } from "vue-router";
import { userStore } from "@/store/user/user_store_auth";

export function vm() {
    const userLogin: Ref<userLogin> = ref({ user: "", password: "" })
    const userAuth: Ref<userAuth | null> = ref(null);
    const router = useRouter();
    async function login()
    {
        userAuth.value = await loginServices.authenticate(
            userLogin.value
        );
        userStore().save(userAuth.value);
        await router.push("/landing");
    }
    async function register() {
        await router.push("/register");
    }
    return {
        userLogin,
        login,
        userAuth,
        register,
    };
}
