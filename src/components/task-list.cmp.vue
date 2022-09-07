<template>
  <add-task v-if="isOpenModaladd" @close="isOpenModaladd = false" />
  <tasksController />
  <ul class="task-list main-layout" >
    <div class="titles">
      <span class="title">Title</span>
      <span class="importance">importance</span>
      <span class="Status">Status</span>
      <span class="Status">Start Date</span>
      <span class="Status">Due Date</span>
      <span class="Status">Action</span>
      <span class="title"></span>
    </div>

    <div v-if="tasks">
      <task-preview v-for="task in tasks" :task="task" :key="task._id" />
    </div>

  </ul>
</template>

<script>
import taskPreview from './task-preview.cmp.vue'
import addTask from './add-task.cmp.vue'
import tasksController from './task-controller.cmp.vue'
import { socketService } from '../services/socket.service.js'


export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
  


    }
  },
  created() {
    socketService.on("task-added", async (task) => {
      this.$store.dispatch({ type: 'loadTasks' })
    })
    socketService.on("task-removed", async (task) => {
      this.$store.dispatch({ type: 'loadTasks' })
    })
    socketService.on("task-filter", async (task) => {
      this.taskes = this.$store.getters.tasks
    })

  },

  components: {
    taskPreview,
    addTask,
    tasksController,

  },

}
</script>
