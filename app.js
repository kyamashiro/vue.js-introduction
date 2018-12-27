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
    computed: {
        totalPrice: function () {
            return this.items.reduce(
                function (sum, item) {
                    return sum + (item.price * item.quantity)
                }, 0)
        },
        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.08)
        }
    }
});