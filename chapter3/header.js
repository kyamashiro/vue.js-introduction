var headerTemplate =
    '<div style="color: grey">' +
    '<slot name="header">親から何も渡ってこないときこれが表示される</slot>' +
    '</div>';

Vue.component('page-header', {
    template: headerTemplate
});

new Vue({
    el: '#fruits-list'
});