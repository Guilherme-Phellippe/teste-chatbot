import axios from "axios"
import { API_URL } from "./url-api"

export async function getClient(store_name: string) {
    const client = await axios.get(`${API_URL}/client/${store_name}`).catch(err => console.log(err))

    return client
}

export async function getClientWithGuest(store_name: string, guest: string) {
    const client = await axios.get(`${API_URL}/client/${store_name}/guest/${guest}`).catch(err => console.log(err))

    return client
}

