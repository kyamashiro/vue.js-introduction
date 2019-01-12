<template>
    <div class="bar">
        <h1 class="header">
            Bar コンポーネント
            .header font-size:50%
        </h1>
        <p>
            これはBarコンポーネントです
        </p>
        <foo class="header"></foo>
    </div>
</template>

<script>
    import Foo from './foo'

    export default {
        components: {
            Foo
        }
    }
</script>

<style scoped>
    .bar {
        border: solid 1px gray;
        margin: 4px;
        padding: 4px;
    }

    .header {
        font-size: 50%;
    }
</style>