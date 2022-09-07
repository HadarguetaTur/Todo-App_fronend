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
              <span v-if="this.newTask.status==='Dan'"><Refresh /></span>
              <span v-else><CircleCheck /></span>      
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
           
     


        }
    },
    created() {
        this.newTask =this.task
    },
    methods: {
        remove() {
            this.$store.dispatch({ type: 'removeTask', task: this.task })
            socketService.emit('task-removed', this.task)
        },
        changeStatus(task) {
            this.newTask.status = (task.status === 'Dan' ? 'New' : 'Dan')
            this.$store.dispatch({ type: 'saveTask', task: this.newTask })
        }
    },
    computed: {},
    components: {
        adit

    },
}

</script>

