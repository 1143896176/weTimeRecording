import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
// import { Button } from 'ant-design-vue'
import {Button}from 'mint-ui'
import './mock/mockServer'
//注册全局标签
Vue.component(Button.name, Button)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
