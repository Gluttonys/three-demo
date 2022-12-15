import {RouteRecordRaw} from "vue-router";

import {
  BigNumber,
  CssAspectRatio,
  CssClip,
  Dialog,
  Douyin,
  Homepage,
  ImgLazy,
  InfiniteScroll,
  Ins,
  Interval,
  Link,
  NetWork,
  SmartIsland,
  TypescriptInterface
} from "@/pages";


const routerMap: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/douyin'
  },
  {
    path: '/home-page',
    name: "3D模型渲染",
    component: Homepage,
  },
  {
    path: '/douyin',
    name: "抖音直播点赞特效",
    children: [
      {
        path: "/douyin/test",
        name: "测试子菜单",
        component: Douyin,
      }
    ]
  },
  {
    path: '/html-dialog',
    name: "HTML dialog 标签",
    component: Dialog,
  },
  {
    path: '/css-aspect-ratio',
    name: "CSS横纵比【aspect-ratio】",
    component: CssAspectRatio,
  },
  {
    path: '/css-clip-path',
    name: "CSS裁剪【clip-path】",
    component: CssClip,
  },
  {
    path: '/smart-island',
    name: "灵动岛效果",
    component: SmartIsland,
  },
  {
    path: '/typescript-interface',
    name: "ts获取接口指定类型",
    component: TypescriptInterface,
  },
  {
    path: '/img-lazy',
    name: "图片 lazy 属性",
    component: ImgLazy,
  },
  {
    path: '/cesium',
    name: "cesium学习",
    children: [
      {
        path: "/cesium/link",
        name: "学习网站",
        component: Link,
      },
      {
        path: "/cesium/ins",
        name: "实例",
        component: Ins,
      },
    ]
  },
  {
    path: '/big-number',
    name: "大数字",
    component: BigNumber,
  },
  {
    path: '/net-work',
    name: "自定义接口测试",
    component: NetWork,
  },
  {
    path: '/infinite-scroll',
    name: "无限滚动",
    component: InfiniteScroll,
  },
  {
    path: '/interval',
    name: "定时器实现",
    component: Interval,
  },

]


export default routerMap
