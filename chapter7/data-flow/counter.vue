<template>
    <div>
        <p>{{getCount}}</p>
        <button v-on:click="increment">+</button>
    </div>
</template>

<script>
    export default {
        name: "counter",
        data() {
            return {
                count: 0
            }
        },
        computed: {
            getCount() {
                return this.count;
            }
        },
        methods: {
            increment() {
                this.count += 1
            }
        }
    }
</script>

<style scoped>

</style>