import {createRouter, createWebHistory} from 'vue-router'
import routerMap from "./routerMap";


/**
 * @desc 官方文档
 * @link https://router.vuejs.org/zh/guide/#javascript
 */
const router = createRouter({
  history: createWebHistory('/'),
  routes: routerMap
})


export default router
