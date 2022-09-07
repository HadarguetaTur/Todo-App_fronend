<template  >
    <div class="task-wrapper flex justify-between">
        <span class="title">{{ task.title }}</span>
        <span class="importance">{{ task.importance }}</span>
        <span class="status">{{ task.status }}</span>
        <span class="triesCount">{{ task.startDate }}</span>
        <span class="triesCount">{{ task.dueDate }}</span>
        <el-icon>
            <el-button type="danger" plain  @click="remove(task)">
                <Delete />
            </el-button>
            <el-button :type="task.status==='Dan' ? 'warning':'success'" plain @click="changeStatus(task)"> 
              <span v-if="task.status==='Dan'"><Refresh /></span>
              <span v-else><CircleCheck /></span>      
            </el-button>
            <el-button type="primary" plain @click="isOpenModaladd = !isOpenModaladd">
                <EditPen />
            </el-button>



        </el-icon>
        <adit v-if="isOpenModaladd" @close="isOpenModaladd = false" :taskToEdit="this.copy" />

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
            newTask: null,
            copy: this.task,
            isDan: null


        }
    },
    created() {
        this.newTask = this.$store.dispatch({ type: 'loadEmptyTask' })
        this.isDan = (this.task.status === 'Dan' ? true : false)
        console.log(this.isDan)

    },
    methods: {
        remove() {
            this.$store.dispatch({ type: 'removeTask', task: this.task })
            socketService.emit('task-removed', this.task)
        },
        changeStatus(task) {

            this.newTask = task
            this.newTask.status = (this.isDan ? 'New' : 'Dan')
            // this.isDan = !this.isDan
            this.$store.dispatch({ type: 'saveTask', task: this.newTask })
            this.$store.dispatch({ type: 'loadTasks' })
            socketService.emit('task-added', task)

        }
    },
    computed: {},
    components: {
        adit

    },
}

</script>

