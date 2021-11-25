import { userAuth } from "@/types/users/user/userAuth";
import { readonly, ref, Ref } from "vue";

const userAuth: Ref<userAuth | null> = ref(null);

export function userStore() {
    function save(user: userAuth | null) {
        userAuth.value = user;
    }

    function reset() {
        userAuth.value = null;
    }

    function getToken(): string {
        return userAuth.value?.token ?? "";
    }

    return {
        save,
        reset,
        getToken,
        user: readonly(userAuth),
    };
}