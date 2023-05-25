<script setup lang="ts">
import { getPokemonDetails } from "@/services/PokemonService";
import { PokemonDetail } from "@/types";
import { onMounted, ref, watchEffect } from "vue";
import Loading from "../Loading/Loading.vue";

const props = withDefaults(
    defineProps<{
        name: string;
        url: string;
        loading?: boolean;
    }>(),
    {
        loading: true,
    }
);

const pokemonDetail = ref<PokemonDetail>();
const pokemonImage = ref<string>();
const pokemonLoading = ref<boolean>(props.loading);
const pokemonOrder = ref<string>();

watchEffect(() => {
    pokemonLoading.value = pokemonImage.value !== undefined ? false : true;
});

onMounted(async () => {
    await getPokemonDetails(props.name).then((response: PokemonDetail) => {
        pokemonDetail.value = response;
        pokemonImage.value =
            response.sprites.other?.["official-artwork"].front_default;
        pokemonOrder.value = `#${response.order.toString().padStart(3, "0")}`;
    });
});
</script>

<template>
    <article class="pokemon">
        <div class="pokemon__head">
            <h1 class="pokemon__name">{{ pokemonDetail?.name }}</h1>
            <span class="pokemon__order">{{ pokemonOrder }}</span>
        </div>
        <div class="pokemon__body">
            <div class="pokemon__attributes"></div>
            <div class="pokemon__image">
                <Loading v-if="pokemonLoading" />
                <img :src="pokemonImage || ''" alt="" />
            </div>
        </div>
    </article>
</template>

<style scoped src="./PokemonCard.styles.scss"></style>
