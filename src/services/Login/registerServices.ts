import { user_register } from "@/store/urls";
import { sendRequest } from "@/services/API/api-rest";
import { userFull } from "@/types/users/user/userFull";
export const registerServices = {
    async register(user: userFull): Promise<null> {
        const url: string = process.env.VUE_APP_BASE_URL.concat(user_register);
        const response = await sendRequest(url, "POST", JSON.stringify(user));
        return await response.json();
    },

};