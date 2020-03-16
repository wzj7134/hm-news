import Vue from 'vue'
import App from './App.vue'

import 'lib-flexible'
// 引入通用样式
import './style/base.css'
// 引入字体图标
import './style/iconfont.css'

// 引入全局组件HMHeader
import HmLogo from './components/HmLogo.vue'
import HmBottom from './components/HmBottom.vue'
import HmHeader from './components/HmHeader.vue'
import HmInput from './components/HmInput.vue'
import { Toast } from 'vant'
Vue.use(Toast)


Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-bottom', HmBottom)
Vue.component('hm-input', HmInput)
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.axios = axios

const bus = new Vue()
import router from './router'
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
