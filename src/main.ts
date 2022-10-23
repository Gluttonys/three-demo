import {createApp} from 'vue'
import App from './App.vue'
import '@/style/index.less'

import Antd from 'ant-design-vue';
import router from '@/router'
import 'ant-design-vue/dist/antd.css';

import '@/plugins'
import Mock from '@/mock/index'
import {eq} from "lodash";


// @ts-ignore
const env = import.meta.env.MODE

if (eq(env, "development")) {
  new Mock()
}


createApp(App)
  .use(Antd)
  .use(router)
  .mount('#app')
