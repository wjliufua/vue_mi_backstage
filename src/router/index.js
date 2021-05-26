import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    redirect: '/home',
    component: () =>
      import(/* webpackChunkName: "Admin" */ '../views/Admin.vue'),
    children: [
      {
        path: '/user',
        name: 'UserIndex',
        component: () =>
          import(/* webpackChunkName: "UserIndex" */ '../views/user/Index.vue'),
        redirect: '/list',
        children: [
          {
            path: '/user/list',
            name: 'UserList',
            component: () =>
              import(
                /* webpackChunkName: "UserList" */ '../views/user/List.vue'
              )
          }
        ]
      },
      {
        path: '/power',
        name: 'PowerIndex',
        component: () =>
          import(
            /* webpackChunkName: "PowerIndex" */ '../views/power/Index.vue'
          ),
        redirect: '/role',
        children: [
          {
            path: '/power/role',
            name: 'Role',
            component: () =>
              import(
                /* webpackChunkName: "PowerRole" */ '../views/power/Role.vue'
              )
          },
          {
            path: '/power/list',
            name: 'RoleList',
            component: () =>
              import(
                /* webpackChunkName: "RoleList" */ '../views/power/List.vue'
              )
          }
        ]
      },
      {
        path: '/goods',
        name: 'GoodsIndex',
        component: () =>
          import(
            /* webpackChunkName: "GoodsIndex" */ '../views/goods/Index.vue'
          ),
        redirect: '/list',
        children: [
          {
            path: '/goods/list',
            name: 'GoodsList',
            component: () =>
              import(
                /* webpackChunkName: "GoodsList" */ '../views/goods/List.vue'
              )
          },
          {
            path: '/goods/sort',
            name: 'GoodsSort',
            component: () =>
              import(
                /* webpackChunkName: "GoodsSort" */ '../views/goods/Sort.vue'
              )
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "test" */ '../views/test.vue')
  }
]

const router = new VueRouter({
  routes
})
var jwt = require('jsonwebtoken')

router.beforeEach((to, from, next) => {
  jwt.decode('token')
  const tokenFlag = jwt.verify(
    window.sessionStorage.getItem('token'),
    'abc',
    (err, decode) => {
      if (err) return false
      return true
    }
  )
  if (to.name !== 'Login' && !tokenFlag) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
