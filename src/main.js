// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false

window.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3333'

Vue.filter('timeAgo', data => moment(data).fromNow())
Vue.filter('joined', data => moment(data).format('MMMM YYYY'))
Vue.filter('dob', data => moment(data).format('MMMM Do YYYY'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
