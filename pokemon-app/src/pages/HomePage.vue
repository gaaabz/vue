<script setup lang="ts">
import PokemonCard from "@/components/PokemonCard/PokemonCard.vue";
import { getPokemonList } from "@/services/PokemonService";
import type { PokemonItem } from "@/types";
import { onMounted, ref } from "vue";

const pokemonList = ref<Array<PokemonItem>>();

onMounted(async () => {
    await getPokemonList().then((response) => {
        pokemonList.value = response.results;
    });
});
</script>

<template>
    <div class="bg-white rounded-xl w-full max-w-screen-lg shadow-2xl p-8">
        <div class="grid grid-cols-4 gap-4">
            <pokemon-card
                v-for="pokemon in pokemonList"
                :key="pokemon.name"
                :name="pokemon.name"
                :url="pokemon.url"
            />
        </div>
    </div>
</template>

<style scoped></style>
