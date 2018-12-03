import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Axios from 'axios'

Vue.prototype.$axios = Axios
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
