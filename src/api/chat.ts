import axios from "axios";
import { API_URL } from "./url-api";

interface requestMessage {
    store_name: string | undefined,
    guest_id: string | null,
    message: string
}

export async function createMessage({ store_name, guest_id, message }: requestMessage) {
    const response = await axios
        .post(`${API_URL}/chat/client/${store_name}/guest/${guest_id}`, { message })
        .catch((error) => console.log({ message: "Error on request the response AI.", error }));

    return response
}

interface chatInfoTypes {
    store_name: string | undefined,
    guest_id: string | null,
}

export async function getChatInfo({store_name, guest_id}: chatInfoTypes) {
    const response = await axios.get(`${API_URL}/chat/info/client/${store_name}/guest/${guest_id}`)
        .catch(err => console.log(err))

    return response
}