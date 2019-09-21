import Vue from 'vue'
import App from './App.vue'

import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VCharts from 'v-charts'

import APlayer from '@moefe/vue-aplayer'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(ElementUI)

Vue.use(VCharts)

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: false
})

Vue.use(VueFullPage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
