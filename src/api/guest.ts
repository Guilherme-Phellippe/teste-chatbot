import axios from "axios";
import { API_URL } from "./url-api";

export async function createGuestApi( store_name: string){

    if(!store_name) throw new Error("Its missing store_name prop")

    const guestCreated = await axios
    .post(`${API_URL}/guest`, { client_slug: store_name })
    .catch((error) => console.log({ message: "Error at create guest.", error }));

    return guestCreated
}