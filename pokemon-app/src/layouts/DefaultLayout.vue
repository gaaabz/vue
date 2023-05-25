<script setup lang="ts"></script>

<template>
    <main
        class="min-h-screen bg-gradient-to-r from-green-600 to-sky-600 flex justify-center items-center p-4 flex-col gap-6"
    >
        <h1 class="text-white opacity-50 text-4xl font-bold cursor-default">
            Pokemon App
        </h1>
        <router-view />
        <h1 class="text-white opacity-50 text-sm font-bold cursor-default">
            @gaaabz
        </h1>
    </main>
</template>
