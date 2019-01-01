var headerTemplate =
    '<div style="color: grey">' +
    '<slot name="header">No title</slot>' +
    '</div>';

Vue.component('page-header', {
    template: headerTemplate
});

let contentTemplate = '<div><slot name="content">No Contents</slot></div>';

Vue.component('page-content', {
    template: contentTemplate
});

new Vue({
    el: '#fruits-list'
});