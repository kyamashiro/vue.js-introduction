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

new Vue({
    el: '#app',
    components: {
        IconShareButton,
        TextShareButton
    }
});