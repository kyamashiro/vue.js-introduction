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