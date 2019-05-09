import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import {injectGlobal} from './common/inject'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/reset.less'
import './filters/filter'
import './directives/drag'
//全局注入
injectGlobal()
Vue.use(ElementUI)

Vue.config.productionTip = false
const globalVue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.globalVue = globalVue;
