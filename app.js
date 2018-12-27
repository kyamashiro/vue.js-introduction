console.assert(typeof Vue !== 'undefined');
let items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 1
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 2
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 3
    }
];

let vm = new Vue({
    el: '#app',
    data: {
        items: items
    },
    filters: {
        numberWithDelimiter: function (value) {
            if (!value) {
                return 0
            }

            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    computed: {
        totalPrice: function () {
            return this.items.reduce(
                function (sum, item) {
                    return sum + (item.price * item.quantity)
                }, 0)
        },
        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.08)
        },
        //合計が1000円以上のときに表示する
        canBuy: function () {
            return this.totalPrice >= 1000
        }
    }
});