import {RouteRecordRaw} from "vue-router";

const routerMap: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/douyin'
  },
  {
    path: '/home-page',
    component: () => import('../pages/Homepage/index.vue')
  },
  { /* 抖音点赞特效 */
    path: '/douyin',
    component: () => import('../pages/Douyin/index.vue')
  }
]


export default routerMap
