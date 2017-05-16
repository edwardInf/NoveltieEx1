// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Vuetify from 'vuetify'
import Cabecera from './components/Cabecera'
import Slider from './components/Slider'
import Body from './components/Body'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(Vuetify)
Vue.material.registerTheme('default', {
  primary: 'indigo',
  accent: 'amber',
  warn: 'red'
})
Vue.component('app-cabecera', Cabecera)
Vue.component('app-slider', Slider)
Vue.component('app-body', Body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
