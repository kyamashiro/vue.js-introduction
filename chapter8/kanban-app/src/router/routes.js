import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailModal from '@/components/templates/KbnDetailmodal.vue'

// Vue Routerはコンポーネントとルートをマッピングすれば動作する
export default [{
  path: '/',
  component: KbnBoardView,
  // ログインしているかどうかチェックする
  meta: {requiresAuth: true}
}, {
  path: '/login',
  component: KbnLoginView
}, {
  path: '/tasks/:id',
  component: KbnTaskDetailModal,
  // ログインしているかどうかチェックする
  meta: {requiresAuth: true}
}, {
  path: '*',
  redirect: '/'
}]
