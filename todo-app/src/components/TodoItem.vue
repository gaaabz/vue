<script setup lang="ts">
const props = defineProps<{
    id: string;
    title: string;
    completed: boolean;
}>();

const taskClasses = ["task__container", props.completed && "completed"];
</script>

<template>
    <label :for="id" :class="taskClasses">
        <div class="task__checkbox">
            <svg
                version="1.1"
                viewBox="0 0 405.272 405.272"
                xml:space="preserve"
                fill="currentColor"
            >
                <g>
                    <path
                        d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"
                    />
                </g>
            </svg>
            <input
                type="checkbox"
                class="hidden"
                :id="id"
                :checked="completed"
            />
        </div>
        <div class="task__title">{{ title }}</div>
    </label>
</template>

<style scoped lang="scss">
.task__container {
    @apply rounded-lg p-4 flex items-center border border-slate-200 gap-4 cursor-pointer hover:bg-slate-50;

    &.completed {
        @apply border-transparent;

        .task__checkbox {
            @apply bg-green-200 border-green-200 text-green-500;

            svg {
                @apply block text-green-700;
            }
        }

        .task__title {
            @apply line-through text-slate-400;
        }
    }
}

.task__checkbox {
    @apply w-6 h-6 rounded-full border border-slate-200 p-1 bg-white;

    svg {
        @apply hidden h-full w-full object-contain object-center;
    }
}

.task__title {
    @apply text-sm text-slate-800;
}
</style>
