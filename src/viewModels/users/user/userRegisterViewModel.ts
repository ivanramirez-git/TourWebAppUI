import { userFull } from "@/types/users/user/userFull";
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
import { registerServices } from "@/services/Login/registerServices"


export function vm()
{
    const userFull: Ref<userFull> = ref({
        userID:"",username:"",userFirstName:"",userLastName:"",userPassword:""
    }); //Instanciar "variable" userFull
    const router = useRouter();
    async function register()
    {
        await registerServices.register(
            userFull.value
        );
        await router.push("/login");
    }
    return{
        userFull,
        register,
    };
}