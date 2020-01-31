// router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/Login'
import Memo from '@/components/Memo'

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
    var isLogin = localStorage.getItem("isLogin");

    if(isLogin) {
        return next();
    }

    next({
        path: '/',
        query: { redirect: to.fullPath }
    })
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Login},
        { path: '/memo', component: Memo, beforeEnter: requireAuth},
        { path: '/logout', component: Login}
    ]
})

export default router