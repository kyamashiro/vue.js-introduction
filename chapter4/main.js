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
        },
        {
            path: '/users/:userid',
            component: {
                template: '<div>ユーザIDは{{$route.params.userid}}です</div>'
            }
        }
    ]
});

let app = new Vue({
    el: '#app',
    router: router
});

//グローバルフック関数
//ページ遷移が起こる直前に関数が実行される
router.beforeEach(function (to, from, next) {
    if (to.path === '/users') {
        next('/top')
    } else {
        next()
    }
});