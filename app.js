console.assert(typeof Vue !== 'undefined');
let items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 0
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 0
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 0
    }
];

let vm = new Vue({
    el: '#b-button',
    data: {
        loggedInButton: 'ログイン済みのため購入できます'
    }
});