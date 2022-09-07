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

        }
    },
    computed: {
        tasks() {
            console.log(this.$store.getters.tasks)
            return this.$store.getters.tasks
        },

    },
    created() {
        console.log(this.$store.getters.tasks)

    },

    components: {
        taskList,
        addTask,

    },

}
</script>