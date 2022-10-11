import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store/index.js'
import animated from 'animate.css'
import {changeHead} from '@/components/library/index'
createApp(App).use(store).use(animated).use(router)
    //定义自动换头像
    .directive('comp', {
        mounted: (el) => {
        el.src = changeHead()
        }
    })
    .mount('#app')
