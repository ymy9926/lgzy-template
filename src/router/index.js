import Vue from 'vue'
import Router from 'vue-router'
import { saveToLocal, loadFromLocal } from '@/common/js/store'
import Login from '@/components/Login/login'
import Index from '@/components/index/index'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  //console.log(to); // 到哪个页面去？
  //console.log(from); // 从哪个页面来？
  let info = router.app.$options.store.state.user;
  const local = loadFromLocal('login_info', 'user', null);
  console.log(info);
  window.__temp = router.app.$options.store;
  if (info.isLogin) {
    next();
  } else if (local) {
    info.user = local;
    info.isLogin = true;
    next();
  } else if (to.path == '/login') {
    next();
  }
  else if (!info.isLogin) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  } else {
    next();
  }

})

export default router