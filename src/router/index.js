import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
// import { getToken } from '@/utils/auth' // getToken from cookie
const _import = require('./_import_' + process.env.NODE_ENV)
NProgress.configure({ showSpinner: false })// NProgress Configuration

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: _import('main-page/index')
    },
    {
      path: '/articlePage',
      component: _import('article-page/index')
    },
    {
      path: '/projectPage',
      component: _import('project-page/index')
    },
    {
      path: '/teamPage',
      component: _import('team-page/index')
    },
    {
      path: '/contributionPage',
      component: _import('contribution-page/index')
    }
    // {
    //   path: '/personalPage/:id',
    //   component: _import('personal-page/index'),
    //   children: [
    //     {
    //       path: 'setting',
    //       component: _import('personal-page/setting')
    //     },
    //     {
    //       path: 'articles',
    //       component: _import('personal-page/articles')
    //     },
    //     {
    //       path: 'collect',
    //       component: _import('personal-page/collect')
    //     },
    //     {
    //       path: 'focus',
    //       component: _import('personal-page/focus')
    //     },
    //     {
    //       path: 'task',
    //       component: _import('personal-page/task')
    //     }
    //   ]
    // }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   if (!getToken()) {
  //     next('/')
  //   } else {
  //     next()
  //   }
  // } else {
  //   next()
  // }
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
export default router
