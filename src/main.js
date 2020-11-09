import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './assets/css/styles.css'

import weather from './store/weather'
Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: function() {
    return {}
  },
  modules: { weather }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
