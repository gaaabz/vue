import type { Task } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useTaskStore = defineStore('task', () => {
    const tasks = ref<Array<Task>>([])

    function pushTask(task: Task) {
        tasks.value.push(task);
    };

    function taskCompleted(task: Task) {
        task.completed = !task.completed;
    }

    const incompleteTasks = computed(() => {
        return tasks.value.filter((task) => !task.completed);
    });

    const completedTasks = computed(() => {
        return tasks.value.filter((task) => task.completed);
    });

    return {
        completedTasks,
        incompleteTasks,
        tasks,
        taskCompleted,
        pushTask,
    }
})

export default useTaskStore;