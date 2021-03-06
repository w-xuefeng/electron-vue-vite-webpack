const isdev = window.APP_ENV === 'development'

import { createApp } from 'vue'
import App from './App'
import router from './router'

const { ipcRenderer } = require('electron') // vite 会编译 import 的形式；所以 electron 及 node.js 内置模块用 require 形式

// isdev && require('ant-design-vue/dist/antd.css') // 开发期全部引入 antd.css；打包期用 babel-plugin-import 按需引入样式
import 'ant-design-vue/dist/antd.css'
import '@/assets/style/boot4-part.less'
import './index.less'

console.log('ipcRenderer:', ipcRenderer)

createApp(App)
  .use(router)
  .mount('#app')
  .$nextTick(window.ClosePreloadLoading)
