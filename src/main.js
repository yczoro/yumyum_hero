import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 라우터
import { router } from './router/route.js'

createApp(App).use(router).mount('#wrap')
