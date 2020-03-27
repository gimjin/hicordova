import Vue from 'vue'
import ElementUI from 'element-ui'
import router from '@/router.js'
import store from '@/store.js'
import App from '@/App'

import 'element-ui/lib/theme-chalk/index.css'
import '@/base.css'

Vue.use(ElementUI)
Vue.config.productionTip = process.env.NODE_ENV !== 'production'

if (RUN_CORDOVA) { // eslint-disable-line
  document.addEventListener('deviceready', function () {
    // overlay statusbar
    StatusBar.overlaysWebView(true) // eslint-disable-line
    StatusBar.styleLightContent() // eslint-disable-line
    new Vue({
      render: function (h) {
        return h(App)
      },
      router,
      store
    }).$mount('#app')
  }, false)
} else {
  new Vue({
    render: function (h) {
      return h(App)
    },
    router,
    store
  }).$mount('#app')
}
