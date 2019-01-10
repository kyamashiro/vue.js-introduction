let Sharable = {
    data: function () {
        return {
            _isProcessing: false
        }
    },
    created: function () {
        console.log("Sharableミックスインのフックが呼ばれました")
    },
    methods: {
        share: function () {
            if (this._isProcessing) {
                return
            }
            if (!window.confirm('シェアしますか?')) {
                return
            }
            this._isProcessing = true;

            setTimeout(() => {
                window.alert('シェアしました');
                this._isProcessing = false
            }, 300)
        }
    }
};

let IconShareButton = {
    mixins: [Sharable],
    template: '<button @click="share"><i class="fas fa-share-square"></i></button>',
    created: function () {
        console.log("IconShareButtonのミックスインのフックが呼ばれました")
    },
};

let TextShareButton = {
    mixins: [Sharable],
    template: '<button @click="share">{{buttonLabel}}</button>',
    data: function () {
        return {
            buttonLabel: 'シェアする',
        }
    },
    created: function () {
        console.log("TextShareButtonミックスインのフックが呼ばれました")
    },
};

Vue.mixin({
    data: function () {
        return {
            loggedInUser: null
        }
    },
    created: function () {
        let auth = this.$options.auth;
        this.loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
        if (auth && !this.loggedInUser) {
            window.alert("このページはログインが必要です")
        }
    }
});

let LoginRequiredPage = {
    auth:true,
    template:"<div><p v-if='!loggedInUser'>このページはログインが必要です</p><p v-else>{{loggedInUser.Name}}さんでログインしています</p></div>"
}

new Vue({
    el: '#app',
    components: {
        IconShareButton,
        TextShareButton,
        LoginRequiredPage
    }
});