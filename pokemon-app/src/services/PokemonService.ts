import apiClient from "@/plugins/axios";

export async function getPokemonList() {
    const response = await apiClient.get("pokemon?limit=20&offset=0");
    return response.data;
}

export async function getPokemonDetails(name: string) {
    const response = await apiClient.get(`pokemon/${name}`);
    return response.data;
}
