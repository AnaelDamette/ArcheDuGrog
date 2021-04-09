import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/custom.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ScrollAnimation from './directives/scrollanimation'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


/*
 Register the object here globally as directive, 
 similar if you register a component. 
 But now with Vue.directive, instead of component.
 With this you can use v-scrollanimation 
 in your whole application on each element.
*/
Vue.directive('scrollanimation', ScrollAnimation);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
