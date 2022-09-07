import { createRouter, createWebHistory } from 'vue-router'
// import taskList from '../views/taaskList.vue'
// import dashBoard from '../views/deshboard.vue'
import edit from '../components/add-task.cmp.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:id?",
      name: "add-page",
      component: edit,
    },
 

  ]
})

export default router
