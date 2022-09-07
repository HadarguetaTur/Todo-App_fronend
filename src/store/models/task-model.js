import { taskService } from "../../services/task.service.js"

export default {
  state: {
    tasks: [],
    emptyTask: {},
    editTask: {},

  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    getEmptyTask() {
      return state.emptyTask
    }
  },

  mutations: {
    setTasks(state, { tasks }) {
      console.log(tasks)
      state.tasks = tasks
    },
    setEnptyTask(state, { task }) {
      state.emptyTask = task
      console.log(state.emptyTask)
    },
    setEditTask(state, { task }) {
      state.editTask = task
      console.log(state.emptyTask)
    },
    saveTask(state, { task }) {
      state.tasks.push(task)
    },
    removeTask(state, { task }) {
      const idx = state.tasks.findIndex((taskToRemove) => taskToRemove._id === task._id)
      state.tasks.splice(idx, 1)

    }
  },
  actions: {
    async loadTasks({ commit }, { filterBy }) {
      try {
        console.log(filterBy)
        const tasks = await taskService.query(filterBy)
        console.log(tasks)
        commit({ type: "setTasks", tasks })
        return tasks
      } catch (err) {
        console.log("Error in query tasks (store)", err)
        throw err
      }
    },
    async loadEmptyTask({ commit }) {
      try {
        const task = await taskService.getEmptyTask()

        commit({ type: "setEnptyTask", task })
        return task
      } catch (err) {
        console.log("Error in getEmpty tasks (store)", err)
        throw err
      }
    },
    async loadTaskById({ commit }, { id }) {
      try {
        console.log(id)
        const task = await taskService.getById(id)
        console.log(task)
        commit({ type: "setEditTask", task })
        return task
      } catch (err) {
        console.log("Error in getEmpty tasks (store)", err)
        throw err
      }
    },
    async saveTask({ commit }, { task }) {
      try {
        console.log(task)
        const taskToSave = await taskService.save(task)

        commit({ type: "saveTask", taskToSave })
      } catch (err) {
        console.log("Error: cannot save task", err)
        throw err
      }
    },
    async removeTask({ commit }, { task }) {
      try {
        const taskToremove = await taskService.remove(task)
        commit({ type: "removeTask", taskToremove })
      } catch (err) {
        console.log("Error: cannot save task", err)
        throw err
      }
    },
  },
}
