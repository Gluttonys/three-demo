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
  },
  {
    path: '/img-lazy',
    name: "图片 lazy 属性",
    component: () => import('../pages/ImgLazy/index.vue'),
  },
  {
    path: '/cesium',
    name: "cesium学习",
    children: [
      {
        path: "/cesium/link",
        name: "学习网站",
        component: () => import('../pages/cesium/Link/index.vue'),
      },
      {
        path: "/cesium/ins",
        name: "实例",
        component: () => import('../pages/cesium/Ins/index.vue'),
      },
    ]
  },
  {
    path: '/big-number',
    name: "大数字",
    component: () => import('../pages/BigNumber/index.vue'),
  },
  {
    path: '/net-work',
    name: "自定义接口测试",
    component: () => import('../pages/NetWork/index.vue'),
  },
  {
    path: '/infinite-scroll',
    name: "无限滚动",
    component: () => import('../pages/InfiniteScroll/index.vue'),
  },
]


export default routerMap
