<template>
    <div class="multi-checkbox flex  main-layout justify-between">
        <div class="flex ">
                <h2> Mistar Tasker</h2>
            </div>



        <div class="filters flex ">
            <div class="title">
                <el-input type="text" v-model="this.filterBy.txt" @input="filerByTxt" placeholder="search by title" />
            </div>
           

            <div class="select Importance flex justify-between">
                <el-select @change="filerByTxt" v-model="this.filterBy.importance" filterable allow-create
                    default-first-option :reserve-keyword="false" placeholder="Search By Importance">
                    <el-option v-for="(importance, idx) in this.importance" :value="importance" :key="idx">
                        {{ importance }}
                    </el-option>
                    {{ this.filterBy.importance }}
                </el-select>
            </div>
        

            <div class=" select status flex justify-between">
                <el-select @change="filerByTxt" v-model="this.filterBy.status" filterable allow-create
                    default-first-option :reserve-keyword="false" placeholder="Search By Status">
                    <el-option v-for="(status, idx) in this.status" :value="status" :key="idx">
                        {{ status }}
                    </el-option>

                </el-select>

            </div>

        </div>
    </div>

</template>

<script>

export default {
    props: {
        options: {

        },
    },
    data() {
        return {
            importance: [1, 2, 3, 4],
            status: ['New', 'Failed', 'Dan', 'Canceled'],
            filterBy: {
                txt: "",
                status: "",
                importance: "",
                sortDir:1,
                sortTxt: 'title',
            }
        }
    },

    methods: {
        filerByTxt() {
            this.$store.dispatch({ type: 'loadTasks', filterBy: this.filterBy })
            // this.filterBy = {
            //     txt: "",
            //     status: "",
            //     importance: "",
            // }
        }

    },
    components: {

    }
}
</script>
