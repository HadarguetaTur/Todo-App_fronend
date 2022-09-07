import { createStore } from "vuex"
import taskModul from "./models/task-model.js"


const store = createStore({
  strict: true,
  state: {
    currPage: "homePage",
  },
  getters: {
    currPage(state) {
      return state.currPage
    },
  },
  mutations: {
    setCurrPage(state, { page }) {
      state.currPage = page
    },
  },
  actions: {},
  modules: {
    taskModul,
  
  },
})

export default store
