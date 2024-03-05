import Vue from 'vue'
import App from './App.vue'
import './assets/formulate.css'
import VueFormulate from "@braid/vue-formulate";


Vue.use(VueFormulate, {
  classes: {
    labelIsValid: "isValid"
  }
});

import './assets/main.css'

new Vue({
  render: (h) => h(App)
}).$mount('#app')
