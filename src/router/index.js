import Vue from 'vue'
import Router from 'vue-router'

import login from './map/login'
import home from './map/home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        home,
        ...login
    ]
})
