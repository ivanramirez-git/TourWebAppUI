
import { user_login } from "@/store/urls";
import { sendRequest } from "@/services/API/api-rest";
import { userLogin } from "@/types/users/user/userLogin";
import { userAuth } from "@/types/users/user/userAuth";
export const loginServices = {
    async authenticate(user: userLogin): Promise<userAuth> {
        const url: string = process.env.VUE_APP_BASE_URL.concat(user_login);
        const response = await sendRequest(url, "POST", JSON.stringify(user));
        return await response.json();
    },

    //Logout - TODO
};