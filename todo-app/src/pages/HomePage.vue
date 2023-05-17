<script lang="ts" setup>
import TodoList from "@/components/TodoList.vue";
import TodoTitle from "@/components/TodoTitle.vue";
import { useTaskStore } from "@/stores";
import type { Task } from "@/types";
import { storeToRefs } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";

const store = useTaskStore();
const { completedTasks, incompleteTasks } = storeToRefs(store);
const { pushTask } = store;
const myuuid: string = uuidv4();
const taskId = ref(myuuid);
const task = ref<Task>({
    id: taskId.value,
    title: "",
    completed: false,
});

const handleTask = (newTask: Task) => {
    if (!newTask.title) return;

    pushTask(newTask);

    task.value = {
        id: uuidv4(),
        title: "",
        completed: false,
    };
};
</script>

<template>
    <div class="bg-white rounded-xl min-w-[300px] md:min-w-[400px] shadow-2xl">
        <header class="p-4 border-b border-slate-100">
            <div class="flex bg-slate-100 w-full rounded-full items-center p-2">
                <input
                    v-model="task.title"
                    class="bg-transparent text-sm text-slate-900 px-4 placeholder-slate-500 font-medium focus:outline-none flex-1 h-8"
                    placeholder="Add Item"
                    type="text"
                    @keyup.enter="handleTask(task)"
                />
                <button
                    @click="handleTask(task)"
                    class="rounded-full bg-green-600 text-white h-8 w-8 text-2xl flex items-center justify-center flex-none"
                >
                    <i
                        class="fi fi-br-plus-small w-full flex items-center justify-center h-full"
                    ></i>
                </button>
            </div>
        </header>
        <section class="p-4">
            <todo-title title="To Do" />
            <todo-list :tasks="incompleteTasks" />

            <todo-title title="Completed" />
            <todo-list :tasks="completedTasks" />
        </section>
    </div>
</template>

<style lang="scss" scoped></style>
