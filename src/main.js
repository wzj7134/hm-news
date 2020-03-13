import Vue from 'vue'
import App from './App.vue'
// 通用样式
import './style/base.less'
import './style/iconfont.css'
// 导入lib-flexible
import 'lib-flexible'
// 导入路由
import router from './router'

// 导入通用组件
// 登录头部组件
import HmHeader from './components/HmHeader'
Vue.component('hm-header', HmHeader)

// 登录Logo组件
import HmLogo from './components/HmLogo.vue'
Vue.component('hm-logo', HmLogo)

// 登录按钮组件封装
import HmFooter from './components/HmFooter.vue'
Vue.component('hm-footer', HmFooter)
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
