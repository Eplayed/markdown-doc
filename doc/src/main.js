/*
 * @Author: zyj
 * @Date: 2020-12-17 10:49:34
 * @LastEditors: zyj
 * @LastEditTime: 2020-12-17 13:23:36
 * @Description: file content
 * @FilePath: /markdown-doc/doc/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
