import Vue from 'vue'
import App from './App.vue'

// Math = 'Math'
// 组件中可以使用

// var a = 'a'
// 组件中不能使用

Vue.config.productionTip = false

// 创建一个vue实例并将其绑定到 #app 元素
let vm = new Vue({
  render: h => h(App)
}).$mount('#app')
console.info(vm)
