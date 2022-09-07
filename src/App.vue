
<template  >
  <section class="main-app">
    <div v-if="tasks">
      <home />
    </div>

  </section>
</template>


<script>
import home from './pages/home.vue'



export default {
  data() {
    return {

    }
  },
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadTasks' })
    this.$store.dispatch({ type: 'loadEmptyTask' })


  },
  methods: {


  },
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },

  },
  components: {
    home

  },
}
</script>


