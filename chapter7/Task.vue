<template>
    <div>
        <input type="text" v-model="filterWord">
        <ul>
            <li v-for="task in filteredTaskList" v-bind:key="task.id">
                <task-list v-bind:task-list="task"></task-list>
            </li>
        </ul>
    </div>
</template>

<script>
    import TaskList from './TaskList'

    export default {
        name: 'TaskList',
        components: {
            TaskList
        },
        props: {
            //タスクの一覧はプロパティで受け取る
            taskList: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                //絞り込むテキスト
                filterWord: ''
            }
        },
        computed: {
            //絞り込み後のタスクを返す
            filteredTaskList() {
                const filtered = this.taskList.filter(
                    task => {
                        return task.name.includes(this.filterWord)
                    }
                );
                return filtered;
            }
        }
    }
</script>

<style scoped>

</style>