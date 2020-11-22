import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

import Home from "@/components/Home";
import News from "@/components/News";
import Video from "@/components/Video";
const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/video', component: Video }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
