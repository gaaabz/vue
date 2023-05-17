<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import { useTaskStore } from "@/stores";
import type { Task } from "@/types";

const props = defineProps<{
    tasks: Array<Task>;
}>();

const store = useTaskStore();
const { taskCompleted } = store;
</script>

<template>
    <div class="grid grid-rows-1 gap-2 mb-4">
        <div v-for="task in tasks" :key="task.id">
            <todo-item
                :completed="task.completed"
                :id="task.id"
                :title="task.title"
                @click="taskCompleted(task)"
            />
        </div>
    </div>
</template>

<style scoped></style>
