//ルータコンストラクタ
const router = new VueRouter({
    //ルート定義を配列で渡す
    routes: [
        {
            path: '/top',
            component: {
                template: '<div>トップページ</div>'
            }
        },
        {
            path: '/users',
            component: {
                template: '<div>ユーザ一覧ページ</div>'
            }
        }
    ]
});

let app = new Vue({
    el: '#app',
    router: router
});