import Vue from 'vue'
import App from './App.vue'

//关掉生产环境的提示
Vue.config.productionTip = false

new Vue({
  //渲染app vue文件
  render: h => h(App),
  //将内容挂载到id为app的标签下
}).$mount('#app')
