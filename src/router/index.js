import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/admin',
    name: 'Admin',
    redirect: '/home',
    component: () =>
      import(/* webpackChunkName: "Admin" */ '../views/Admin.vue'),
    children: [
      // {
      //   path: '/home',
      //   name: 'Home',
      //   component: () =>
      //     import(/* webpackChunkName: "Home" */ '../views/Show.vue')
      // },
      {
        path: '/user',
        name: 'UserIndex',
        component: () =>
          import(/* webpackChunkName: "UserIndex" */ '../views/user/Index.vue'),
        redirect: '/list',
        children: [
          {
            path: '/user/list',
            name: 'List',
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
          import(/* webpackChunkName: "PowerIndex" */ '../views/power/Index.vue'),
        redirect: '/role',
        children: [
          {
            path: '/power/role',
            name: 'Role',
            component: () =>
              import(
                /* webpackChunkName: "PowerRole" */ '../views/power/Role.vue'
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
  }
]

const router = new VueRouter({
  routes
})

export default router