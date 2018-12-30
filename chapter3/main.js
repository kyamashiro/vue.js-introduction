Vue.component('input-date-with-today', {
    render: function (createElement) {
        return createElement(
            'input', {
                attrs: {
                    type: 'date',
                    value: new Date().toISOString().substring(0, 10)
                }
            })
    }
});

new Vue({
    el: '#example'
});

Vue.component('item-desc', {
    props: {
        itemName: {
            type: String
        }
    },
    template: '<p>{{itemName}}は便利です</p>'
});

new Vue({
    el: '#app',
    data: {
        myItem: 'pen'
    }
});


/*
親から子にしかデータを渡せない
子コンポーネントでpropsを指定し､テンプレート経由で親から子にデータを渡す
*/

//子コンポーネント
Vue.component('fruits-item-name', {
    //親から受け取る属性
    props: {
        fruitsItem: {
            type: Object,
            required: true
        },
    },
    template: '<li>{{fruitsItem.name}}</li>'
});

//親コンポーネント
new Vue({
    //htmlの#fruits-componentの要素
    el: '#fruits-component',
    data: {
        //v-forで使う要素
        fruitsItems: [
            {name: '梨'},
            {name: 'いちご'}
        ]
    }
});

/*
counter-buttonを押すと､addToCart()メソッドが呼ばれ､Dataのcounterが増えると同時に
$emit('increment')でイベントが発火し､v-on='increment'のイベントincrementCartStatusが実行され､合計が増える
 */
//子コンポーネント
var counterButton = Vue.extend({
    template: '<span>{{counter}}個<button v-on:click="addToCart">追加</button></span>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        addToCart: function () {
            this.counter += 1;
            //increment イベントの発火
            this.$emit('increment')
        }
    }
});

//親コンポーネントのカート
new Vue({
    el: '#fruits-counter',
    components: {
        'counter-button': counterButton
    },
    data: {
        total: 0,
        fruits: [
            {name: '梨'},
            {name: 'いちご'}
        ]
    },
    methods: {
        incrementCartStatus: function () {
            this.total += 1
        }
    }
});