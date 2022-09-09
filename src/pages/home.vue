<template>
    <section class="home-page">
        <add-task v-if="isOpenModaladd" @close="isOpenModaladd = false" />
        <taskList v-if="tasks" :tasks="tasks" />
        <el-button class="add-btn" type="success" circle @click="isOpenModaladd = true" round>
            <el-icon>
                <Plus />
            </el-icon>
        </el-button>
        <el-button class="date-btn" type="danger" round><el-icon><Calendar /></el-icon></el-button>
        <el-button class="clear-btn" type="primary" round @click="clearTasks()"><el-icon><Delete /></el-icon></el-button>
        <el-button class="help-btn" @click="toggleWorker()" type="warning" round><el-icon><HelpFilled /></el-icon></el-button>  
    </section>
</template>
<script>
import taskList from '../components/task-list.cmp.vue'
import addTask from '../components/add-task.cmp.vue'
export default {
    name: 'home-page',
    data() {
        return {
            isOpenModaladd: false,
            nextTask:null

        }
    },
    computed: {
        tasks() {
            return this.$store.getters.tasks
        },


    },
    methods:{
        clearTasks(){
            this.$store.dispatch({ type: 'clearTasks' })
            this.$store.dispatch({ type: 'loadTasks' })
        },
        toggleWorker() {
            this.nextTask=this.$store.dispatch({ type: 'getTheNextTask' })
            console.log(this.nextTask)

        }
    },
    created() {
     

    },

    components: {
        taskList,
        addTask,

    },

}
</script>