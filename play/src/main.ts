import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Icon from '@dead-moon/components/icon'
import Cascader from '@dead-moon/components/cascader'


const plugins = [
  Icon,
  Cascader
]

const app = createApp(App)

plugins.forEach((plugin) => { app.use(plugin) })

app.mount('#app')
