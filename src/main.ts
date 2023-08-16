import { createApp } from 'vue'
import App from './App.vue'
import '@/style/reset.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import HospitalTop from '@/components/hospital-top/index.vue'
import HospitalBottom from '@/components/hospital-bottom/index.vue'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import router from '@/router'

import pinia from '@/store'


const app = createApp(App)
app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)
app.use(router)
app.use(ElementPlus,{
  locale: zhCn
})
app.use(pinia)
app.mount('#app')
