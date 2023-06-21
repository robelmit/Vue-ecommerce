import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import UserView from '../views/UserView.vue'
import LoginView from '../views/LoginView.vue'
import AddDetailView from '../views/AddDetailView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        if (localStorage.token != null) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/adds',
      name: 'adds',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddView,
      beforeEnter: (to, from, next) => {
        if (localStorage.token != null) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from, next) => {
        if (localStorage.token != null) {
          next('/');
        } else {
          next();
        }
      },
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UserView,
      beforeEnter: (to, from, next) => {
        if (localStorage.token != null) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/users/:id',
      name: 'userdetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UserDetailView,
      beforeEnter: (to, from, next) => {
        if (localStorage.token != null) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/adds/:id',
      name: 'adddetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddDetailView,
      beforeEnter: (to, from, next) => {
        if (localStorage.token != null) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    },
  ]
})

export default router
