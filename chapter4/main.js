let UserList = {
    template: '#user-list',
    data: function () {
        return {
            users: function () {
                return []
            },
            error: null
        }
    },
    beforeRouteEnter: function (to, from, next) {
        getUsers(function (err, users) {
            if (err) {
                this.error = err.toString()
            } else {
                next(function (vm) {
                    vm.users = users
                })
            }
        }).bind(this)
    }
};

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
            component: UserList,
            beforeEnter: function (to, from, next) {
                if (to.query.redirect === 'true') {
                    next('/top')
                } else {
                    next()
                }
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