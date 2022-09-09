<template  >
    <div class="task-wrapper flex justify-between">
        <span class="title">{{ task.title }}</span>
        <span class="importance">{{ task.importance }}</span>
        <span class="status">
            <select v-model="this.task.status" class="task-status" @change="changeStatus(this.task.status)"
                :class="task.status">
                <option v-for="(status, idx) in this.status" :value="status" key="idx">
                    {{ status }}
                </option>
            </select>
        </span>
        <span class="triesCount">{{ task.startDate }}</span>
        <span class="triesCount">{{ task.dueDate }}</span>
        <el-icon>
            <el-button type="danger" plain @click="remove(task)">
                <Delete />
            </el-button>
            <el-button type="primary" plain @click="isOpenModaladd = !isOpenModaladd">
                <EditPen />
            </el-button>
        </el-icon>
        <adit v-if="isOpenModaladd" @close="isOpenModaladd = false" :taskToEdit="task" />
    </div>

</template>
<script>

import adit from "./edit.cmp.vue"

export default {
    name: 'task-preview',
    props: {
        task: Object,
    },
    data() {
        return {
            isOpenModaladd: false,
            newTask: {},
            status: ['New', 'Failed', 'Dan', 'Canceled'],




        }
    },
    created() {
        this.newTask = this.task
    },
    methods: {
        remove() {
            this.$store.dispatch({ type: 'removeTask', task: this.task })
            socketService.emit('task-removed', this.task)
        },
        async changeStatus(status) {
            try {
                this.newTask.status = status
                await this.$store.dispatch({ type: 'saveTask', task: this.newTask })
                this.$store.dispatch({ type: 'loadTasks' })

            } catch (err) {
                console.log("Error: cannot save task", err)
                throw err
            }



            
        }
    },
    computed: {},
    components: {
        adit

    },
}

</script>

