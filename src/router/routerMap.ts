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
    // component: () => import('../pages/Douyin/index.vue'),
    children: [
      {
        path: "/douyin/test",
        name: "测试子菜单",
        component: () => import('../pages/Douyin/index.vue'),
      }
    ]
  },
  {
    path: '/html-dialog',
    name: "HTML dialog 标签",
    component: () => import('../pages/Dialog/index.vue'),
  },
  {
    path: '/css-aspect-ratio',
    name: "CSS横纵比【aspect-ratio】",
    component: () => import('../pages/CSSAspectRatio/index.vue'),
  },
  {
    path: '/css-clip-path',
    name: "CSS裁剪【clip-path】",
    component: () => import('../pages/CSSClip/index.vue'),
  },
  {
    path: '/smart-island',
    name: "灵动岛效果",
    component: () => import('../pages/SmartIsland/index.vue'),
  },
  {
    path: '/typescript-interface',
    name: "ts获取接口指定类型",
    component: () => import('../pages/TypescriptInterface/index.vue'),
  }
]


export default routerMap
