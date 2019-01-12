<template>
    <form novalidate>
        <!--inputに値が入っているかで､this.validの値が変わり､:classの内容が変わる-->
        <p :class="alertValidation">{{validMessage}}</p>
        <textarea @input="oninput" :class="textboxValidation"></textarea>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                valid: false
            }
        },
        computed: {
            validMessage() {
                return this.valid ? '入力されています' : '入力されていません'
            },
            alertValidation() {
                // styleのalertモジュールのプロパティを返す
                return this.valid ? this.alert.success : this.alert.error
            },
            textboxValidation() {
                return this.valid ? this.textbox.success : this.textbox.error
            }
        },
        methods: {
            isRequired(value) {
                return value.length > 0
            },
            oninput(e) {
                this.valid = this.isRequired(e.target.value)
            }
        }
    }
</script>

<style module="alert">
    .success {
        color: green;
    }

    .error {
        font-weight: bold;
        color: red;
    }
</style>

<style module="textbox">
    .success {
        border: solid 2px green;
    }

    .error {
        border: solid 2px red;
    }
</style>