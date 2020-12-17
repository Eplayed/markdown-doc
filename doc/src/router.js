/*
 * @Author: zyj
 * @Date: 2020-12-17 13:11:25
 * @LastEditors: zyj
 * @LastEditTime: 2020-12-17 13:17:09
 * @Description: file content
 * @FilePath: /markdown-doc/doc/src/router.js
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from './Views/Home.jsx'
import Contact from './Views/Contact.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/contact',
        component: Contact
      }
    ]
  })
  
  export default router