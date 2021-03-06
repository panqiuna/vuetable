import Vue from 'vue'
import App from './App'
import router from './router'
import index from './public/index'
Vue.use(index)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
