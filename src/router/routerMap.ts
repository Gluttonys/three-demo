import {RouteRecordRaw} from "vue-router";

const routerMap: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/douyin'
  },
  {
    path: '/home-page',
    name: "3D模型渲染",
    component: () => import('../pages/Homepage/index.vue'),
  },
  {
    path: '/douyin',
    name: "抖音直播点赞特效",
    component: () => import('../pages/Douyin/index.vue'),
  },
  {
    path: '/CSS-aspect-ratio',
    name: "CSS横纵比【aspect-ratio】",
    component: () => import('../pages/CSSAspectRatio/index.vue'),
  },
  {
    path: '/CSS-clip-path',
    name: "CSS裁剪【clip-path】",
    component: () => import('../pages/CSSClip/index.vue'),
  }
]


export default routerMap
