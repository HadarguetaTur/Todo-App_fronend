<template>
  <div class="overley"></div>
  <div class="add-task-modal flex column">
    <span class="flex justify-between ">

      <h4>Edit Task</h4>
      <el-button class="close-btn" @click="$emit('close')">✖</el-button>
    </span>
    <label>
      Title:
      <el-input type="text" placeholder="Task name" v-model="task.title" />
    </label>
    <label>
      Description:
      <el-input type="text" placeholder="Task description" v-model="task.description" />
    </label>
    <label>
      Task Importance:
      <el-select v-model="task.importance">
        <el-option value="">Importance</el-option>
        <el-option v-for="(importance, idx) in this.importance" :value="importance" :key="idx">
          {{ importance }}
        </el-option>
      </el-select>

    </label>
    <label>
      Task Status:
      <el-select v-model="task.status">
        <el-option value="">Status</el-option>
        <el-option v-for="(status, idx) in this.status" :value="status" placeholder="status" :key="idx">
          {{ status }}
        </el-option>
      </el-select>
    </label>
    <label>
      Due Date:
      <el-input type="date" v-model="task.dueDate" />
    </label>
    <label>
      Start Date:
      <el-input type="date" v-model="task.startDate" />
    </label>
    <el-button type="info" plain @click.stop="add(this.task), $emit('close')">Add</el-button>
  </div>
  {{ this.taskId }}

</template>


<script>
import { socketService } from '../services/socket.service.js'


export default {
  name: 'add-page',
  props: {
    taskId: String,
  },
  data() {
    return {
      status: ['New', 'Failed', 'Dan', 'Canceled'],
      importance: ["1", "2", "3", "4"],
      task: {}

    }
  },
  create() {
    this.task = this.$store.dispatch({ type: 'loadTaskById', id: taskId})
  },
  methods: {
    add(task) {
      console.log(this.task)
      this.$store.dispatch({ type: 'saveTask', task: this.task })
    }
  },
  components: {



  },
}
</script>