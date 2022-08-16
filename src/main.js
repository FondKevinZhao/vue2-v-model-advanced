import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
import router from './router/index'

Vue.config.productionTip = false

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = 'axios'

new Vue({
  render: (h) => h(App),
  router,
  // 根组件的数据-data- 实现数据共享，所有的组件实例都可以访问这个数据
  data: {
    user: 'admin',
    info: {
      name: 'abc',
      age: 19,
    },
  },
}).$mount('#app')
;('A')
