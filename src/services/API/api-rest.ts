
//Solo se tiene que invocár este método con los tres parámetros: URL, Verb y Body.
export async function sendRequest(
    url: string, //LocalHost:Etc...
    verb: string, //Si es POST/PULL/DEL
    body?: any //Generico
): Promise<Response>
{
    const config = {
        method: verb,
        headers: {
            "Content-Type": "application/json",
            //token: userStore().getToken(),
        },
        body: body,
    };
    const response = await fetch(url, config); //My respuesta

    if (!response.ok) {
        const error = await response.json();
        // console.log("Error de api:" + error.error);
        throw new Error(error.error);
    }

    return response; //Retorna mi data
}