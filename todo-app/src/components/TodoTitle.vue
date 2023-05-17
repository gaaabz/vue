<script lang="ts" setup>
const props = defineProps<{
    title: string;
}>();
</script>

<template>
    <h1 class="todo__title">{{ title }}</h1>
</template>

<style scoped lang="scss">
.todo__title {
    @apply uppercase font-semibold text-xs text-slate-400 mb-4;
}
</style>
